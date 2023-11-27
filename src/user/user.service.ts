import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository:Repository<User>) {}
    activeUsers(){
        return [{id:1,name: 'John'},{id:2,name: 'Mustafa'}]
    }

    async create(CreateUserDto:CreateUserDto){
        const result=await this.userRepository.create(CreateUserDto);
        return {message:"Saved", CreateUserDto}
    }
}
