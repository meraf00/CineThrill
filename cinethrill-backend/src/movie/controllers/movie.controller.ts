import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  ParseUUIDPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { MovieService } from '../services/movie.service';
import { CreateMovieDto, createMovieSchema } from '../dto/create-movie.dto';
import { UpdateMovieDto, updateMovieSchema } from '../dto/update-movie.dto';
import { Movie } from '../entities/movie.entity';
import { ZodValidationPipe } from '../../shared/validator';
import { BaseResponse } from '@/shared/base-response';
import { AuthGuard } from '@/auth/guards/auth.guard';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async create(
    @Body(new ZodValidationPipe(createMovieSchema))
    createMovieDto: CreateMovieDto,
  ) {
    const movie = await this.movieService.create(createMovieDto);

    const response = new BaseResponse<Movie>();
    response.statusCode = HttpStatus.CREATED;
    response.data = movie;

    return response;
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    const movies = await this.movieService.findAll();

    const response = new BaseResponse<Movie[]>();
    response.data = movies;
    return response;
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    const movie = await this.movieService.findOne(id);

    const response = new BaseResponse();
    response.data = movie;

    if (!movie) {
      response.statusCode = HttpStatus.NOT_FOUND;
      response.message = 'Movie not found.';
      return response;
    }

    return response;
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(new ZodValidationPipe(updateMovieSchema))
    updateMovieDto: UpdateMovieDto,
  ) {
    const movie = await this.movieService.update(id, updateMovieDto);

    const response = new BaseResponse<Movie>();
    response.data = movie;

    return response;
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    await this.movieService.remove(id);

    const response = new BaseResponse();
    response.statusCode = HttpStatus.NO_CONTENT;

    return response;
  }
}
