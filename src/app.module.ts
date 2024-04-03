import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './usuarios/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './usuarios/entity/users-entities';
import { Accesos } from './usuarios/entity/accesos-entities';

@Module({
  imports: [
      UsersModule,
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'skazi',
        password: 'cit123',
        database: 'cuervo',
        entities: [ Usuarios, Accesos ],
        synchronize: true, // false no recomendable en producción
        autoLoadEntities: true
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
