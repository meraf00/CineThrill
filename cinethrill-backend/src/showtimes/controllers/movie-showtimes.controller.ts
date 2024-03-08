import { Controller, Get, Param } from '@nestjs/common';
import { ShowtimesService } from '../services/showtimes.service';
import { BaseResponse } from '@/shared/base-response';
import { Showtime } from '../entities/showtime.entity';

@Controller('movies/:movieId/showtimes')
export class MovieShowtimesController {
  constructor(private readonly showtimesService: ShowtimesService) {}

  @Get()
  async findAllByMovie(@Param('movieId') movieId: string) {
    const response = new BaseResponse<Showtime[]>();

    response.data = await this.showtimesService.findAllByMovie(movieId);

    return response;
  }
}
