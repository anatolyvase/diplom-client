import { ProductCard } from "@/components/product-card";
import { Product } from '@/services/product-service'

interface CollectionProps {
  id: string;
  title: string;
  items: Product[];
}

export function Collection({ items, title, id }: CollectionProps) {
  return (
    <section className="pt-[5rem] pb-[1rem]" id={id}>
      <h2 className="text-center text-[1.5rem] font-[500] mb-[4rem]">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-[5rem]">
        {items.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}
