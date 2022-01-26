import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './schemas/users.schema';


@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: Model<Users>){}

  async create(createUserInput: CreateUserInput): Promise<Users> {
    const newUser = await new this.userModel(createUserInput);
    return newUser.save();
  }

  async findAll(): Promise<Users[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<Users> {
    return this.userModel.findOne().exec();
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<Users> {
    return await this.userModel.findByIdAndUpdate(id, updateUserInput).exec();
  }

  remove(id: string): Promise<Users> {
    return this.userModel.findOneAndRemove().exec();
  }
}
