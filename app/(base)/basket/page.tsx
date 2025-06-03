import { Basket } from "@/components/basket";
import React from "react";

function BasketPage() {
  return (
    <div className="flex flex-col items-center bg-[#f8f9fb] min-h-screen pt-20 pb-10">
      <div className="container max-w-3xl w-full px-4">
        <header className="text-3xl font-bold mb-6">Корзина</header>

        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          {/* Компонент корзины — список товаров */}
          <Basket />
        </div>

        {/* Подвал корзины: итог и кнопка */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xl font-semibold">
            Итого: <span className="text-green-600">5 490 ₽</span>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-6 py-3 rounded-xl transition">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
