import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
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
import { BaseResponse } from '@/shared/base-response';
import { Ticket } from '../entities/ticket.entity';

@Controller('showtimes/:showtimeId/tickets')
export class TicketsController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  async create(
    @Param('showtimeId') showtime: string,
    @Body(new ZodValidationPipe(createShowtimeTicketSchema))
    createShowtimeTicketDto: CreateShowtimeTicketDto,
  ) {
    const response = new BaseResponse<Ticket>();

    response.data = await this.ticketService.create({
      ...createShowtimeTicketDto,
      showtime,
    });

    return response;
  }

  @Get()
  async findAll(@Param('showtimeId') showtime: string) {
    const response = new BaseResponse<Ticket[]>();

    response.data = await this.ticketService.findAllForShowtime(showtime);

    return response;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = new BaseResponse<Ticket>();

    response.data = await this.ticketService.findOne(id);

    return response;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Param('showtimeId') showtime: string,
    @Body(new ZodValidationPipe(updateShowtimeTicketSchema))
    updateTicketDto: UpdateShowtimeTicketDto,
  ) {
    const response = new BaseResponse<Ticket>();

    response.data = await this.ticketService.update(id, {
      ...updateTicketDto,
      showtime,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.ticketService.remove(id);

    const response = new BaseResponse();
    response.statusCode = HttpStatus.NO_CONTENT;

    return response;
  }
}
