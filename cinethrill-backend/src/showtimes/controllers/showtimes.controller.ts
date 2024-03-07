import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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

@Controller('showtimes')
export class ShowtimesController {
  constructor(private readonly showtimesService: ShowtimesService) {}

  @Post()
  create(
    @Body(new ZodValidationPipe(createShowtimeSchema))
    createShowtimeDto: CreateShowtimeDto,
  ) {
    return this.showtimesService.create(createShowtimeDto);
  }

  @Get()
  findAll() {
    return this.showtimesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showtimesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateShowtimeSchema))
    updateShowtimeDto: UpdateShowtimeDto,
  ) {
    return this.showtimesService.update(id, updateShowtimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showtimesService.remove(id);
  }
}
