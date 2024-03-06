import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '@/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './guards/auth.guard';
import { ConfigService } from '@nestjs/config';
import { JwtConfig } from '@/config/configuration';

@Module({
  imports: [
    UsersModule,

    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<JwtConfig>('jwt').secret,
          signOptions: {
            expiresIn: configService.get<JwtConfig>('jwt').expiration,
          },
        };
      },
    }),
  ],

  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
})
export class AuthModule {}
