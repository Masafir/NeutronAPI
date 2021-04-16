import { IsNotEmpty, IsString,IsNumber } from "class-validator";
export class updateChapterDto {
  @IsNumber()
  @IsNotEmpty()
    id: number;
  @IsString()
  @IsNotEmpty()
    title: String;
  @IsNumber()
  @IsNotEmpty()
    book: number;
  @IsString()
  @IsNotEmpty()
    content: String;
}