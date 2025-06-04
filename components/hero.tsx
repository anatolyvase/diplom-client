import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="pt-[12rem] pb-[2rem] bg-[var(--bg-color)] dark:bg-gray-900 w-full"
      id="home"
    >
      <div className="flex w-full flex-col md:flex-row justify-center items-center md:items-start gap-4">
        <div className="home__data">
          <h1 className="text-[2rem] lg:text-6xl font-[500] mb-[1rem]">
            Наш магазин
          </h1>
          <p className="text-[var(--text-color)] dark:text-inherit text-[14px]">
            предлагает Вам широкий выбор верхней одежды
            <br />
            от самых популярных брендов со всего мира. Мы
            <br />
            продаем только оригинальные дизайнерские вещи
            <br />
            и Вы точно найдете в них кусочек себя ❤️‍🔥
            <br />
          </p>
          <Link
            href="#collection"
            className="flex items-center gap-1 hover:gap-2 transition-all duration-300"
          >
            <span className="uppercase font-[500]">перейти</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="relative pt-[4rem] flex gap-8">
          <span className="z-10 md:z-0 md:absolute md:-top-[5rem] md:-right-[7rem]">
            <img src="/img/home1.png" alt="home image" width="220px" />
          </span>
          <span className="absolute -top-[1rem] -right-[6rem] md:right-0 md:top-0 md:relative md:z-10 z-0">
            <img src="/img/home3" alt="home image" width="180px" />
          </span>
        </div>
      </div>
    </section>
  );
}
