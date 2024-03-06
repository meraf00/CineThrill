import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilesService } from '@/files/files.service';
import { Hall } from '../entities/hall.entity';
import { CreateHallDto } from '../dto/create-hall.dto';
import { UpdateHallDto } from '../dto/update-hall.dto';

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
      await this.fileService.deleteAssets([hall.assetExternalId]);

      const { imageUrl, assetExternalId } =
        await this.fileService.uploadImage(file);
      hall.seatMapUrl = imageUrl;
      hall.assetExternalId = assetExternalId;
    }

    return this.hallRepository.save(hall);
  }

  async remove(id: string) {
    const hall = await this.findOne(id);

    if (!hall) throw new NotFoundException('Hall not found');

    await this.fileService.deleteAssets([hall.assetExternalId]);

    return this.hallRepository.remove(hall);
  }
}
