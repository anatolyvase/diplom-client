import { Collection } from "./collection-service";
import { api } from "./axios";

export interface Product {
  id: string,
  title: string,
  imageUrl: string,
  sex: "MALE" | "FEMALE"
  price: number,
  collection: Collection
}

class ProductService {
  async findAll() {
    return api.get<Product[]>("/products");
  }

  async findOne(id: string) {
    return api.get<Product>("/products/" + id);
  }
}

export const productService = new ProductService();