import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity('usersPers') 
export class UserSchema {
  @ObjectIdColumn()
  _id?: ObjectId;

  @Column()
  name: string;

  @Column()
  email: string;
}
