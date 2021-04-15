import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from './type.entity';
import { TypeRepository } from './type.repository';
import { TypesController } from './type.controller';
import { TypesService } from './type.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeRepository])],
  controllers: [TypesController],
  providers: [TypesService]
})
export class TypesModule {}
