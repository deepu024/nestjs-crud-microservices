import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto, UpdateUserDto } from '@nestjs-crud-microservices/libs';
import { UserService } from '../user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('create_user')
  create(createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @MessagePattern('find_all_users')
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern('find_one_user')
  findOne(data: { id: string }) {
    return this.userService.findOne(data.id);
  }

  @MessagePattern('update_user')
  update(data: { id: string } & UpdateUserDto) {
    const { id, ...updateUserDto } = data;
    return this.userService.update(id, updateUserDto);
  }

  @MessagePattern('remove_user')
  remove(data: { id: string }) {
    return this.userService.remove(data.id);
  }
} 