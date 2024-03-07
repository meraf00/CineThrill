import { Module } from '@nestjs/common';
import { ShowtimesService } from './services/showtimes.service';
import { ShowtimesController } from './controllers/showtimes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '@/movie/entities/movie.entity';
import { Showtime } from './entities/showtime.entity';
import { HallsModule } from '@/halls/halls.module';
import { MovieModule } from '@/movie/movie.module';
import { MovieShowtimesController } from './controllers/movie-showtimes.controller';
import { HallShowtimesController } from './controllers/hall-showtimes.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Showtime, Movie]),
    HallsModule,
    MovieModule,
  ],
  controllers: [
    ShowtimesController,
    MovieShowtimesController,
    HallShowtimesController,
  ],
  providers: [ShowtimesService],
})
export class ShowtimesModule {}
