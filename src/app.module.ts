import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { UsersModule } from './user/users.module';
import { BooksModule } from './book/books.module';
import { ChaptersModule } from './chapter/chapters.module';
import { TypesModule } from './typeofbook/type.module';

@Module({
  imports: [UsersModule,BooksModule,ChaptersModule,TypesModule,TypeOrmModule.forRoot(typeormConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
