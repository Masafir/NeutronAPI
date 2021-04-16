import { IsNotEmpty, IsString,IsNumber, IsBoolean } from "class-validator";
export class errorConnexionDto {
  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }

  @IsBoolean()
  @IsNotEmpty()
    accept: Boolean;
  @IsString()
  @IsNotEmpty()
    error: String;
}