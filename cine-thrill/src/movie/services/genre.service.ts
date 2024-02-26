import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from '../entities/genre.entity';
import { CreateGenreDto } from '../dto/create-genre.dto';
import { UpdateGenreDto } from '../dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
  ) {}

  async create(createGenreDto: CreateGenreDto) {
    return this.genreRepository.save(createGenreDto);
  }

  async findAll() {
    return await this.genreRepository.find();
  }

  async find(id: string) {
    return await this.genreRepository.findOne({ where: { id } });
  }

  async findOneByName(name: string) {
    return await this.genreRepository.findOneBy({ name });
  }

  async update(id: string, updateGenreDto: UpdateGenreDto) {
    const genre = await this.find(id);
    if (!genre) throw new NotFoundException('Genre not found.');
    genre.name = updateGenreDto.name ?? genre.name;
    return await this.genreRepository.save(genre);
  }

  async remove(id: string) {
    const genre = await this.find(id);

    if (!genre) throw new NotFoundException('Genre not found');

    return await this.genreRepository.delete(id);
  }
}
