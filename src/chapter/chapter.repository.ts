import { InternalServerErrorException } from "@nestjs/common";
import { Book } from "src/book/book.entity";
import { User } from "src/user/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { addChapterDto } from "./addChapter.dto";
import { Chapter } from "./chapter.entity";

@EntityRepository(Chapter)
export class ChapterRepository extends Repository<Chapter> {

  async addChapter(addChapterDto: addChapterDto,user: User,book_founded: Book): Promise<Chapter>{
    const { title,index,content } = addChapterDto;
    const newChapter = new Chapter();
    newChapter.title = title;
    newChapter.index = index;
    newChapter.content = content;
    newChapter.book = book_founded;

    try {
      newChapter.save();
      return newChapter;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

  }
}
