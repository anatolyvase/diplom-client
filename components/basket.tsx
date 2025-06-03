"use client";
import { Button } from "@/components/button";
import { BasketProduct, basketService } from "@/services/basket-service";
import { orderService } from "@/services/order-service";
import React, { useEffect } from "react";
import { toast } from "sonner";

interface Basket {
  products: BasketProduct[];
  userId: string | null;
}

const Basket: React.FC = () => {
  const [basket, setBasket] = React.useState<Basket>({
    products: [],
    userId: null,
  });

  useEffect(() => {
    setBasket((prev) => ({ ...prev, products: basketService.getAll() }));
  }, []);

  const handleRemove = (product: BasketProduct) => {
    basketService.remove(product);
    setBasket((prev) => ({ ...prev, products: basketService.getAll() }));
  };

  const totalPrice = basket.products.reduce(
    (a, b) => a + b.price * b.quantity,
    0,
  );

  const createOrder = async () => {
    const products = basket.products.map(({ id, quantity }) => ({
      id,
      quantity,
    }));

    try {
      const { data } = await orderService.create(products);
      basketService.clear();
      setBasket({ ...basket, products: [] });
      console.log(data);
      toast.success("Заказ успешно создан!");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <ul className="space-y-4">
        {basket.products.length > 0 ? (
          basket.products.map((product) => (
            <BasketItem
              onRemove={handleRemove}
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <span>Корзина пуста</span>
        )}
      </ul>
      <div className="flex justify-between w-full mt-8">
        <div className="text-xl font-semibold">
          Итого:{" "}
          <span className="">
            {totalPrice.toLocaleString("ru-RU", {
              style: "currency",
              currency: "RUB",
            })}
          </span>
        </div>
        <Button
          onClick={createOrder}
          disabled={basket.products.length === 0}
          size="md"
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

interface BasketItemProps {
  product: BasketProduct;
  onRemove: (product: BasketProduct) => void;
}
const BasketItem: React.FC<BasketItemProps> = ({ product, onRemove }) => {
  return (
    <li className="grid grid-cols-[auto_1fr] md:flex md:items-center gap-4 bg-gray-50 dark:bg-gray-900 rounded p-4 shadow">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="text-base md:text-lg font-semibold">
          {product.title}
        </div>
        <div className="text-xs md:text-sm text-gray-500">
          Коллекция: {product.collection.title}
        </div>
        <div className="text-xs md:text-sm text-gray-500">
          Кол-во: {product.quantity}
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-[auto_1fr] md:grid-cols-1 justify-items-end">
        <div className="text-base md:text-lg font-semibold">
          {product.price} ₽
        </div>
        <button
          onClick={() => onRemove(product)}
          className="text-red-500 hover:underline text-sm mt-1 cursor-pointer"
        >
          Удалить
        </button>
      </div>
    </li>
  );
};

export { Basket };
