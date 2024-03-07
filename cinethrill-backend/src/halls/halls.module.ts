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

@Module({
  imports: [
    TypeOrmModule.forFeature([Hall, Seat, Showtime]),
    MulterModule.register({
      storage: memoryStorage(),
    }),
    FilesModule,
  ],
  controllers: [HallsController, SeatsController],
  providers: [HallsService, SeatsService],
  exports: [TypeOrmModule, HallsService],
})
export class HallsModule {}
