import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { GenreService } from '../services/genre.service';
import { ZodValidationPipe } from '@/shared/validator';
import { CreateGenreDto, createGenreSchema } from '../dto/create-genre.dto';
import { BaseResponse } from '@/shared/base-response';
import { Genre } from '../entities/genre.entity';
import { UpdateGenreDto, updateGenreSchema } from '../dto/update-genre.dto';

@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  async create(
    @Body(new ZodValidationPipe(createGenreSchema))
    createGenreDto: CreateGenreDto,
  ) {
    const movie = await this.genreService.create(createGenreDto);

    const response = new BaseResponse<Genre>();
    response.statusCode = HttpStatus.CREATED;
    response.data = movie;

    return response;
  }

  @Get()
  async findAll() {
    const genres = await this.genreService.findAll();

    const response = new BaseResponse<Genre[]>();
    response.data = genres;
    return response;
  }

  @Get(':id')
  async findOne(id: string) {
    const genre = await this.genreService.find(id);

    const response = new BaseResponse<Genre>();

    if (!genre) {
      response.statusCode = HttpStatus.NOT_FOUND;
      response.message = 'Genre not found.';
      return response;
    }

    response.data = genre;

    return response;
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(new ZodValidationPipe(updateGenreSchema))
    updateGenreDto: UpdateGenreDto,
  ) {
    const genre = await this.genreService.update(id, updateGenreDto);

    const response = new BaseResponse<Genre>();
    response.data = genre;

    return response;
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    await this.genreService.remove(id);

    const response = new BaseResponse();
    response.statusCode = HttpStatus.NO_CONTENT;
    response.message = 'Genre deleted successfully.';

    return response;
  }
}
