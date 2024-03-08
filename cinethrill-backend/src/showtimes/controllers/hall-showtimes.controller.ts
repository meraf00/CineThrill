import { Controller, Get, Param } from '@nestjs/common';
import { ShowtimesService } from '../services/showtimes.service';
import { Showtime } from '../entities/showtime.entity';
import { BaseResponse } from '@/shared/base-response';

@Controller('halls/:hallId/showtimes')
export class HallShowtimesController {
  constructor(private readonly showtimesService: ShowtimesService) {}

  @Get()
  async findAllByHall(@Param('hallId') hallId: string) {
    const response = new BaseResponse<Showtime[]>();

    response.data = await this.showtimesService.findAllByHall(hallId);

    return response;
  }
}
