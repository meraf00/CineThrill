import { CloundinaryConfig } from '@/config/configuration';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
import * as cloudinary from 'cloudinary';
import * as sharp from 'sharp';

export interface UploadResult {
  imageUrl: string;
  assetExternalId: string;
}

@Injectable()
export class FilesService {
  private readonly config: CloundinaryConfig;

  constructor(private readonly configService: ConfigService) {
    this.config = this.configService.get('cloudinary');

    cloudinary.v2.config({
      cloud_name: this.config.name,
      api_key: this.config.apiKey,
      api_secret: this.config.apiSecret,
    });
  }

  async uploadImage(file: Express.Multer.File): Promise<UploadResult> {
    const resizedBuffer: Buffer = await sharp(file.buffer)
      .resize({ width: 800, height: 600 })
      .toBuffer();

    return new Promise<UploadResult>((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        {
          resource_type: 'auto',
          folder: this.config.folder,
        } as any,
        (
          err: UploadApiErrorResponse | undefined,
          result: UploadApiResponse | undefined,
        ) => {
          if (err) {
            console.error('Cloudinary upload error:', err);
            reject('Cloudinary upload error');
          }
          if (!result) {
            console.error('Cloudinary upload error: Result is undefined');
            reject('Cloudinary upload error: Result is undefined');
          }

          resolve({
            imageUrl: result.secure_url,
            assetExternalId: result.public_id,
          });
        },
      );
      uploadStream.end(resizedBuffer);
    });
  }
}
