import { ProductService } from '../services/product.service';
import { ICreateProductDto, IUpdateProductDto, IUpdateStockDto } from '@nestjs-crud-microservices/libs';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: ICreateProductDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateProductDto: IUpdateProductDto): Promise<any>;
    updateStock(id: string, updateStockDto: IUpdateStockDto): Promise<any>;
    remove(id: string): Promise<any>;
}
