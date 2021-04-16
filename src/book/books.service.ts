import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.entity';
import { v1 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from './book.repository';
import { addBookDto } from './addBook.dto';
import { User } from 'src/user/user.entity';
import { TypeRepository } from 'src/typeofbook/type.repository';
@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookRepository)
     private BookRepository: 
     BookRepository,
     @InjectRepository(TypeRepository)
     private TypeRepository: 
     TypeRepository
  ) {}
  async getAllBooks(): Promise<Book[]> {
    return this.BookRepository.find();
  }

  async addBooks(addBookDto: addBookDto,user: User): Promise<Book>{
    const type_founded = await this.TypeRepository.findOne(addBookDto.type);
    if(type_founded)
    {
      const newBook = await this.BookRepository.addBook(addBookDto,user,type_founded);
      return newBook;
    }
    else{
      throw new NotFoundException("Type was not founded.");
    }

  }
}