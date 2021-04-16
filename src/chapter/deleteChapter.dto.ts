import { IsNotEmpty, IsString,IsNumber } from "class-validator";
export class deleteChapterDto {
  @IsNumber()
  @IsNotEmpty()
    id: number;
  @IsNumber()
  @IsNotEmpty()
    book_id: number;
}