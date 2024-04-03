import { 
    IsInt, 
    IsString,
    IsOptional
} from "class-validator";

export class CreateAccesos{

    @IsInt()
    @IsOptional()
    alumnoIdAlumno:     number;

    @IsString()
    userKey:           string;

}