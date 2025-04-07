export interface IUser {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class CreateUserDto {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}
export declare class UpdateUserDto {
    email?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
}
