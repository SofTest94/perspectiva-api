import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserSchema } from '../modules/users/infrastructure/database/schemas/user.schema';

console.log('DATABASE_HOST:', process.env.DATABASE_HOST);

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
  entities: [UserSchema],
  synchronize: true, // cuidado en producción
};
