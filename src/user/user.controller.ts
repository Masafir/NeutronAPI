import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { createUserDto } from './createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers(): Promise<User[]>{
    console.log("GET ALL USERS");
    return this.userService.getUsersProfiles();
  }

  @Get('/profile/:id')
  getUserProfile(@Param('id',ParseIntPipe)id: number): Promise<User>{
    return this.userService.getUserProfile(id);
  }

  @Post('createUser')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: createUserDto ): Promise<User>{
    console.log("you user dto : ",createUserDto);
    return this.userService.createUser(createUserDto);
  }

  @Delete(':id')
  deleteUserById(@Param() params): Promise<string> {
    
  return this.userService.deleteUserById(params.id);
  }


  //CONNEXION / LOGOUT / MIDDLEWARE
}