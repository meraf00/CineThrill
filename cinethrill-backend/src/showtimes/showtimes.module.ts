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
import { Booking } from '@/bookings/entities/booking.entity';
import { Ticket } from './entities/ticket.entity';
import { TicketService } from './services/ticket.service';
import { TicketsController } from './controllers/tickets.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Showtime, Movie, Booking, Ticket]),
    HallsModule,
    MovieModule,
  ],
  controllers: [
    ShowtimesController,
    MovieShowtimesController,
    HallShowtimesController,
    TicketsController,
  ],
  providers: [ShowtimesService, TicketService],
  exports: [ShowtimesService, TicketService, HallsModule],
})
export class ShowtimesModule {}
