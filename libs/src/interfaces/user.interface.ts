import { IsEmail, IsString, MinLength } from 'class-validator';

export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
}

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(2)
  firstName: string;

  @IsString()
  @MinLength(2)
  lastName: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export class UpdateUserDto {
  @IsEmail()
  email?: string;

  @IsString()
  @MinLength(2)
  firstName?: string;

  @IsString()
  @MinLength(2)
  lastName?: string;

  @IsString()
  @MinLength(6)
  password?: string;
} 