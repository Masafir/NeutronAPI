import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { v1 as uuid } from 'uuid';
@Injectable()
export class UsersService {}