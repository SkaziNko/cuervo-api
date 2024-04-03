import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './entity/users-entities';
import { Accesos } from './entity/accesos-entities';

@Module({
    imports:[
        TypeOrmModule.forFeature([
            Usuarios,
            Accesos,
        ]),
    ],
    controllers: [UsuariosController],
    providers: [UsersService]
})
export class UsersModule {}