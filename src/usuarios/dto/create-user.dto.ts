import { 
    IsString, 
    MaxLength, 
    MinLength 
} from "class-validator";

export class CreateUser{

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    nombre:     string;

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    ap_paterno: string;

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    ap_materno: string;

    @IsString()
    image:      string;

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    userKey:  string;

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    carrera:    string;

    @IsString()
    @MaxLength(255)
    @MinLength(8)
    password: string;
}