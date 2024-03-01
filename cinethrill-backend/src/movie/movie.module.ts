import { Module } from '@nestjs/common';
import { MovieService } from './services/movie.service';
import { MovieController } from './controllers/movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Genre } from './entities/genre.entity';
import { Cast } from './entities/cast.entity';
import { CastService } from './services/cast.service';
import { GenreService } from './services/genre.service';
import { GenreController } from './controllers/genre.controller';
import { CastController } from './controllers/cast.controller';
import { AuthModule } from '@/auth/auth.module';
import { UsersModule } from '@/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie, Cast, Genre]),
    AuthModule,
    UsersModule,
    JwtModule,
  ],
  controllers: [MovieController, GenreController, CastController],
  providers: [MovieService, CastService, GenreService],
  exports: [TypeOrmModule],
})
export class MovieModule {}
