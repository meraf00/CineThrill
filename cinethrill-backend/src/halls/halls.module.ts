import { Module } from '@nestjs/common';
import { HallsService } from './services/halls.service';
import { HallsController } from './controllers/halls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hall } from './entities/hall.entity';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { FilesModule } from '@/files/files.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hall]),
    MulterModule.register({
      storage: memoryStorage(),
    }),
    FilesModule,
  ],
  controllers: [HallsController],
  providers: [HallsService],
  exports: [TypeOrmModule],
})
export class HallsModule {}
