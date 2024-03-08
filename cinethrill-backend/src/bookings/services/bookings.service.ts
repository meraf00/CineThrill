import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto } from '../dto/create-booking.dto';
import { UpdateBookingDto } from '../dto/update-booking.dto';
import { User } from '@/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from '../entities/booking.entity';
import { TicketService } from '@/showtimes/services/ticket.service';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
    private ticketService: TicketService,
  ) {}

  async create(user: User, createBookingDto: CreateBookingDto) {
    const tickets = await Promise.all(
      createBookingDto.tickets.map((id) => {
        return this.ticketService.findOne(id);
      }),
    );

    const booking = this.bookingRepository.create({
      tickets,
      user,
    });

    booking.user = user;

    return this.bookingRepository.save(booking);
  }

  findAll() {
    return this.bookingRepository.find();
  }

  async findOne(id: string) {
    const booking = await this.bookingRepository.findOne({
      where: { id },
      relations: ['user', 'tickets'],
    });

    if (!booking) throw new NotFoundException('Booking not found.');

    return booking;
  }

  findAllForUser(user: User) {
    return this.bookingRepository.find({
      where: { user },
      relations: ['tickets'],
    });
  }

  async findOneForUser(user: User, id: string) {
    const boooking = await this.bookingRepository.find({
      where: { user, id },
      relations: ['tickets'],
    });

    if (!boooking) throw new NotFoundException('Booking not found.');

    return boooking;
  }
}
