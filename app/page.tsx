import { Brands } from "@/components/brands";
import { Collection } from "@/components/collection";
import { CollectionExplore } from "@/components/collection-explore";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { collectionService } from "@/services";

export default async function Home() {
  const mans = await collectionService.getMale()
  const females = await collectionService.getFemale()
  const newest = await collectionService.getNewest()

  return (
    <div className="relative  flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="main">
        <Hero />

        <CollectionExplore />
        <Collection
          id="man_collection"
          title='Мужская коллекция'
          items={mans.data}
        />
        <Collection
          id="women_collection"
          title="Женская коллекция"
          items={females.data}
        />
        <Collection id="new" title="Новинки" items={newest.data} />


        <div className="flex justify-center mt-6">
        <button id="orderBtn" className=" w-[20rem] p-[1rem] text-white text-[18px] cursor-pointer bg-[#000] rounded font-[600]">
          Оформить заказ
        </button>
        </div>
        <div id="contactModal" className="my-[2rem]">
          <div className="border border-[#888] max-w-[600px] rounded m-auto p-4 relative shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
            <h2 className="text-center text-[1.5rem]">Связаться с нами</h2>
            <form id="contactForm" method="POST" action="assets/php/sends.php">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1">Ваше имя:</label>
                <input type="text" id="name" name="name" required className="w-full rounded border border-[#ddd] p-2 text-[.9rem]"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Ваш email:</label>
                <input type="email" id="email" name="email" required className="w-full rounded border border-[#ddd] p-2 text-[.9rem]"/>
              </div>
              <div className="mb-4">
                <label htmlFor="mass" className="block mb-1">Сообщение:</label>
                <textarea id="mass" name="mass" rows={4} required className="w-full rounded border border-[#ddd] p-2 text-[.9rem]"></textarea>
              </div>
              <button type="submit" name="submit" className="w-full p-[1rem] text-white text-[18px] cursor-pointer bg-[#000] rounded font-[600]">
                Отправить
              </button>
            </form>
            <div id="messageResult"></div>
          </div>
        </div>
        <Brands />
      </main>
      <Footer />
    </div>
  );
}

