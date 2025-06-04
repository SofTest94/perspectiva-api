import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../infrastructure/database/repositories/user.repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    //@InjectRepository(UserRepository)
    private readonly userRepo: UserRepository,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const created = await this.userRepo.create(dto);
    return new User(created.name, created.email);
  }

  async getAll(): Promise<User[]> {
    const users = await this.userRepo.findAll();
    return users;
    // console.log('Users found:', users);
    // // return[];
    // return users.map(u => new User(u.name, u.email));
  }
}
