import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TicketService } from '../services/ticket.service';
import { ZodValidationPipe } from '@/shared/validator';
import {
  CreateShowtimeTicketDto,
  createShowtimeTicketSchema,
} from '../dto/create-showtime-ticket.dto';
import {
  UpdateShowtimeTicketDto,
  updateShowtimeTicketSchema,
} from '../dto/update-showtime-ticket.dto';

@Controller('showtimes/:showtimeId/tickets')
export class TicketsController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  create(
    @Param('showtimeId') showtime: string,
    @Body(new ZodValidationPipe(createShowtimeTicketSchema))
    createShowtimeTicketDto: CreateShowtimeTicketDto,
  ) {
    return this.ticketService.create({ ...createShowtimeTicketDto, showtime });
  }

  @Get()
  findAll(@Param('showtimeId') showtime: string) {
    return this.ticketService.findAllForShowtime(showtime);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Param('showtimeId') showtime: string,
    @Body(new ZodValidationPipe(updateShowtimeTicketSchema))
    updateTicketDto: UpdateShowtimeTicketDto,
  ) {
    return this.ticketService.update(id, { ...updateTicketDto, showtime });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketService.remove(id);
  }
}
