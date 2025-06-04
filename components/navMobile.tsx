import { Book, Compass, House, HousePlus, User } from "lucide-react";
import Link from "next/link";

export const NavMobile = () => {
  return (
    <div className="sticky bottom-0 right-0 left-0 bg-white/90 py-[1rem] z-[200] opacity-100 md:opacity-0 pointer-events-auto sm:pointer-events-none transition-all duration-300">
      <ul className="flex gap-6 justify-center">
        <li className="nav__item">
          <Link
            href="/#home"
            className="flex flex-col justify-center items-center text-gray-900 hover:text-gray-600 "
          >
            <House />
            <span className="text-[14px]">Главная</span>
          </Link>
        </li>

        <li className="nav__item">
          <Link
            href="/#new"
            className="flex flex-col justify-center items-center text-gray-900 hover:text-gray-600"
          >
            <HousePlus />
            <span className="text-[14px]">Новинки</span>
          </Link>
        </li>

        <li className="nav__item">
          <Link
            href="/#collection"
            className="flex flex-col justify-center items-center text-gray-900 hover:text-gray-600"
          >
            <Compass />
            <span className="text-[14px]">Коллекция</span>
          </Link>
        </li>

        <li className="nav__Reg">
          <Link
            href="/sign-in"
            className="flex flex-col justify-center items-center text-gray-900 hover:text-gray-600"
          >
            <User />
            <span className="text-[14px]">Авторизация</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
