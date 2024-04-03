import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//import { Accesos } from './accesos.entities';

@Entity()
export class Usuarios{

    @PrimaryGeneratedColumn()
    id_user:  number;

    @Column()
    nombre:     string;

    @Column()
    ap_paterno: string;

    @Column()
    ap_materno: string;

    @Column({ type: 'text' })
    image:      string;

    @Column()
    userKey:  string;

    @Column()
    carrera:    string;

    @Column()
    password:   string;

    @Column()
    type_user:  string;

}