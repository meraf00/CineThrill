import { Controller, Get, Param } from '@nestjs/common';
import { ShowtimesService } from '../services/showtimes.service';

@Controller('halls/:hallId/showtimes')
export class HallShowtimesController {
  constructor(private readonly showtimesService: ShowtimesService) {}

  @Get()
  findAllByHall(@Param('hallId') hallId: string) {
    return this.showtimesService.findAllByHall(hallId);
  }
}
