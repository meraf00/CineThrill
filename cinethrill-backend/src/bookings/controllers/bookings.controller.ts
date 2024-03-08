import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { BookingsService } from '../services/bookings.service';
import { CreateBookingDto } from '../dto/create-booking.dto';
import { AuthGuard } from '@/auth/guards/auth.guard';
import { Request } from 'express';

@UseGuards(AuthGuard)
@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  create(@Req() request: Request, @Body() createBookingDto: CreateBookingDto) {
    return this.bookingsService.create(request.user, createBookingDto);
  }

  @Get('me')
  findMyBookings(@Req() request: Request) {
    return this.bookingsService.findAllForUser(request.user);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.bookingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingsService.findOne(id);
  }
}
