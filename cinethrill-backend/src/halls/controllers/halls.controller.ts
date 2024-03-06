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

@Controller('halls')
export class HallsController {
  constructor(private readonly hallsService: HallsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('seatMapImage'))
  create(
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
    return this.hallsService.create(createHallDto, file);
  }

  @Get()
  findAll() {
    return this.hallsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hallsService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('seatMapImage'))
  update(
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
    return this.hallsService.update(id, updateHallDto, file);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.hallsService.remove(id);

    const response = new BaseResponse();
    response.statusCode = HttpStatus.NO_CONTENT;

    return response;
  }
}
