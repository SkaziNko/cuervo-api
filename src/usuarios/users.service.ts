import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './entity/users-entities';
import { Accesos } from './entity/accesos-entities';
import { CreateUser } from './dto/create-user.dto';
import { updateUser } from './dto/update-user.dto';
import { CreateAccesos } from './dto/create-accesos.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository( Usuarios )
        private usuraiosRepository: Repository<Usuarios>,
        @InjectRepository( Accesos )
        private accesosRepository: Repository<Accesos>,
    ){}

    async registerAccess( createAcceso: CreateAccesos ){
        try{
            const user: Usuarios = await this.usuraiosRepository.findOneBy({
                userKey: createAcceso.userKey,
            });
            const new_register = new Accesos;
            new_register.usuarios = { id_user: user.id_user } as any;
            return await this.accesosRepository.save(new_register);
        }catch(error){
            return false;
        }

    }

    async listAccess(){
        return await this.accesosRepository
            .createQueryBuilder('accesos')
            .innerJoinAndSelect('accesos.usuarios', 'usuarios')
            .select("accesos.id_acceso")
            .addSelect("accesos.fecha_ingreso")
            .addSelect("usuarios.nombre")
            .addSelect("usuarios.ap_paterno")
            .addSelect("usuarios.ap_materno")
            .addSelect("usuarios.userKey")
            .addSelect("usuarios.carrera")
            .addSelect("usuarios.image")
            .getMany();
    }

    async login( updateUser: updateUser ){
        try{
            const user: Usuarios = await this.usuraiosRepository.findOneBy({
                userKey: updateUser.userKey,
            });
            return ( user.password === updateUser.password ) ? user : false;
        }catch( error ){
            return false;
        }
    }

    async create( createUser: CreateUser ){
        const new_user = this.usuraiosRepository.create( createUser );
        return await this.usuraiosRepository.save( new_user );        
    }

    async update( id_user: number, updateUser: updateUser ){
        return await this.usuraiosRepository.update( id_user, updateUser );
    }

    async findAll(){
        return await this.usuraiosRepository.find();
    }

    async findOne( id_user: number ){
        return await this.usuraiosRepository.findBy({ id_user });
    }

    async delete( id_user: number ){
        return await this.usuraiosRepository.delete( id_user );
    }
}
