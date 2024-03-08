import { Module } from '@nestjs/common';
import { BookingsService } from './services/bookings.service';
import { BookingsController } from './controllers/bookings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Ticket } from '@/showtimes/entities/ticket.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from '@/auth/auth.module';
import { UsersModule } from '@/users/users.module';
import { ShowtimesModule } from '@/showtimes/showtimes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking, Ticket]),
    JwtModule,
    AuthModule,
    UsersModule,
    ShowtimesModule,
  ],
  controllers: [BookingsController],
  providers: [BookingsService],
  exports: [TypeOrmModule],
})
export class BookingsModule {}
