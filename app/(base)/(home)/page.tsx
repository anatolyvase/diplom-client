import FemaleCollection from "@/app/(base)/(home)/ui/female-collection'";
import MaleCollection from "@/app/(base)/(home)/ui/male-collection";
import NewestCollection from "@/app/(base)/(home)/ui/newest-collection";
import { Brands } from "@/components/brands";
import { CollectionExplore } from "@/components/collection-explore";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

export default async function Home() {
  return (
    <div className="relative  flex flex-col font-[family-name:var(--font-geist-sans)]">
      <main className="main">
        <Hero />

        <CollectionExplore />
        <MaleCollection />
        <FemaleCollection />
        <NewestCollection />

        {/*<div id="contactModal" className="my-[2rem]">*/}
        {/*  <div className="border border-[#888] max-w-[600px] rounded m-auto p-4 relative shadow-[0_4px_8px_rgba(0,0,0,0.2)]">*/}
        {/*    <h2 className="text-center text-[1.5rem]">Связаться с нами</h2>*/}
        {/*    <form id="contactForm" method="POST" action="assets/php/sends.php">*/}
        {/*      <div className="mb-4">*/}
        {/*        <label htmlFor="name" className="block mb-1">*/}
        {/*          Ваше имя:*/}
        {/*        </label>*/}
        {/*        <input*/}
        {/*          type="text"*/}
        {/*          id="name"*/}
        {/*          name="name"*/}
        {/*          required*/}
        {/*          className="w-full rounded border border-[#ddd] p-2 text-[.9rem]"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*      <div className="mb-4">*/}
        {/*        <label htmlFor="email" className="block mb-1">*/}
        {/*          Ваш email:*/}
        {/*        </label>*/}
        {/*        <input*/}
        {/*          type="email"*/}
        {/*          id="email"*/}
        {/*          name="email"*/}
        {/*          required*/}
        {/*          className="w-full rounded border border-[#ddd] p-2 text-[.9rem]"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*      <div className="mb-4">*/}
        {/*        <label htmlFor="mass" className="block mb-1">*/}
        {/*          Сообщение:*/}
        {/*        </label>*/}
        {/*        <textarea*/}
        {/*          id="mass"*/}
        {/*          name="mass"*/}
        {/*          rows={4}*/}
        {/*          required*/}
        {/*          className="w-full rounded border border-[#ddd] p-2 text-[.9rem]"*/}
        {/*        ></textarea>*/}
        {/*      </div>*/}
        {/*      <button*/}
        {/*        type="submit"*/}
        {/*        name="submit"*/}
        {/*        className="w-full p-[1rem] text-white text-[18px] cursor-pointer bg-[#000] rounded font-[600]"*/}
        {/*      >*/}
        {/*        Отправить*/}
        {/*      </button>*/}
        {/*    </form>*/}
        {/*    <div id="messageResult"></div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <Brands />
      </main>
      <Footer />
    </div>
  );
}
