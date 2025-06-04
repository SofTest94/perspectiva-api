import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from '../../application/services/user.service';
import { CreateUserDto } from '../../application/dto/create-user.dto';

@Controller('userspers')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Get()
  findAll() {
    return this.userService.getAll();
  }
}
