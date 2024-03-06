import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHallDto } from './dto/create-hall.dto';
import { UpdateHallDto } from './dto/update-hall.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hall } from './entities/hall.entity';
import { Repository } from 'typeorm';
import { FilesService } from '@/files/files.service';

@Injectable()
export class HallsService {
  constructor(
    @InjectRepository(Hall) private hallRepository: Repository<Hall>,
    private readonly fileService: FilesService,
  ) {}

  async create(createHallDto: CreateHallDto, seatMapFile: Express.Multer.File) {
    const { imageUrl, assetExternalId } =
      await this.fileService.uploadImage(seatMapFile);
    return this.hallRepository.save({
      ...createHallDto,
      seatMapUrl: imageUrl,
      assetExternalId,
    });
  }

  async findAll() {
    return this.hallRepository.find();
  }

  async findOne(id: string) {
    return this.hallRepository.findOne({ where: { id }, relations: ['seats'] });
  }

  async update(
    id: string,
    updateHallDto: UpdateHallDto,
    file?: Express.Multer.File,
  ) {
    const hall = await this.findOne(id);

    if (!hall) throw new NotFoundException('Movie not found');

    hall.name = updateHallDto.name ?? hall.name;
    if (file) {
      const { imageUrl, assetExternalId } =
        await this.fileService.uploadImage(file);
      hall.seatMapUrl = imageUrl;
      hall.assetExternalId = assetExternalId;
    }

    return this.hallRepository.save(hall);
  }

  remove(id: string) {
    return `This action removes a #${id} hall`;
  }
}
