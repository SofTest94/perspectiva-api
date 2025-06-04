import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './infrastructure/database/schemas/user.schema';
import { UserRepository } from './infrastructure/database/repositories/user.repository';
import { UserService } from './application/services/user.service';
import { UserController } from './infrastructure/controllers/user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserSchema]),
  ],
  providers: [UserRepository, UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UsersModule {}
