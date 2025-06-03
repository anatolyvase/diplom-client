import { Product } from "./product-service";
import { api, protectedApi } from "./axios";

export interface OrderProduct extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  totalPrice: number;
  createdAt: string;
  status: string;
  products: OrderProduct[];
}

class OrderService {
  async findAll() {
    return protectedApi.get<Order[]>("/orders");
  }

  async create(
    products: {
      id: string;
      quantity: number;
    }[],
  ) {
    return protectedApi.post("/orders", {
      products,
    });
  }
}

export const orderService = new OrderService();
