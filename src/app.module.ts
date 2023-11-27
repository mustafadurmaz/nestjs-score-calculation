import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:"mssql",
      host:"213.238.179.152",
      port:1433,
      username: "testuser",
      password: "Ankara123*",
      database: "TestDatabase",
      options: {
        encrypt: false, // MSSQL-specific option
      },
      synchronize: true, //use this with development environment
      entities: [User],
    }),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
