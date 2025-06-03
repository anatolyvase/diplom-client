import { BasketAdd } from "@/components/basket-add";
import { Product } from "@/services/product-service";

export function ProductCard(data: Product) {
  return (
    <article className="flex flex-col items-center max-w-[270px]">
      <img src={data.imageUrl} alt="new image" className="mb-[1rem]" />
      <div className="w-full">
        <div className="new__data">
          <h2 className="text-[1.3rem] font-[500] mb-[.5rem] truncate">
            {data.title}
          </h2>
          <div className=" leading-[1.3rem]">
            <span className="products__price">
              {data.price.toLocaleString("ru-RU", {
                style: "currency",
                currency: "RUB",
              })}
            </span>

            <div className="mb-[.3rem]">
              <span className="products__collection">
                {data.collection.title}
              </span>
            </div>

            <BasketAdd data={data} />
          </div>
        </div>
      </div>
    </article>
  );
}
