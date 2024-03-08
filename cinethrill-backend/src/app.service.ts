import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(): string {
    return '<body style="display: flex; justify-content: center"><a href=\'/api/v1.0/documentation\'>Documentation</a></body>';
  }
}
