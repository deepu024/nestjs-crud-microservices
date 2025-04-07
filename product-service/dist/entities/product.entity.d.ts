import { IProduct } from '@nestjs-crud-microservices/libs';
export declare class Product implements IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
}
