import { ArrowRight } from "lucide-react";
import { Product } from '@/services/product-service'
import Image from "next/image";
import Link from "next/link";

export function ProductCard({
  title,
  collection,
  price,
  imageUrl,
}: Product) {
  return (
    <article className="flex flex-col items-center max-w-[270px] m-auto">
      <img
        src={imageUrl}
        alt="new image"
        className="mb-[1rem]"
      />
      <div className="w-full">
        <div className="new__data">
          <h2 className="text-[1.3rem] font-[500] mb-[.5rem] truncate">{title}</h2>
          <div className=" leading-[1.3rem]">
            <span className="products__price">
              {price.toLocaleString("ru-RU", {
                style: "currency",
                currency: "RUB",
              })}
            </span>

            <div className="mb-[.3rem]">
              <span className="products__collection">{collection.title}</span>
            </div>


            <Link href="#new" className="flex items-center gap-1 hover:gap-2 transition-all duration-300">
            <span className=" font-[500]">
              Заказать
            </span>
              <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
