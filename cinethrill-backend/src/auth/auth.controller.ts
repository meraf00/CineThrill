import { Controller, Post, Body } from '@nestjs/common';
import { AuthResponse, AuthService } from './auth.service';
import { SignUpDto, signUpSchema } from './dto/signup.dto';
import { LoginDto, loginSchema } from './dto/login.dto';
import { UsersService } from '@/users/users.service';
import { BaseResponse } from '@/shared/base-response';
import { User } from '@/users/entities/user.entity';
import { UserDto } from '@/users/dto/user.dto';
import { ZodValidationPipe } from '@/shared/validator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body(new ZodValidationPipe(loginSchema)) loginDto: LoginDto) {
    const response = new BaseResponse<AuthResponse>();

    response.data = await this.authService.login({
      email: loginDto.email,
      password: loginDto.password,
    });

    return response;
  }

  @Post('signup')
  async signup(
    @Body(new ZodValidationPipe(signUpSchema)) signUpDto: SignUpDto,
  ) {
    const user = await this.authService.signup(signUpDto);

    const response = new BaseResponse<UserDto>();
    response.data = user;

    return response;
  }
}
