export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateProductDto {
  name: string;
  description: string;
  price: number;
  stock: number;
}

export interface IUpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
}

export interface IUpdateStockDto {
  stock: number;
} 