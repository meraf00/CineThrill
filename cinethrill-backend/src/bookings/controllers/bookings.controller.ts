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
import { Booking } from '../entities/booking.entity';
import { BaseResponse } from '@/shared/base-response';

@UseGuards(AuthGuard)
@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  async create(
    @Req() request: Request,
    @Body() createBookingDto: CreateBookingDto,
  ) {
    const response = new BaseResponse<Booking>();

    response.data = await this.bookingsService.create(
      request.user,
      createBookingDto,
    );

    return response;
  }

  @Get('me')
  async findMyBookings(@Req() request: Request) {
    const response = new BaseResponse<Booking[]>();

    response.data = await this.bookingsService.findAllForUser(request.user);

    return response;
  }

  @Get()
  async findAll(@Req() request: Request) {
    const response = new BaseResponse<Booking[]>();

    response.data = await this.bookingsService.findAll();

    return response;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = new BaseResponse<Booking>();

    response.data = await this.bookingsService.findOne(id);

    return response;
  }
}
