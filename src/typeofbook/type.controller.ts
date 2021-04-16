import { Body, Controller, Get, Post } from '@nestjs/common';
import { Type } from './type.entity';
import { TypesService } from './type.service';

@Controller('types')
export class TypesController {
  constructor(private typesService: TypesService) {}

  @Get()
  getAllTypes(): Promise<Type[]>{
    return this.typesService.getAllTypes();
  }

  //UNIQUEMENT AUX ADMIN
  @Post()
  addTypes(@Body() data){
    const types :String[]  = JSON.parse(data.types);
    const type_created = this.typesService.addTypes(types); 
    return type_created ? "Types created" : "Error on create";
  }


}