import { 
    IsString, 
    MaxLength, 
    MinLength,
    IsOptional
} from "class-validator";

export class updateUser{

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    @IsOptional()
    nombre:     string;

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    @IsOptional()
    ap_paterno: string;

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    @IsOptional()
    ap_materno: string;

    @IsString()
    @IsOptional()
    image:      string;

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    @IsOptional()
    userKey:  string;

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    @IsOptional()
    carrera:    string;

    @IsString()
    @MaxLength(255)
    @MinLength(8)
    @IsOptional()
    password:   string;
}