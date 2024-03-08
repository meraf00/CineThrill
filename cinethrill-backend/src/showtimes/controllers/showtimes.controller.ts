import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { ShowtimesService } from '../services/showtimes.service';
import {
  CreateShowtimeDto,
  createShowtimeSchema,
} from '../dto/create-showtime.dto';
import {
  UpdateShowtimeDto,
  updateShowtimeSchema,
} from '../dto/update-showtime.dto';
import { ZodValidationPipe } from '@/shared/validator';
import { BaseResponse } from '@/shared/base-response';
import { Showtime } from '../entities/showtime.entity';

@Controller('showtimes')
export class ShowtimesController {
  constructor(private readonly showtimesService: ShowtimesService) {}

  @Post()
  async create(
    @Body(new ZodValidationPipe(createShowtimeSchema))
    createShowtimeDto: CreateShowtimeDto,
  ) {
    const response = new BaseResponse<Showtime>();

    response.data = await this.showtimesService.create(createShowtimeDto);

    return response;
  }

  @Get()
  async findAll() {
    const response = new BaseResponse<Showtime[]>();

    response.data = await this.showtimesService.findAll();

    return response;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = new BaseResponse<Showtime>();

    response.data = await this.showtimesService.findOne(id);

    return response;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateShowtimeSchema))
    updateShowtimeDto: UpdateShowtimeDto,
  ) {
    const response = new BaseResponse<Showtime>();

    response.data = await this.showtimesService.update(id, updateShowtimeDto);

    return response;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.showtimesService.remove(id);

    const response = new BaseResponse();
    response.statusCode = HttpStatus.NO_CONTENT;

    return response;
  }
}
