//import { IsNotEmpty, IsString,IsNumber } from "class-validator";
import { Book } from "src/book/book.entity";

export interface JwtPayload {
  
    id: number;
    username: String;
    mail: String;
}