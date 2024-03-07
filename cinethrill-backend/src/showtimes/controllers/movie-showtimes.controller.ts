import { Controller, Get, Param } from '@nestjs/common';
import { ShowtimesService } from '../services/showtimes.service';

@Controller('movies/:movieId/showtimes')
export class MovieShowtimesController {
  constructor(private readonly showtimesService: ShowtimesService) {}

  @Get()
  findAllByMovie(@Param('movieId') movieId: string) {
    return this.showtimesService.findAllByMovie(movieId);
  }
}
