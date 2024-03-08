import { Controller, Get, Param } from '@nestjs/common';

import { SeatsService } from '../services/seats.service';

@Controller('seats')
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatsService.findOneById(id);
  }
}
