import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from './chapter.entity';
import { ChapterRepository } from './chapter.repository';
import { ChaptersController } from './chapter.controller';
import { ChaptersService } from './chapters.service';
import { BooksModule } from 'src/book/books.module';

@Module({
  imports: [BooksModule,TypeOrmModule.forFeature([ChapterRepository])],
  controllers: [ChaptersController],
  providers: [ChaptersService]
})
export class ChaptersModule {}
