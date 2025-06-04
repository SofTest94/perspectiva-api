import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { UserSchema } from '../schemas/user.schema';
import { CreateUserDto } from '../../../application/dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserSchema)
    private readonly repo: MongoRepository<UserSchema>,
  ) {}

  async create(dto: CreateUserDto): Promise<UserSchema> {
    const user = this.repo.create(dto);
    return this.repo.save(user);
  }

  async findAll(): Promise<UserSchema[]> {
    return this.repo.find();
  }
}
