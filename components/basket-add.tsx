"use client";

import { basketService } from "@/services/basket-service";
import { Product } from "@/services/product-service";
import { ArrowRight } from "lucide-react";
import React from "react";
import { toast } from "sonner";

interface BasketAddProps {
  data: Product;
}

const BasketAdd: React.FC<BasketAddProps> = ({ data }) => {
  const handleAddToBasket = () => {
    basketService.add(data);
    toast.success("Добавлено в корзину");
  };

  return (
    <button
      onClick={handleAddToBasket}
      className="flex cursor-pointer items-center gap-1 hover:gap-2 transition-all duration-300"
    >
      <span className=" font-[500]">В корзину</span>
      <ArrowRight size={16} />
    </button>
  );
};

export { BasketAdd };
