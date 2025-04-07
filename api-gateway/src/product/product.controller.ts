import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ICreateProductDto, IUpdateProductDto } from '@nestjs-crud-microservices/libs';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern('create_product')
  create(createProductDto: ICreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @MessagePattern('find_all_products')
  findAll() {
    return this.productService.findAll();
  }

  @MessagePattern('find_one_product')
  findOne(data: { id: string }) {
    return this.productService.findOne(data.id);
  }

  @MessagePattern('update_product')
  update(data: { id: string } & IUpdateProductDto) {
    const { id, ...updateProductDto } = data;
    return this.productService.update(id, updateProductDto);
  }

  @MessagePattern('remove_product')
  remove(data: { id: string }) {
    return this.productService.remove(data.id);
  }
} 