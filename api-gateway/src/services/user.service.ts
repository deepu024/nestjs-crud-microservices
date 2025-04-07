import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { CreateUserDto, UpdateUserDto } from '@nestjs-crud-microservices/libs';

@Injectable()
export class UserService {
  private readonly baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('USER_SERVICE_URL');
  }

  async create(createUserDto: CreateUserDto) {
    const { data } = await firstValueFrom(
      this.httpService.post(`${this.baseUrl}/users`, createUserDto),
    );
    return data;
  }

  async findAll() {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/users`),
    );
    return data;
  }

  async findOne(id: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/users/${id}`),
    );
    return data;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { data } = await firstValueFrom(
      this.httpService.patch(`${this.baseUrl}/users/${id}`, updateUserDto),
    );
    return data;
  }

  async remove(id: string) {
    const { data } = await firstValueFrom(
      this.httpService.delete(`${this.baseUrl}/users/${id}`),
    );
    return data;
  }
} 