import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateUserDto, UpdateUserDto } from '@nestjs-crud-microservices/libs';

@Injectable()
export class UserService {
  constructor(private readonly client: ClientProxy) {}

  async create(createUserDto: CreateUserDto) {
    return firstValueFrom(this.client.send('create_user', createUserDto));
  }

  async findAll() {
    return firstValueFrom(this.client.send('find_all_users', {}));
  }

  async findOne(id: string) {
    return firstValueFrom(this.client.send('find_one_user', { id }));
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return firstValueFrom(this.client.send('update_user', { id, ...updateUserDto }));
  }

  async remove(id: string) {
    return firstValueFrom(this.client.send('remove_user', { id }));
  }
} 