import { IUser } from '@nestjs-crud-microservices/libs';
export declare class User implements IUser {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
