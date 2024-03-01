import { ConflictException, Injectable } from '@nestjs/common';

import { UpdateUserDto } from './dto/update-user.dto';
import { SignUpDto } from '@/auth/dto/signup.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: SignUpDto) {
    const user = await this.findByEmail(createUserDto.email);

    if (user) throw new ConflictException('Email already exists');

    return await this.userRepository.save(createUserDto);
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string) {
    return await this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
