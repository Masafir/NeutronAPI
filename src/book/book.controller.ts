import { Body, Controller, Delete, Get, NotAcceptableException, NotFoundException, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Type } from 'class-transformer';
import { GetUser } from 'src/user/get-user.decorator';
import { User } from 'src/user/user.entity';
import { addBookDto } from './addBook.dto';
import { Book } from './book.entity';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
 
  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.booksService.getAllBooks();
  }

  @Get("mybooks")
  @UseGuards(AuthGuard("jwt"))
  getMyBooks(@GetUser()user: User): Promise<Book[]> {
    if(user.id)
    {
      return this.booksService.getBooksProfile(user.id);
    }
    else{
      throw new NotFoundException();
    }
  }

  @Get(":id")
  //@UseGuards(AuthGuard("jwt"))
  getBookById(@Param()id: number): Promise<Book> {
    return this.booksService.getBookById(id);
  }

  @Get("/user/:id")
  @UseGuards(AuthGuard("jwt"))
  getUserBooksById(@Param("id",ParseIntPipe)id: number): Promise<Book[]> {
    if(id > -1)
    {
      return this.booksService.getBooksProfile(id);
    }
    else{
      throw new NotFoundException();
    }
  }


  @Post("addBook")
  @UseGuards(AuthGuard("jwt"))
  addBook(@Body()addBookDto :addBookDto ,@GetUser()user: User): Promise<Book[]>{
    this.booksService.addBooks(addBookDto,user);

    return this.booksService.getBooksProfile(user.id);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  deleteBook(@Param("id",ParseIntPipe)id: number,@GetUser()user: User) {
    const deletedBook = this.booksService.deleteBook(id,user);
    if(deletedBook)
    {
      return "Book Deleted.";
    }
    else{
      throw new NotAcceptableException();
    }
  }

  //@Get("/:id")
  
}