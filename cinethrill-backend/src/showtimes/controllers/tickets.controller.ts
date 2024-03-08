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
import { CreateTicketDto, createTicketSchema } from '../dto/create-ticket.dto';
import { UpdateTicketDto, updateTicketSchema } from '../dto/update-ticket.dto';
import { BaseResponse } from '@/shared/base-response';
import { Ticket } from '../entities/ticket.entity';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  async create(
    @Body(new ZodValidationPipe(createTicketSchema))
    createTicketDto: CreateTicketDto,
  ) {
    const response = new BaseResponse<Ticket>();

    response.data = await this.ticketService.create(createTicketDto);

    return response;
  }

  @Get()
  async findAll() {
    const response = new BaseResponse<Ticket[]>();

    response.data = await this.ticketService.findAll();

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
    @Body(new ZodValidationPipe(updateTicketSchema))
    updateTicketDto: UpdateTicketDto,
  ) {
    const response = new BaseResponse<Ticket>();

    response.data = await this.ticketService.update(id, updateTicketDto);

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
