"use client";
import { Button } from "@/components/button";
import { BasketProduct, basketService } from "@/services/basket-service";
import React, { useEffect } from "react";

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
        <Button disabled={basket.products.length === 0} size="md">
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
    <li className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900 rounded-xl p-4 shadow">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="text-lg font-semibold">{product.title}</div>
        <div className="text-sm text-gray-500">
          Коллекция: {product.collection.title}
        </div>
        <div className="text-sm text-gray-500">Кол-во: {product.quantity}</div>
      </div>
      <div className="text-right">
        <div className="text-lg font-semibold">{product.price} ₽</div>
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
