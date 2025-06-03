import { Basket } from "@/components/basket";
import React from "react";

function BasketPage() {
  return (
    <div className="flex flex-col items-center bg-[#f8f9fb] dark:bg-gray-900 min-h-screen pt-20 pb-10">
      <div className="container max-w-3xl w-full px-3 md:px-4">
        <header className="text-3xl font-bold mb-6">Корзина</header>

        <div className="bg-white dark:bg-gray-800 rounded shadow p-3 md:p-6 mb-6">
          <Basket />
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
