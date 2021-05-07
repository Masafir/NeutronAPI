import { Type } from "src/typeofbook/type.entity";
import { User } from "src/user/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { addBookDto } from "./addBook.dto";
import { Book } from "./book.entity";

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  async addBook(addBookDto:addBookDto,user:User,type: Type): Promise<Book>{
    const { name,author,description } = addBookDto;
    const newBook = new Book();
    newBook.name = name;
    newBook.author = author;
    newBook.user_author = user;
    newBook.types = [type];
    newBook.description = description;
    try{
      newBook.save();
    }
    catch(error)
    {
      throw new Error(error);
    }

    return newBook;
  }

}
