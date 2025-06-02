import { Product } from "./product-service";
import { api } from "./axios";

export interface Collection {
  id: string,
  title: string,
  products: Product[]
}

class CollectionService {
  async findAll() {
    return api.get<Collection[]>("/collections");
  }

  async findOne(id: string) {
    return api.get<Collection>("/collections/" + id);
  }

  async getMale() {
    return api.get<Product[]>("/collections/male");
  }

  async getFemale() {
    return api.get<Product[]>("/collections/female");
  }

  async getNewest() {
    return api.get<Product[]>('/collections/new')
  }
}

export const collectionService = new CollectionService();