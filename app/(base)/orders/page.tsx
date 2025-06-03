import { Orders } from "@/components/orders";
import React from "react";

function OrdersPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fb] dark:bg-gray-900 p-6 pt-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Мои заказы</h1>

        <Orders />
      </div>
    </div>
  );
}

export default OrdersPage;
