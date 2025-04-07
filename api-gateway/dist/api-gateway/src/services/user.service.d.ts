import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto, UpdateUserDto } from '@nestjs-crud-microservices/libs';
export declare class UserService {
    private readonly httpService;
    private readonly configService;
    private readonly baseUrl;
    constructor(httpService: HttpService, configService: ConfigService);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<any>;
    remove(id: string): Promise<any>;
}
