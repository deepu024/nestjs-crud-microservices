import { CreateUserDto, UpdateUserDto } from '@nestjs-crud-microservices/libs';
import { UserService } from '../user/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(data: {
        id: string;
    }): Promise<any>;
    update(data: {
        id: string;
    } & UpdateUserDto): Promise<any>;
    remove(data: {
        id: string;
    }): Promise<any>;
}
