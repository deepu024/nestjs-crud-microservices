import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto, UpdateUserDto } from '@nestjs-crud-microservices/libs';
export declare class UserService {
    private readonly client;
    constructor(client: ClientProxy);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<any>;
    remove(id: string): Promise<any>;
}
