import { ICreateProductDto, IUpdateProductDto } from '@nestjs-crud-microservices/libs';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: ICreateProductDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(data: {
        id: string;
    }): Promise<any>;
    update(data: {
        id: string;
    } & IUpdateProductDto): Promise<any>;
    remove(data: {
        id: string;
    }): Promise<any>;
}
