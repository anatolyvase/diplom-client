"use client";

import { Order, orderService } from "@/services/order-service";
import React, { useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";

const Orders: React.FC = () => {
  const [items, setItems] = React.useState<Order[]>([]);

  const load = async () => {
    try {
      const { data } = await orderService.findAll();
      setItems(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      {items.length === 0 ? (
        <p className="text-gray-600">У вас пока нет заказов.</p>
      ) : (
        <div className="space-y-8">
          {items.map((order) => (
            <div
              key={order.id}
              className="bg-white dark:bg-gray-800 rounded shadow p-5"
            >
              <div className="flex justify-between items-start border-b pb-3 mb-4">
                <div>
                  <h2 className="text-lg font-semibold">Заказ #{order.id}</h2>
                  <p className="text-sm text-gray-500">
                    Дата: {new Date(order.createdAt).toLocaleString("ru-RU")}
                  </p>
                  <p className="font-bold text-lg mt-2">
                    {order.totalPrice.toLocaleString("ru-RU", {
                      style: "currency",
                      currency: "RUB",
                    })}
                  </p>

                  {order.status && (
                    <span className="inline-block mt-1 px-3 py-1 text-sm font-medium rounded bg-gray-200 text-gray-800">
                      {order.status}
                    </span>
                  )}
                </div>

                {order.status === "Принят" && (
                  <div className="flex flex-col items-center">
                    <p className="text-sm text-gray-600 mb-1">Оплатите заказ</p>
                    <div className="bg-white p-2 rounded dark:bg-gray-700">
                      <QRCodeSVG
                        value={`https://example.com/pay?orderId=${order.id}`}
                        size={96}
                        bgColor="#ffffff"
                        fgColor="#000000"
                        level="H"
                      />
                    </div>
                  </div>
                )}
              </div>

              <ul className="space-y-4">
                {order.products.map((product) => (
                  <li key={product.id} className="flex items-center gap-4">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{product.title}</p>
                      <p className="text-sm text-gray-500">
                        Кол-во: {product.quantity}
                      </p>
                    </div>
                    <p className="font-semibold">
                      {(product.price * product.quantity).toLocaleString(
                        "ru-RU",
                        {
                          style: "currency",
                          currency: "RUB",
                        },
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export { Orders };
