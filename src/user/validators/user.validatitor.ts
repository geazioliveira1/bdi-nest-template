import {User} from "../interfaces/user.interface";
import {IsEmail, IsString} from "class-validator";

export class UserValidatitor implements User {

  @IsEmail()
  email: string;

  @IsString()
  enterpriseId: string;

  @IsString()
  name: string;

  @IsString()
  phone: string;

}
