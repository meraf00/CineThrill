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

@Module({
  imports: [
    TypeOrmModule.forFeature([Hall, Seat]),
    MulterModule.register({
      storage: memoryStorage(),
    }),
    FilesModule,
  ],
  controllers: [HallsController, SeatsController],
  providers: [HallsService, SeatsService],
  exports: [TypeOrmModule],
})
export class HallsModule {}
