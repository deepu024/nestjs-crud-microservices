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
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const rxjs_1 = require("rxjs");
let UserService = class UserService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
        this.baseUrl = this.configService.get('USER_SERVICE_URL');
    }
    async create(createUserDto) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`${this.baseUrl}/users`, createUserDto));
        return data;
    }
    async findAll() {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${this.baseUrl}/users`));
        return data;
    }
    async findOne(id) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${this.baseUrl}/users/${id}`));
        return data;
    }
    async update(id, updateUserDto) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.patch(`${this.baseUrl}/users/${id}`, updateUserDto));
        return data;
    }
    async remove(id) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.delete(`${this.baseUrl}/users/${id}`));
        return data;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], UserService);
//# sourceMappingURL=user.service.js.map