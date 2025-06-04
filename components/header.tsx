"use client";
import { ThemeToggle } from "@/components/theme-toggle";
import { userService } from "@/services/user-service";
import { getAccessToken, removeFromStorage } from "@/utils";
import { ShoppingBasket, Store } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function Header() {
  const router = useRouter();
  const [isScroll, setIsScroll] = useState(false);
  const [isAuth, setAuth] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.scrollingElement?.scrollTop || 0;
      setIsScroll(scrollTop !== 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      console.log(accessToken);
      setAuth(false);
      return;
    }

    userService
      .getMe()
      .then(() => {
        setAuth(true);
      })
      .catch(() => {
        setAuth(false);
      });
  }, []);

  const logout = () => {
    removeFromStorage();
    setAuth(false);
    router.refresh();
    toast.success("Вы успешно вышли из аккаунта");
  };

  return (
    <header
      className={`fixed flex justify-center top-0 w-full h-14 z-[1000] ${isScroll ? "bg-[var(--body-color)] dark:bg-[#0a0a0a]" : "bg-transparent"}  transition-all duration-300`}
    >
      <nav className="flex justify-between items-center px-[4rem] w-full container">
        <Link href="/#home" className="flex items-center justify-center gap-1">
          <span>Dripchik</span>
          <img src="/favicon.png" className="size-[16px]" />
        </Link>

        <div className="hidden md:block" id="nav-menu ">
          <ul className="flex gap-4">
            <li className="nav__item">
              <Link href="/#home" className="nav__link active-link">
                <span>Главная</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/#new" className="nav__link">
                <span>Новинки</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/#collection" className="nav__link">
                <span>Коллекция</span>
              </Link>
            </li>

            <li className="nav__Reg">
              {isAuth ? (
                <div>
                  <Link
                    href="/orders"
                    style={{
                      marginRight: "1rem",
                    }}
                  >
                    Мои заказы
                  </Link>
                  <button className="cursor-pointer" onClick={logout}>
                    Выйти
                  </button>
                </div>
              ) : (
                <Link href="/sign-in" className="nav__link">
                  <span className="auth-button">Авторизация</span>
                </Link>
              )}
            </li>
          </ul>
        </div>

        <div className="flex gap-4 items-center">
          <Link href="/basket">
            <ShoppingBasket />
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
