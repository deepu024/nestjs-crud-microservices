"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const user_controller_1 = require("../user/user.controller");
const user_service_1 = require("../user/user.service");
describe('UserController', () => {
    let controller;
    let service;
    const mockUser = {
        id: '1',
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [user_controller_1.UserController],
            providers: [
                {
                    provide: user_service_1.UserService,
                    useValue: {
                        create: jest.fn().mockResolvedValue(mockUser),
                        findAll: jest.fn().mockResolvedValue([mockUser]),
                        findOne: jest.fn().mockResolvedValue(mockUser),
                        update: jest.fn().mockResolvedValue(mockUser),
                        remove: jest.fn().mockResolvedValue(mockUser),
                    },
                },
            ],
        }).compile();
        controller = module.get(user_controller_1.UserController);
        service = module.get(user_service_1.UserService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    describe('create', () => {
        it('should create a new user', async () => {
            const createUserDto = {
                email: 'test@example.com',
                firstName: 'John',
                lastName: 'Doe',
                password: 'password123',
            };
            const result = await controller.create(createUserDto);
            expect(result).toEqual(mockUser);
            expect(service.create).toHaveBeenCalledWith(createUserDto);
        });
    });
    describe('findAll', () => {
        it('should return an array of users', async () => {
            const result = await controller.findAll();
            expect(result).toEqual([mockUser]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });
    describe('findOne', () => {
        it('should return a user', async () => {
            const result = await controller.findOne({ id: '1' });
            expect(result).toEqual(mockUser);
            expect(service.findOne).toHaveBeenCalledWith('1');
        });
    });
    describe('update', () => {
        it('should update a user', async () => {
            const updateUserDto = {
                firstName: 'Jane',
                lastName: 'Smith',
            };
            const result = await controller.update({ id: '1', ...updateUserDto });
            expect(result).toEqual(mockUser);
            expect(service.update).toHaveBeenCalledWith('1', updateUserDto);
        });
    });
    describe('remove', () => {
        it('should remove a user', async () => {
            const result = await controller.remove({ id: '1' });
            expect(result).toEqual(mockUser);
            expect(service.remove).toHaveBeenCalledWith('1');
        });
    });
});
//# sourceMappingURL=user.controller.spec.js.map