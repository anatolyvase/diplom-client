import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CollectionExplore() {
  return (
    <section
      className="bg-[var(--bg-color-light)] dark:bg-gray-800 pt-[7rem] pb-[2rem]"
      id="collection"
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col lg:flex-row gap-8 m-auto md:mr-0 md:mt-0 md:ml-[5rem] md:-mb-[8rem]">
          <div className="mt-[2.5rem]">
            <h2 className="text-[1.3rem] font-[500] leading-[1.8rem] mb-[.8rem]">
              Мужская <br /> Коллекция
            </h2>
            <Link
              href="/#man_collection"
              className="flex items-center gap-1 hover:gap-2 transition-all duration-300"
            >
              <span className="font-[500] text-[.9rem]">Посмотреть одежду</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <img
            src="/img/collection1.png"
            className="w-[230px] h-[332px]"
            alt="collections"
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-row mt-8 lg:mt-0 gap-0 lg:gap-8 m-auto md:ml-0 md:mt-0 md:mb-0 md:mr-[5rem]">
          <img
            className="w-[230px] h-[332px]"
            src="/img/collection2.png"
            alt="collections"
          />
          <div className="mb-[2.5rem] self-end">
            <h2 className="text-[1.3rem] font-[500] leading-[1.8rem] mb-[.8rem]">
              Женская <br /> Коллекция
            </h2>
            <Link
              href="/#women_collection"
              className="flex items-center gap-1 hover:gap-2 transition-all duration-300"
            >
              <span className="font-[500] text-[.9rem]">Посмотреть одежду</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
