import { 
    Controller ,
    Post,
    Get,
    Delete,
    Put,
    Body,
    ValidationPipe,
    Param
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUser } from './dto/create-user.dto';
import { updateUser } from './dto/update-user.dto';
import { CreateAccesos } from './dto/create-accesos.dto';

@Controller('usuarios')
export class UsuariosController {

    constructor(
        private usuariosService: UsersService
    ){}

    @Post('login')
    async login( @Body( new ValidationPipe() ) updateAlumno: updateUser ){
        return await this.usuariosService.login( updateAlumno );
    }

    @Post('register-access')
    async registerAccess( @Body( new ValidationPipe() ) createAcceso: CreateAccesos ){
        return await this.usuariosService.registerAccess( createAcceso );
    }

    @Get('list-access')
    async listAccess(){
        return await this.usuariosService.listAccess();
    }

    @Post()
    async create( @Body( new ValidationPipe() ) CreateUser: CreateUser){
        return await this.usuariosService.create( CreateUser );
    }

    @Put(':id_user')
    async update( @Param('id_user') id_user: number, @Body( new ValidationPipe() ) updateUser: updateUser ){
        return await this.usuariosService.update( id_user, updateUser );      
    }

    @Get()
    async findAll(){
        return await this.usuariosService.findAll();
    }

    @Get(':id_user')
    async findOne( @Param('id_user') id_user: number ){
        return await this.usuariosService.findOne( id_user );
    }

    @Delete(':id_user')
    async delete( @Param('id_user') id_user: number ){
        return await this.usuariosService.delete( id_user );
    }

}