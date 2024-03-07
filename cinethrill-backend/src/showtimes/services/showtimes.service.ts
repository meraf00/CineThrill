import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateShowtimeDto } from '../dto/create-showtime.dto';
import { UpdateShowtimeDto } from '../dto/update-showtime.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { Showtime } from '../entities/showtime.entity';
import { MovieService } from '@/movie/services/movie.service';
import { HallsService } from '@/halls/services/halls.service';
import { Hall } from '@/halls/entities/hall.entity';

@Injectable()
export class ShowtimesService {
  constructor(
    @InjectRepository(Showtime)
    private readonly showtimesRepository: Repository<Showtime>,

    private readonly movieService: MovieService,

    private readonly hallService: HallsService,
  ) {}

  async findFreeHalls(
    startAt: Date,
    endAt: Date,
    excludeShowtimes: string[],
  ): Promise<[Hall[], Set<string>]> {
    const halls = await this.hallService.findAll();

    const [_, takenHallIds] = await this.findUnavailableHalls(
      startAt,
      endAt,
      excludeShowtimes,
    );

    const freeHallIds = new Set<string>();

    const freeHalls = halls.filter((hall) => {
      if (!takenHallIds.has(hall.id)) {
        freeHallIds.add(hall.id);
        return true;
      }
      return false;
    });

    return [freeHalls, freeHallIds];
  }

  async findUnavailableHalls(
    startAt: Date,
    endAt: Date,
    excludeShowtimes: string[],
  ): Promise<[Hall[], Set<string>]> {
    let conflictingShowtimes = await this.showtimesRepository.find({
      relations: ['halls'],
    });

    conflictingShowtimes = conflictingShowtimes.filter((showtime) => {
      if (excludeShowtimes.includes(showtime.id)) {
        return false;
      }
      if (
        (startAt >= showtime.startAt && startAt <= showtime.endAt) ||
        (endAt >= showtime.startAt && endAt <= showtime.endAt) ||
        (startAt <= showtime.startAt && endAt >= showtime.endAt)
      ) {
        return true;
      }
    });

    const seen = new Set<string>();

    const unavailableHalls = conflictingShowtimes
      .map((showtime) => showtime.halls)
      .flat();

    return [
      unavailableHalls.filter((hall) => {
        const duplicate = seen.has(hall.id);
        seen.add(hall.id);
        return !duplicate;
      }),
      seen,
    ];
  }

  async isHallFree(
    hall: Hall,
    startAt: Date,
    endAt: Date,
    excludeShowtimes: string[],
  ): Promise<boolean> {
    const [_, takenHallIds] = await this.findUnavailableHalls(
      startAt,
      endAt,
      excludeShowtimes,
    );

    return !takenHallIds.has(hall.id);
  }

  async create(createShowtimeDto: CreateShowtimeDto) {
    const movie = await this.movieService.findOne(createShowtimeDto.movie);

    if (!movie) {
      throw new NotFoundException('Movie not found.');
    }

    const [_, freeHallIds] = await this.findFreeHalls(
      createShowtimeDto.startAt,
      createShowtimeDto.endAt,
      [],
    );

    const halls = await Promise.all(
      createShowtimeDto.halls.map(async (hallId) => {
        const hall = await this.hallService.findOne(hallId);

        if (!hall) {
          throw new NotFoundException('Hall not found.');
        }

        if (!freeHallIds.has(hall.id)) {
          throw new ConflictException('Hall is not free.');
        }

        return hall;
      }),
    );

    const showtime = this.showtimesRepository.create({
      ...createShowtimeDto,
      movie,
      halls,
    });

    return this.showtimesRepository.save(showtime);
  }

  findAll() {
    return this.showtimesRepository.find({ relations: ['movie', 'halls'] });
  }

  async findAllByMovie(movieId: string) {
    const movie = await this.movieService.findOne(movieId);

    if (!movie) {
      throw new NotFoundException('Movie not found.');
    }

    return this.showtimesRepository.find({
      where: { movie },
      relations: ['halls'],
    });
  }

  async findAllByHall(hallId: string) {
    const hall = await this.hallService.findOne(hallId);

    if (!hall) {
      throw new NotFoundException('Movie not found.');
    }

    return this.showtimesRepository.find({
      where: {
        halls: hall,
      },
      relations: ['movie'],
    });
  }

  async findOne(id: string) {
    return this.showtimesRepository.findOne({
      where: { id },
      relations: ['movie', 'halls'],
    });
  }

  async update(id: string, updateShowtimeDto: UpdateShowtimeDto) {
    const showtime = await this.findOne(id);

    if (!showtime) {
      throw new NotFoundException('Showtime not found.');
    }

    if (updateShowtimeDto.movie) {
      const movie = await this.movieService.findOne(updateShowtimeDto.movie);
      if (!movie) {
        throw new NotFoundException('Movie not found.');
      }
      showtime.movie = movie;
    }

    showtime.startAt = updateShowtimeDto.startAt ?? showtime.startAt;
    showtime.endAt = updateShowtimeDto.endAt ?? showtime.endAt;

    if (updateShowtimeDto.halls) {
      const [_, freeHallIds] = await this.findFreeHalls(
        showtime.startAt,
        showtime.endAt,
        [showtime.id],
      );

      const halls = await Promise.all(
        updateShowtimeDto.halls.map(async (hallId) => {
          const hall = await this.hallService.findOne(hallId);
          if (!hall) {
            throw new NotFoundException('Hall not found.');
          }

          if (!freeHallIds.has(hall.id)) {
            throw new ConflictException('Hall is not free.');
          }
          return hall;
        }),
      );
      showtime.halls = halls;
    }

    return this.showtimesRepository.save(showtime);
  }

  async remove(id: string) {
    const showtime = await this.findOne(id);

    if (!showtime) {
      throw new NotFoundException('Showtime not found.');
    }

    return this.showtimesRepository.remove(showtime);
  }
}
