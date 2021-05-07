import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Book } from './book.entity';
import { v1 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from './book.repository';
import { addBookDto } from './addBook.dto';
import { User } from 'src/user/user.entity';
import { TypeRepository } from 'src/typeofbook/type.repository';
import { TypesService } from 'src/typeofbook/type.service';
@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookRepository)
     private BookRepository: 
     BookRepository,
     private typeService: 
    TypesService
  ) {}

  async findById(id: number): Promise<Book> {
    return this.BookRepository.findOne(id);
  }
  async getAllBooks(): Promise<Book[]> {
    return this.BookRepository.find({relations: ["chapters","types","user_author"]});
  }

  async addBooks(addBookDto: addBookDto,user: User): Promise<Book>{
    const type_founded = await this.typeService.findById(addBookDto.type);
    if(type_founded)
    {
      const newBook = await this.BookRepository.addBook(addBookDto,user,type_founded);
      return newBook;
    }
    else{
      throw new NotFoundException("Type was not founded.");
    }

  }
  async getBooksProfile(id: number): Promise<Book[]>{
    return this.BookRepository.find({where: {user_author: { id }}});
  }

  async getBookById(id: number): Promise<Book>{
    return this.BookRepository.findOne({select: ["author","user_author","name","id"],where:{id},relations: ["chapters","types","user_author"] });
  }

  async deleteBook(id: number,user: User): Promise<boolean>{
    const book = await this.getBookById(id);
    if(book.user_author.id == user.id)
    {
      return this.BookRepository.delete(id) ? true : false;
    }
    else{
      throw new UnauthorizedException();
    }
  }

}