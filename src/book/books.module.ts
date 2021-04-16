import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { BookRepository } from './book.repository';
import { BooksController } from './book.controller';
import { BooksService } from './books.service';
import { UsersModule } from 'src/user/users.module';
import { TypesModule } from 'src/typeofbook/type.module';

@Module({
  imports: [TypesModule,TypeOrmModule.forFeature([BookRepository])],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService]
})
export class BooksModule {}
