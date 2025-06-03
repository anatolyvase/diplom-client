"use client";
import React from "react";
import { Product } from "@/services/product-service";

interface Basket {
  products: Product[];
  userId: string | null;
}

const Basket: React.FC = () => {
  const [basket, setBasket] = React.useState<Basket>({
    userId: "123",
    products: [
      {
        id: "1",
        sex: "MALE",
        collection: {
          id: "1",
          title: "title",
          products: [],
        },
        title: "Футболка Oversize",
        price: 1990,
        imageUrl: "/images/tshirt.jpg",
      },
      {
        id: "2",
        title: "Худи с капюшоном",
        sex: "MALE",
        collection: {
          id: "1",
          title: "title",
          products: [],
        },
        price: 3490,
        imageUrl: "/images/hoodie.jpg",
      },
    ],
  });

  return (
    <ul className="space-y-4">
      {basket.products.map((product) => (
        <BasketItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

const BasketItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <li className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 shadow">
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
      </div>
      <div className="text-right">
        <div className="text-lg font-semibold">{product.price} ₽</div>
        <button className="text-red-500 hover:underline text-sm mt-1 cursor-pointer">
          Удалить
        </button>
      </div>
    </li>
  );
};

export { Basket };
