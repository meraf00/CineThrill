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
} from '@nestjs/common';
import { HallsService } from './halls.service';
import { CreateHallDto, MAX_FILE_SIZE } from './dto/create-hall.dto';
import { UpdateHallDto } from './dto/update-hall.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('halls')
export class HallsController {
  constructor(private readonly hallsService: HallsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('seatMapImage'))
  create(
    @Body() createHallDto: CreateHallDto,
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
    @Body() updateHallDto: UpdateHallDto,
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
  remove(@Param('id') id: string) {
    return this.hallsService.remove(id);
  }
}
