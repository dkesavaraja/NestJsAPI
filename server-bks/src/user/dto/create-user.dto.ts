import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {


    @IsString()
    @IsNotEmpty()
    username:string ; 

    @IsEmail()
    email:string;

    @IsNumber()
    mobile:number;
}
