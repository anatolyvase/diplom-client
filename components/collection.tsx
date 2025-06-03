import { ProductCard } from "@/components/product-card";
import { Product } from "@/services/product-service";

interface CollectionProps {
  id: string;
  title: string;
  items: Product[];
  isLoading: boolean;
}

export function Collection({ items, title, id, isLoading }: CollectionProps) {
  return (
    <section
      className="pt-[5rem] pb-[1rem] w-full flex justify-center flex-col items-center"
      id={id}
    >
      <h2 className="text-center text-[1.5rem] font-[500] mb-[4rem]">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-[5rem] justify-items-center container">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : items.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
      </div>
    </section>
  );
}

const ProductSkeleton = () => {
  return <div className="w-full bg-gray-200 h-[300px]"></div>;
};
