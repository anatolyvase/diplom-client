"use client";
import { Product } from "@/services/product-service";
export interface BasketProduct extends Product {
  quantity: number;
}

class BasketService {
  add(product: Product) {
    try {
      const stored = localStorage.getItem("basket");
      let basket: { products: BasketProduct[] } = { products: [] };

      if (stored) {
        basket = JSON.parse(stored);
      }

      const existingIndex = basket.products.findIndex(
        (p) => p.id === product.id,
      );

      if (existingIndex !== -1) {
        basket.products[existingIndex].quantity += 1;
      } else {
        basket.products.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("basket", JSON.stringify(basket));
    } catch (error) {
      console.error("Ошибка при сохранении в корзину:", error);
    }
  }

  isInclude(product: Product): boolean {
    try {
      const stored = localStorage.getItem("basket");
      if (!stored) return false;

      const basket = JSON.parse(stored);
      return (
        basket.products?.some((p: Product) => p.id === product.id) ?? false
      );
    } catch (error) {
      console.error("Ошибка при проверке корзины:", error);
      return false;
    }
  }

  remove(product: BasketProduct, isAll: boolean = false) {
    try {
      const stored = localStorage.getItem("basket");
      if (!stored) return;

      const basket = JSON.parse(stored) as { products: BasketProduct[] };
      const index = basket.products.findIndex((p) => p.id === product.id);

      if (index === -1) return;

      if (isAll || basket.products[index].quantity <= 1) {
        basket.products.splice(index, 1);
      } else {
        basket.products[index].quantity -= 1;
      }

      localStorage.setItem("basket", JSON.stringify(basket));
    } catch (error) {
      console.error("Ошибка при удалении из корзины:", error);
    }
  }

  getAll = (): BasketProduct[] => {
    try {
      const stored = localStorage.getItem("basket");
      if (!stored) return [];

      const basket = JSON.parse(stored);
      return Array.isArray(basket.products) ? basket.products : [];
    } catch (error) {
      console.error("Ошибка при получении корзины:", error);
      return [];
    }
  };
}

export const basketService = new BasketService();
