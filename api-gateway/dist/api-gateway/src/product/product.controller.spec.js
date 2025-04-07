"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const product_controller_1 = require("../product/product.controller");
const rxjs_1 = require("rxjs");
const product_service_1 = require("../product/product.service");
describe('ProductController', () => {
    let controller;
    let service;
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
        send: jest.fn().mockImplementation((pattern, data) => (0, rxjs_1.of)(mockProduct)),
    };
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [product_controller_1.ProductController],
            providers: [
                {
                    provide: product_service_1.ProductService,
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
        controller = module.get(product_controller_1.ProductController);
        service = module.get(product_service_1.ProductService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    describe('create', () => {
        it('should create a new product', async () => {
            const createProductDto = {
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
            const updateProductDto = {
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
//# sourceMappingURL=product.controller.spec.js.map