import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.entity';
import { v1 as uuid } from 'uuid';
@Injectable()
export class BooksService {}