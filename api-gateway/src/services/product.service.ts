import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { ICreateProductDto, IUpdateProductDto, IUpdateStockDto } from '@nestjs-crud-microservices/libs';

@Injectable()
export class ProductService {
  private readonly baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('PRODUCT_SERVICE_URL');
  }

  async create(createProductDto: ICreateProductDto) {
    const { data } = await firstValueFrom(
      this.httpService.post(`${this.baseUrl}/products`, createProductDto),
    );
    return data;
  }

  async findAll() {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/products`),
    );
    return data;
  }

  async findOne(id: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/products/${id}`),
    );
    return data;
  }

  async update(id: string, updateProductDto: IUpdateProductDto) {
    const { data } = await firstValueFrom(
      this.httpService.patch(`${this.baseUrl}/products/${id}`, updateProductDto),
    );
    return data;
  }

  async updateStock(id: string, updateStockDto: IUpdateStockDto) {
    const { data } = await firstValueFrom(
      this.httpService.patch(`${this.baseUrl}/products/${id}/stock`, updateStockDto),
    );
    return data;
  }

  async remove(id: string) {
    const { data } = await firstValueFrom(
      this.httpService.delete(`${this.baseUrl}/products/${id}`),
    );
    return data;
  }
} 