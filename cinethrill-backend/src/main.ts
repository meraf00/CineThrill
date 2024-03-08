import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api/v1.0');

  const docsConfig = new DocumentBuilder()
    .setTitle('CineThrill Documentation')
    .setDescription('CineThrill API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, docsConfig);
  SwaggerModule.setup('api/v1.0/documentation', app, document);

  const configService = app.get(ConfigService);

  await app.listen(configService.get<string>('port'));
}
bootstrap();
