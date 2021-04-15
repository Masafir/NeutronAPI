import { Controller } from '@nestjs/common';
import { TypesService } from './type.service';

@Controller('types')
export class TypesController {
  constructor(private typesService: TypesService) {}

}