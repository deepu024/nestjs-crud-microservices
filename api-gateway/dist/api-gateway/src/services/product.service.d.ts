import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { ICreateProductDto, IUpdateProductDto, IUpdateStockDto } from '@nestjs-crud-microservices/libs';
export declare class ProductService {
    private readonly httpService;
    private readonly configService;
    private readonly baseUrl;
    constructor(httpService: HttpService, configService: ConfigService);
    create(createProductDto: ICreateProductDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateProductDto: IUpdateProductDto): Promise<any>;
    updateStock(id: string, updateStockDto: IUpdateStockDto): Promise<any>;
    remove(id: string): Promise<any>;
}
