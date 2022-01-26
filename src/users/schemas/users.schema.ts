import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(Users);