import { IsNotEmpty, IsString,IsNumber } from "class-validator";
export class addChapterDto {
  @IsString()
  @IsNotEmpty()
    title: String;
  @IsNumber()
  @IsNotEmpty()
    index: number;
  @IsNotEmpty()
    book: number;
  @IsString()
  @IsNotEmpty()
    content: String;
  
}