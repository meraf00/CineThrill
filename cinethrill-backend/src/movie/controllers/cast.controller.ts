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
import { CastService } from '../services/cast.service';
import { ZodValidationPipe } from '@/shared/validator';
import { CreateCastDto, createCastSchema } from '../dto/create-cast.dto';
import { BaseResponse } from '@/shared/base-response';
import { Cast } from '../entities/cast.entity';
import { UpdateCastDto, updateCastSchema } from '../dto/update-cast.dto';

@Controller('casts')
export class CastController {
  constructor(private readonly castService: CastService) {}

  @Post()
  async create(
    @Body(new ZodValidationPipe(createCastSchema))
    createCastDto: CreateCastDto,
  ) {
    const movie = await this.castService.create(createCastDto);

    const response = new BaseResponse<Cast>();
    response.statusCode = HttpStatus.CREATED;
    response.data = movie;

    return response;
  }

  @Get()
  async findAll() {
    const casts = await this.castService.findAll();

    const response = new BaseResponse<Cast[]>();
    response.data = casts;
    return response;
  }

  @Get(':id')
  async findOne(id: string) {
    const cast = await this.castService.find(id);

    const response = new BaseResponse<Cast>();

    if (!cast) {
      response.statusCode = HttpStatus.NOT_FOUND;
      response.message = 'Cast not found.';
      return response;
    }

    response.data = cast;

    return response;
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(new ZodValidationPipe(updateCastSchema))
    updateCastDto: UpdateCastDto,
  ) {
    const cast = await this.castService.update(id, updateCastDto);

    const response = new BaseResponse<Cast>();
    response.data = cast;

    return response;
  }

  @Delete(':id')
  async remove() {}
}
