import { EntityRepository, Repository } from "typeorm";
import { createUserDto } from "./createUser.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';

export const saltOrRounds = 10;

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  
  async createUser(createUserDto: createUserDto): Promise<User>{
    const { username,password,mail } = createUserDto;

    const newUser = new User();
    newUser.username = username;
    newUser.mail = mail;
    newUser.password = await bcrypt.hash(password, saltOrRounds);
    newUser.books = [];
    newUser.books_fav = [];
    try{
      await newUser.save();
    }
    catch(err) {
      
      throw new Error("Username or mail are already used.");
    }

    return newUser;

  }

}
