import { IsNotEmpty, IsString,IsNumber } from "class-validator";
export class addBookDto {
  @IsString()
  @IsNotEmpty()
    name: String;
  @IsString()
    author: String;
  @IsString()
    description: String;
  @IsNotEmpty()
    type: number;
}