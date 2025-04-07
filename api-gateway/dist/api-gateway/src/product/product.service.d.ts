import { ClientProxy } from '@nestjs/microservices';
import { ICreateProductDto, IUpdateProductDto } from '@nestjs-crud-microservices/libs';
export declare class ProductService {
    private readonly client;
    constructor(client: ClientProxy);
    create(createProductDto: ICreateProductDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateProductDto: IUpdateProductDto): Promise<any>;
    remove(id: string): Promise<any>;
}
