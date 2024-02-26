import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { Movie } from '../entities/movie.entity';
import { GenreService } from './genre.service';
import { CastService } from './cast.service';
import { Cast } from '../entities/cast.entity';
import { Genre } from '../entities/genre.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,

    private genreService: GenreService,

    private castService: CastService,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const movie = new Movie();
    movie.title = createMovieDto.title;
    movie.plot = createMovieDto.plot;
    movie.poster = createMovieDto.poster;
    movie.runtime = createMovieDto.runtime;
    movie.imdbRating = createMovieDto.imdbRating;
    movie.production = createMovieDto.production;
    movie.released = createMovieDto.released;
    movie.directors = [];
    movie.genres = [];
    movie.actors = [];

    let g: Genre | null;
    for (const genre of createMovieDto.genres) {
      g = await this.genreService.find(genre);
      if (g) movie.genres.push(g);
    }

    let c: Cast | null;
    for (const actor of createMovieDto.actors) {
      c = await this.castService.find(actor);
      if (c) movie.actors.push(c);
    }

    for (const director of createMovieDto.directors) {
      c = await this.castService.find(director);
      if (c) movie.directors.push(c);
    }

    return this.movieRepository.save(movie);
  }

  findAll() {
    return this.movieRepository.find();
  }

  async findOne(id: string) {
    const genre = this.movieRepository.findOne({
      where: { id },
      relations: ['genres', 'actors', 'directors'],
    });

    if (!genre) return;

    return genre;
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    const movie = await this.findOne(id);

    if (!movie) throw new NotFoundException('Movie not found');

    movie.title = updateMovieDto.title ?? movie.title;
    movie.plot = updateMovieDto.plot ?? movie.plot;
    movie.poster = updateMovieDto.poster ?? movie.poster;
    movie.runtime = updateMovieDto.runtime ?? movie.runtime;
    movie.imdbRating = updateMovieDto.imdbRating ?? movie.imdbRating;
    movie.production = updateMovieDto.production ?? movie.production;
    movie.released = updateMovieDto.released ?? movie.released;

    const directors: Cast[] = [];
    const genres: Genre[] = [];
    const actors: Cast[] = [];

    if (updateMovieDto.genres) {
      let g: Genre | null;
      for (const genre of updateMovieDto.genres) {
        g = await this.genreService.find(genre);
        if (g) genres.push(g);
      }

      movie.genres = genres;
    }

    if (updateMovieDto.actors) {
      let c: Cast | null;
      for (const actor of updateMovieDto.actors) {
        c = await this.castService.find(actor);
        if (c) actors.push(c);
      }
      movie.actors = actors;
    }

    if (updateMovieDto.directors) {
      let c: Cast | null;
      for (const director of updateMovieDto.directors) {
        c = await this.castService.find(director);
        if (c) directors.push(c);
      }
      movie.directors = directors;
    }

    return this.movieRepository.save(movie);
  }

  async remove(id: string) {
    const movie = await this.findOne(id);

    if (!movie) throw new NotFoundException('Movie not found');

    return this.movieRepository.remove(movie);
  }
}
