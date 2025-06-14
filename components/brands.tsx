export function Brands() {
  return (
    <section className="pt-[7rem] pb-[1rem] ">
      <h2 className="mb-[4rem] text-[1.5rem] text-center">
        Бренды которые мы продаем
      </h2>
      <div className="grid grid-cols-[repeat(2,max-content)] sm:grid-cols-[repeat(4,max-content)] gap-x-[2.5rem] sm:gap-x-[1.25rem] max-w-[1024px] justify-center m-auto">
        <img src="/img/logo1.png" alt="brand image" className="size-[120px]" />
        <img
          src="/img/logo2.png"
          alt="brand image"
          className="mt-[2rem] size-[120px]"
        />
        <img src="/img/logo3.png" alt="brand image" className="size-[120px]" />
        <img
          src="/img/logo4.png"
          alt="brand image"
          className="mt-[2rem] size-[120px]"
        />
      </div>
    </section>
  );
}
