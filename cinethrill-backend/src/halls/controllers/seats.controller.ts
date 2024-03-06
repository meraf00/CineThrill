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

@Controller('halls/:hallId/seats')
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('seatMapImage'))
  create(
    @Param('hallId') hallId: string,
    @Body(new ZodValidationPipe(createSeatsSchema))
    createSeatsDto: CreateSeatsDto,
  ) {
    return this.seatsService.create(hallId, createSeatsDto);
  }

  @Get()
  findAll(@Param('hallId') hallId: string) {
    return this.seatsService.findAll(hallId);
  }

  @Get(':id')
  findOne(@Param('hallId') hallId: string, @Param('id') id: string) {
    return this.seatsService.findOne(hallId, id);
  }

  @Patch()
  update(
    @Param('hallId') hallId: string,
    @Body(new ZodValidationPipe(updateSeatsSchema))
    updateSeatsDto: UpdateSeatsDto,
  ) {
    return this.seatsService.update(hallId, updateSeatsDto);
  }

  @Delete(':id')
  async remove(@Param('hallId') hallId: string, @Param('id') id: string) {
    await this.seatsService.remove(hallId, id);

    const response = new BaseResponse();
    response.statusCode = HttpStatus.NO_CONTENT;

    return response;
  }
}
