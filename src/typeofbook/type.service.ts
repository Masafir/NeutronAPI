import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Type } from './Type.entity';
import { v1 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeRepository } from './type.repository';
@Injectable()
export class TypesService {
  constructor(
     @InjectRepository(TypeRepository)
     private TypeRepository: 
     TypeRepository
  ) {}

  async getAllTypes(): Promise<Type[]> {
    return this.TypeRepository.find();
  }

  async addTypes(types: String[]): Promise<boolean>{
    try{
      console.log("your types are => ",types[0]);
        types.forEach(element => {
        console.log("element is => ", element);
        this.TypeRepository.addType(element); 
      });
      return true;
    }
    catch(error)
    {
      throw new InternalServerErrorException(error);
    }
  }

  async findById(type: number): Promise<Type> {
    return this.TypeRepository.findOne(type);
  }
}