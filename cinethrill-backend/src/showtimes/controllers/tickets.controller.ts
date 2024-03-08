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

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  create(
    @Body(new ZodValidationPipe(createTicketSchema))
    createTicketDto: CreateTicketDto,
  ) {
    return this.ticketService.create(createTicketDto);
  }

  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateTicketSchema))
    updateTicketDto: UpdateTicketDto,
  ) {
    return this.ticketService.update(id, updateTicketDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.ticketService.remove(id);

    const response = new BaseResponse();
    response.statusCode = HttpStatus.NO_CONTENT;

    return response;
  }
}
