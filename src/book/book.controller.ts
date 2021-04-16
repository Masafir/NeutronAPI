import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { get } from 'node:http';
import { GetUser } from 'src/user/get-user.decorator';
import { User } from 'src/user/user.entity';
import { addBookDto } from './addBook.dto';
import { Book } from './book.entity';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
 
  @Get()
  @UseGuards(AuthGuard("jwt"))
  getAllBooks(): Promise<Book[]> {
    return this.booksService.getAllBooks();
  }

  @Get("mybooks")
  @UseGuards(AuthGuard("jwt"))
  getMyBooks(): Promise<Book[]> {

  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  getBookById(@Param()id: number): Promise<Book> {

  }

  @Get("/user/:id")
  @UseGuards(AuthGuard("jwt"))
  getUserBooksById(@Param()id: number): Promise<Book[]> {

  }


  @Post("addBook")
  @UseGuards(AuthGuard("jwt"))
  addBook(@Body()addBookDto :addBookDto ,@GetUser()user: User): Promise<Book>{
    return this.booksService.addBooks(addBookDto,user);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  deleteBook(@Params()id: number,@GetUser()user: User): Promise<Book>{
    return this.booksService.deleteBook(id,user);
  }

  //@Get("/:id")
  
}