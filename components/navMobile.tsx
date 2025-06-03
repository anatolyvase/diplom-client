import { Book, Compass, House, Radiation } from "lucide-react";

export const NavMobile = () => {
  return(
    <div className="sticky bottom-0 right-0 left-0 bg-white/90 py-[1rem] opacity-100 md:opacity-0 pointer-events-auto sm:pointer-events-none transition-all duration-300">
      <ul className="flex gap-6 justify-center">
        <li className="nav__item">
          <a
            href="#home"
            className="flex flex-col justify-center items-center text-gray-900 hover:text-gray-600 "
          >
            <House />
            <span className="text-[14px]">Главная</span>
          </a>
        </li>

        <li className="nav__item">
          <a
            href="#new"
            className="flex flex-col justify-center items-center text-gray-900 hover:text-gray-600"
          >
            <Radiation />
            <span className="text-[14px]">Новинки</span>
          </a>
        </li>

        <li className="nav__item">
          <a
            href="#collection"
            className="flex flex-col justify-center items-center text-gray-900 hover:text-gray-600"
          >
            <Compass />
            <span className="text-[14px]">Коллекция</span>
          </a>
        </li>

        <li className="nav__Reg">
          <a
            href="#products"
            className="flex flex-col justify-center items-center text-gray-900 hover:text-gray-600"
          >
            <Book />
            <span className="text-[14px]">Авторизация</span>
          </a>
        </li>
      </ul>
    </div>
  )
}