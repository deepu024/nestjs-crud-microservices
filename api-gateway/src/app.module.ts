import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { UserController } from './controllers/user.controller';
import { ProductController } from './controllers/product.controller';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
  ],
  controllers: [UserController, ProductController],
  providers: [UserService, ProductService],
})
export class AppModule {} 