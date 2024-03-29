import { IsNotEmpty, IsString,IsNumber } from "class-validator";
export class createUserDto {
  @IsString()
  @IsNotEmpty()
    username: String;
  @IsString()
  @IsNotEmpty()
    password: String;
  @IsNotEmpty()
    mail: String;
}