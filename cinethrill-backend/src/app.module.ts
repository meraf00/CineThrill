import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BookingsModule } from './bookings/bookings.module';
import { HallsModule } from './halls/halls.module';
import configuration, { DatabaseConfig } from './config/configuration';
import { FilesModule } from './files/files.module';
import { ShowtimesModule } from './showtimes/showtimes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const config = configService.get<DatabaseConfig>('database');

        return {
          type: 'mysql',
          host: config.host,
          port: config.port,
          username: config.username,
          password: config.password,
          database: config.database,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        };
      },
    }),

    MovieModule,

    UsersModule,

    AuthModule,

    BookingsModule,

    HallsModule,

    FilesModule,

    ShowtimesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
