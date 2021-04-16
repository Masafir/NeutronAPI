import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Type } from "./type.entity";

@EntityRepository(Type)
export class TypeRepository extends Repository<Type> {

  async addType(name: String){
    const newType = new Type();
    newType.name = name;
    try {
      newType.save()
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
