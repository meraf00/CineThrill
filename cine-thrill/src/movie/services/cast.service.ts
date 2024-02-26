import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cast } from '../entities/cast.entity';
import { CreateCastDto } from '../dto/create-cast.dto';
import { UpdateCastDto } from '../dto/update-cast.dto';

@Injectable()
export class CastService {
  constructor(
    @InjectRepository(Cast)
    private castRepository: Repository<Cast>,
  ) {}

  async create(createCastDto: CreateCastDto) {
    return this.castRepository.save(createCastDto);
  }

  async findAll() {
    return await this.castRepository.find();
  }

  async find(id: string) {
    return await this.castRepository.findOneBy({ id });
  }

  async findOneByName(name: string) {
    return await this.castRepository.findOneBy({ name });
  }

  async update(id: string, updateCastDto: UpdateCastDto) {
    const cast = await this.find(id);
    if (!cast) throw new NotFoundException('Cast not found.');
    cast.name = updateCastDto.name ?? cast.name;
    return await this.castRepository.save(cast);
  }

  async remove(id: string) {
    return await this.castRepository.delete(id);
  }
}
