import { HttpStatus } from '@nestjs/common';

export class BaseResponse<T> {
  statusCode: number = HttpStatus.OK;
  error?: string;
  data?: T;
  message?: string;
}
