import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { v1 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { createUserDto } from './createUser.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
     private UserRepository: 
     UserRepository
  ) {}

  async getUsersProfiles(): Promise<User[]>{
    const allUsers = await this.UserRepository.find({select: ["id","mail","username"],relations: ["books","books_fav"]});

    if(!allUsers)
    {
      throw new NotFoundException("NOTHING ON DB");
    }
    return allUsers;
  }

  async getUserProfile(id: number): Promise<User>{
    const found = await this.UserRepository.findOne(id,{select: ["id","mail","username"],relations: ["books","books_fav"]});

    if(!found)
    {
      throw new NotFoundException(`Task With id = ${id} NOT FOUND`);
    }

    return found;
  }

  async createUser(user: createUserDto): Promise<User>{
    const { mail,username } = user;
    const userNameAlreadyExist = await this.UserRepository.findOne({where: { username }});
    const userMailAlreadyExist = await this.UserRepository.findOne({where: { mail }});
    if(!userNameAlreadyExist)
    {
      if(!userMailAlreadyExist)
      {
        const newUser = this.UserRepository.createUser(user);
        return newUser;
      }
      else{
        throw new NotAcceptableException("Mail Adress already exist");
      }
    } 
    else{
      throw new NotAcceptableException("Username already exist");
    }
  }

  async deleteUserById(id): Promise<string>{
    if(this.getUserProfile(id))
    {
      await this.UserRepository.delete(id);

      return "User deleted.";
    }
    else{
      return "No users were found.";
    }
  }
}
