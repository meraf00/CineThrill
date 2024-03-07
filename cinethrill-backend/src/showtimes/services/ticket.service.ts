import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from '../entities/ticket.entity';
import { Repository } from 'typeorm';
import { CreateTicketDto } from '../dto/create-ticket.dto';
import { ShowtimesService } from './showtimes.service';
import { SeatsService } from '@/halls/services/seats.service';
import { UpdateTicketDto } from '../dto/update-ticket.dto';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,

    private readonly showtimeService: ShowtimesService,

    private readonly seatService: SeatsService,
  ) {}

  async create(createTicketDto: CreateTicketDto) {
    const showtime = await this.showtimeService.findOne(
      createTicketDto.showtime,
    );
    const seat = await this.seatService.findOneById(createTicketDto.seat);

    const ticket = this.ticketRepository.create({
      ...createTicketDto,
      showtime,
      seat,
    });

    return this.ticketRepository.save(ticket);
  }

  findAll() {
    return this.ticketRepository.find();
  }

  findOne(id: string) {
    return this.ticketRepository.findOne({ where: { id } });
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.findOne(id);

    if (updateTicketDto.showtime) {
      ticket.showtime = await this.showtimeService.findOne(
        updateTicketDto.showtime,
      );
    }

    if (updateTicketDto.seat) {
      ticket.seat = await this.seatService.findOneById(updateTicketDto.seat);
    }

    return this.ticketRepository.save(ticket);
  }

  async remove(id: string) {
    const ticket = await this.ticketRepository.findOne({ where: { id } });

    if (!ticket) throw new NotFoundException('Ticket not found');

    return this.ticketRepository.remove(ticket);
  }
}
