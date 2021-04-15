import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from './chapter.entity';
import { ChapterRepository } from './chapter.repository';
import { ChaptersController } from './chapter.controller';
import { ChaptersService } from './chapters.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChapterRepository])],
  controllers: [ChaptersController],
  providers: [ChaptersService]
})
export class ChaptersModule {}
