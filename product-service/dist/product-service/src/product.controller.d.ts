import { ProductService } from './product.service';
import { ICreateProductDto, IUpdateProductDto, IUpdateStockDto } from '@nestjs-crud-microservices/libs';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: ICreateProductDto): Promise<import("./entities/product.entity").Product>;
    findAll(): Promise<import("./entities/product.entity").Product[]>;
    findOne(id: string): Promise<import("./entities/product.entity").Product>;
    update(id: string, updateProductDto: IUpdateProductDto): Promise<import("./entities/product.entity").Product>;
    updateStock(id: string, updateStockDto: IUpdateStockDto): Promise<import("./entities/product.entity").Product>;
    remove(id: string): Promise<void>;
}
