import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable } from 'typeorm';
import { Usuarios } from './users-entities';

@Entity()
export class Accesos{

    @PrimaryGeneratedColumn()
    id_acceso:      number;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    fecha_ingreso:  Date;

    @ManyToOne( () => Usuarios, usuarios => usuarios.id_user) 
    @JoinTable()
    usuarios: Usuarios;

}