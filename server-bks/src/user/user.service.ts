import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
constructor(
  @InjectRepository(User) private readonly userRepository
)
{}

  create(createUserDto: CreateUserDto):Promise<User> {

    const user:User = new User();
    user.username=createUserDto.username;
    user.email=createUserDto.email;
    user.mobile=createUserDto.mobile;
    return this.userRepository.save(user);
  }

  findAll():Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number):Promise<User> {
    return this.userRepository.findOneBy({id});
  }

  update(id: number, updateUserDto: UpdateUserDto) : Promise<User>{
    const user : User= new User();
    user.username=updateUserDto.username;
    user.email=updateUserDto.email;
    user.mobile=updateUserDto.mobile;
    user.id=id;

  
    return this.userRepository.save(user);
  }

  remove(id: number) : Promise<{affected?:number}> {
    return this.userRepository.delete(id);
  }
}
