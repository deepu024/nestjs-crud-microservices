"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let UserService = class UserService {
    constructor(client) {
        this.client = client;
    }
    async create(createUserDto) {
        return (0, rxjs_1.firstValueFrom)(this.client.send('create_user', createUserDto));
    }
    async findAll() {
        return (0, rxjs_1.firstValueFrom)(this.client.send('find_all_users', {}));
    }
    async findOne(id) {
        return (0, rxjs_1.firstValueFrom)(this.client.send('find_one_user', { id }));
    }
    async update(id, updateUserDto) {
        return (0, rxjs_1.firstValueFrom)(this.client.send('update_user', { id, ...updateUserDto }));
    }
    async remove(id) {
        return (0, rxjs_1.firstValueFrom)(this.client.send('remove_user', { id }));
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], UserService);
//# sourceMappingURL=user.service.js.map