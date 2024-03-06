import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { CineThrillConfiguration } from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const docsConfig = new DocumentBuilder()
    .setTitle('CineThrill Documentation')
    .setDescription('CineThrill API description')
    .setVersion('1.0')
    .addTag('CineThrill')
    .build();
  const document = SwaggerModule.createDocument(app, docsConfig);

  const configService = app.get(ConfigService);

  SwaggerModule.setup('api', app, document);

  await app.listen(configService.get<string>('port'));
}
bootstrap();
