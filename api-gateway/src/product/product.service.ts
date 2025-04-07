import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { ICreateProductDto, IUpdateProductDto } from '@nestjs-crud-microservices/libs';

@Injectable()
export class ProductService {
  constructor(private readonly client: ClientProxy) {}

  async create(createProductDto: ICreateProductDto) {
    return firstValueFrom(this.client.send('create_product', createProductDto));
  }

  async findAll() {
    return firstValueFrom(this.client.send('find_all_products', {}));
  }

  async findOne(id: string) {
    return firstValueFrom(this.client.send('find_one_product', { id }));
  }

  async update(id: string, updateProductDto: IUpdateProductDto) {
    return firstValueFrom(this.client.send('update_product', { id, ...updateProductDto }));
  }

  async remove(id: string) {
    return firstValueFrom(this.client.send('remove_product', { id }));
  }
} 