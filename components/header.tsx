"use client";
import { userService } from "@/services/user-service";
import { getAccessToken, removeFromStorage } from "@/utils";
import Cookies from "js-cookie";
import { Moon, Store, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isAuth, setAuth] = useState(false);
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }

    const handleScroll = () => {
      const scrollTop = document.scrollingElement?.scrollTop || 0;
      setIsScroll(scrollTop !== 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function onChangeTheme() {
    const currentTheme = localStorage.getItem("theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

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
    toast.success("Вы успешно вышли из аккаунта");
  };

  return (
    <header
      className={`fixed flex justify-center top-0 w-full h-14 z-[1000] ${isScroll ? "bg-[var(--body-color)]" : "bg-transparent"}  transition-all duration-300`}
    >
      <nav className="flex justify-between items-center mx-[4rem] w-full">
        <a href="#home" className="flex items-center justify-center gap-1">
          <span>Dripchik</span>
          <Store size="16px" />
        </a>


        <div className="hidden sm:block" id="nav-menu ">
          <ul className="flex gap-4">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <span>Главная</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#new" className="nav__link">
                <span>Новинки</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#collection" className="nav__link">
                <span>Коллекция</span>
              </a>
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


        <div>
          <span>
            <button onClick={onChangeTheme} className="cursor-pointer">
              {theme === "light" ? <Sun size="16px" /> : <Moon size="16px" />}
            </button>
          </span>
        </div>
      </nav>
    </header>
  );
}
