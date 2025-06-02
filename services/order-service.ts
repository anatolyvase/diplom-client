import { Product } from "./product-service";
import { api } from "./axios";

export interface Order {
  id: string,
  totalPrice: number,
  products: Product[],
}

class OrderService {
  async findAll() {
    return api.get<Order[]>("/orders");
  }

  async create(products: string[]) {
    return api.post("/orders", {
      products
    })
  }
}

export const orderService = new OrderService();