import { Controller, Get, Param } from '@nestjs/common';

import { SeatsService } from '../services/seats.service';
import { BaseResponse } from '@/shared/base-response';
import { Seat } from '../entities/seat.entity';

@Controller('seats')
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = new BaseResponse<Seat>();

    response.data = await this.seatsService.findOneById(id);

    return response;
  }
}
