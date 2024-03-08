import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ZodValidationPipe } from '@/shared/validator';
import { BaseResponse } from '@/shared/base-response';
import { SeatsService } from '../services/seats.service';
import { CreateSeatsDto, createSeatsSchema } from '../dto/create-seat.dto';
import { UpdateSeatsDto, updateSeatsSchema } from '../dto/update-seat.dto';
import { Seat } from '../entities/seat.entity';

@Controller('halls/:hallId/seats')
export class HallSeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('seatMapImage'))
  async create(
    @Param('hallId') hallId: string,
    @Body(new ZodValidationPipe(createSeatsSchema))
    createSeatsDto: CreateSeatsDto,
  ) {
    const response = new BaseResponse<Seat[]>();

    response.data = await this.seatsService.create(hallId, createSeatsDto);

    return response;
  }

  @Get()
  async findAll(@Param('hallId') hallId: string) {
    const response = new BaseResponse<Seat[]>();

    response.data = await this.seatsService.findAll(hallId);

    return response;
  }

  @Get(':id')
  async findOne(@Param('hallId') hallId: string, @Param('id') id: string) {
    const response = new BaseResponse<Seat>();

    response.data = await this.seatsService.findOne(hallId, id);

    return response;
  }

  @Patch()
  async update(
    @Param('hallId') hallId: string,
    @Body(new ZodValidationPipe(updateSeatsSchema))
    updateSeatsDto: UpdateSeatsDto,
  ) {
    const response = new BaseResponse<Seat[]>();

    response.data = await this.seatsService.update(hallId, updateSeatsDto);

    return response;
  }

  @Delete(':id')
  async remove(@Param('hallId') hallId: string, @Param('id') id: string) {
    await this.seatsService.remove(hallId, id);

    const response = new BaseResponse();
    response.statusCode = HttpStatus.NO_CONTENT;

    return response;
  }
}
