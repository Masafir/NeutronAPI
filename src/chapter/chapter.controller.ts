import { Body, Controller, Delete, Get, NotAcceptableException, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/user/get-user.decorator';
import { User } from 'src/user/user.entity';
import { addChapterDto } from './addChapter.dto';
import { Chapter } from './chapter.entity';
import { ChaptersService } from './chapters.service';
import { deleteChapterDto } from './deleteChapter.dto';

@Controller('chapters')
export class ChaptersController {
  constructor(private chaptersService: ChaptersService) {}

  @Get(":id")
  getChapter(@Param("id",ParseIntPipe)id: number):Promise<Chapter>{
    return this.chaptersService.getChapterById(id);
  }
  @Get("fromBook/:id")
  getChaptersFromBook(@Param("id",ParseIntPipe)id: number): Promise<Chapter[]>{
    return this.chaptersService.getChapterFromBookId(id);
  }

  @Post("addChapter")
  @UseGuards(AuthGuard("jwt"))
  addChapter(@Body()addChapterDto :addChapterDto ,@GetUser()user: User): Promise<Chapter>{
    return this.chaptersService.addChapter(addChapterDto,user);
  }
  @Delete()
  @UseGuards(AuthGuard("jwt"))
  deleteChapter(@Body()deleteChapterDto :deleteChapterDto ,@GetUser()user: User) {
    const deletedChapter = this.chaptersService.deleteChapter(deleteChapterDto,user);
    if(deletedChapter)
    {
      return "Chapter Deleted.";
    }
    else{
      throw new NotAcceptableException();
    }
  }
}