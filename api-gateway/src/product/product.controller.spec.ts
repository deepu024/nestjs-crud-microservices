import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from '../product/product.controller';
import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';
import { ICreateProductDto, IUpdateProductDto } from '@nestjs-crud-microservices/libs';
import { ProductService } from '../product/product.service';

describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;

  const mockProduct = {
    id: '1',
    name: 'Test Product',
    description: 'Test Description',
    price: 100,
    stock: 50,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockClientProxy = {
    send: jest.fn().mockImplementation((pattern, data) => of(mockProduct)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockProduct),
            findAll: jest.fn().mockResolvedValue([mockProduct]),
            findOne: jest.fn().mockResolvedValue(mockProduct),
            update: jest.fn().mockResolvedValue(mockProduct),
            remove: jest.fn().mockResolvedValue(mockProduct),
          },
        },
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new product', async () => {
      const createProductDto: ICreateProductDto = {
        name: 'Test Product',
        description: 'Test Description',
        price: 100,
        stock: 50,
      };

      const result = await controller.create(createProductDto);
      expect(result).toEqual(mockProduct);
      expect(service.create).toHaveBeenCalledWith(createProductDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result = await controller.findAll();
      expect(result).toEqual([mockProduct]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a product', async () => {
      const result = await controller.findOne({ id: '1' });
      expect(result).toEqual(mockProduct);
      expect(service.findOne).toHaveBeenCalledWith('1');
    });
  });

  describe('update', () => {
    it('should update a product', async () => {
      const updateProductDto: IUpdateProductDto = {
        name: 'Updated Product',
        price: 150,
        stock: 75,
      };

      const result = await controller.update({ id: '1', ...updateProductDto });
      expect(result).toEqual(mockProduct);
      expect(service.update).toHaveBeenCalledWith('1', updateProductDto);
    });
  });

  describe('remove', () => {
    it('should remove a product', async () => {
      const result = await controller.remove({ id: '1' });
      expect(result).toEqual(mockProduct);
      expect(service.remove).toHaveBeenCalledWith('1');
    });
  });
}); 