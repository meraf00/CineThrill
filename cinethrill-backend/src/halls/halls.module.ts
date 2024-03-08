import { Module } from '@nestjs/common';
import { HallsService } from './services/halls.service';
import { HallsController } from './controllers/halls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hall } from './entities/hall.entity';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { FilesModule } from '@/files/files.module';
import { SeatsController } from './controllers/seats.controller';
import { SeatsService } from './services/seats.service';
import { Seat } from './entities/seat.entity';
import { Showtime } from '@/showtimes/entities/showtime.entity';
import { Booking } from '@/bookings/entities/booking.entity';
import { HallSeatsController } from './controllers/hall-seats.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hall, Seat, Showtime, Booking]),
    MulterModule.register({
      storage: memoryStorage(),
    }),
    FilesModule,
  ],
  controllers: [HallsController, SeatsController, HallSeatsController],
  providers: [HallsService, SeatsService],
  exports: [TypeOrmModule, HallsService, SeatsService],
})
export class HallsModule {}
