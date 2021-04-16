import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Chapter } from './chapter.entity';
import { v1 as uuid } from 'uuid';
import { ChapterRepository } from './chapter.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { BooksService } from 'src/book/books.service';
import { addChapterDto } from './addChapter.dto';
import { User } from 'src/user/user.entity';
import { deleteChapterDto } from './deleteChapter.dto';
@Injectable()
export class ChaptersService {
  constructor(
    @InjectRepository(ChapterRepository)
     private ChapterRepository: 
     ChapterRepository,
     private booksService:
     BooksService
  ) {}

  async getChapterById(id: number): Promise<Chapter>{
    return this.ChapterRepository.findOne(id);
  }
  async getChapterFromBookId(id: number): Promise<Chapter[]>{
    return this.ChapterRepository.find({where:{book: {id}}});
  }
  async addChapter(addChapterDto: addChapterDto,user: User): Promise<Chapter>{
    const book_founded = await this.booksService.getBookById(addChapterDto.book);
    if(book_founded && book_founded.user_author.id == user.id)
    {
      const newBook = await this.ChapterRepository.addChapter(addChapterDto,user,book_founded);
      return newBook;
    }
    else{
      throw new UnauthorizedException();
    }

  }
  async deleteChapter(deleteChapterDto: deleteChapterDto,user: User): Promise<boolean>{
    const { id,book_id } = deleteChapterDto;
    const book = await this.booksService.getBookById(book_id);
    if(book.user_author.id == user.id)
    {
      return this.ChapterRepository.delete(id) ? true : false;
    }
    else{
      throw new UnauthorizedException();
    }
  }
}