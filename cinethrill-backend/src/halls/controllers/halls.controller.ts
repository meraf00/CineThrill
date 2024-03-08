import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  UploadedFile,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ZodValidationPipe } from '@/shared/validator';
import { BaseResponse } from '@/shared/base-response';
import { HallsService } from '../services/halls.service';
import {
  CreateHallDto,
  MAX_FILE_SIZE,
  createHallSchema,
} from '../dto/create-hall.dto';
import { UpdateHallDto, updateHallSchema } from '../dto/update-hall.dto';
import { Hall } from '../entities/hall.entity';

@Controller('halls')
export class HallsController {
  constructor(private readonly hallsService: HallsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('seatMapImage'))
  async create(
    @Body(new ZodValidationPipe(createHallSchema)) createHallDto: CreateHallDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: MAX_FILE_SIZE }),
          new FileTypeValidator({ fileType: 'image/*' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const response = new BaseResponse<Hall>();

    response.data = await this.hallsService.create(createHallDto, file);

    return response;
  }

  @Get()
  async findAll() {
    const response = new BaseResponse<Hall[]>();

    response.data = await this.hallsService.findAll();

    return response;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = new BaseResponse<Hall>();

    response.data = await this.hallsService.findOne(id);

    return response;
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('seatMapImage'))
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateHallSchema)) updateHallDto: UpdateHallDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: MAX_FILE_SIZE }),
          new FileTypeValidator({ fileType: 'image/*' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const response = new BaseResponse<Hall>();

    response.data = await this.hallsService.update(id, updateHallDto, file);

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.hallsService.remove(id);

    const response = new BaseResponse();
    response.statusCode = HttpStatus.NO_CONTENT;

    return response;
  }
}
