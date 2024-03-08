import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seat } from '../entities/seat.entity';
import { CreateSeatsDto } from '../dto/create-seat.dto';
import { UpdateSeatsDto } from '../dto/update-seat.dto';
import { HallsService } from './halls.service';

@Injectable()
export class SeatsService {
  constructor(
    private readonly hallService: HallsService,
    @InjectRepository(Seat) private seatRepository: Repository<Seat>,
  ) {}

  async create(hallId: string, createSeatsDto: CreateSeatsDto) {
    const hall = await this.hallService.findOne(hallId);

    if (!hall) throw new NotFoundException('Hall not found');

    return this.seatRepository.save(
      createSeatsDto.map((seat) => ({ ...seat, hall })),
    );
  }

  async findAll(hallId: string) {
    const hall = await this.hallService.findOne(hallId);

    if (!hall) throw new NotFoundException('Hall not found');

    return this.seatRepository.find({ where: { hall } });
  }

  async findOne(hallId: string, id: string) {
    const hall = await this.hallService.findOne(hallId);

    if (!hall) throw new NotFoundException('Hall not found');

    return this.seatRepository.findOne({
      where: { id, hall },
    });
  }

  async findOneById(id: string) {
    const seat = await this.seatRepository.findOne({
      where: { id },
      relations: ['hall'],
    });
    if (!seat) throw new NotFoundException('Seat not found');
    return seat;
  }

  async update(hallId: string, updateSeatsDto: UpdateSeatsDto) {
    const hall = await this.hallService.findOne(hallId);

    if (!hall) throw new NotFoundException('Hall not found');

    const seats = await this.seatRepository.find({ where: { hall } });

    seats.forEach((seat) => {
      const updateSeat = updateSeatsDto.find((s) => s.id === seat.id);
      if (updateSeat) {
        seat.height = updateSeat.height ?? seat.height;
        seat.width = updateSeat.width ?? seat.width;
        seat.x = updateSeat.x ?? seat.x;
        seat.y = updateSeat.y ?? seat.y;
        seat.label = updateSeat.label ?? seat.label;
      }
    });

    return this.seatRepository.save(seats);
  }

  async remove(hallId: string, id: string) {
    const hall = await this.hallService.findOne(hallId);

    if (!hall) throw new NotFoundException('Hall not found');

    const seat = await this.findOne(hall.id, id);

    if (!seat) throw new NotFoundException('Seat not found');

    return this.seatRepository.remove(seat);
  }
}
