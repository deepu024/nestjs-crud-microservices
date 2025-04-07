import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ICreateProductDto, IUpdateProductDto, IUpdateStockDto } from '@nestjs-crud-microservices/libs';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    create(createProductDto: ICreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(id: string, updateProductDto: IUpdateProductDto): Promise<Product>;
    updateStock(id: string, updateStockDto: IUpdateStockDto): Promise<Product>;
    remove(id: string): Promise<void>;
}
