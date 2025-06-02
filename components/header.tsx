'use client'
import { Store, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react'
export function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if(currentTheme){
      setTheme(currentTheme)
    }

    const handleScroll = () => {
      const scrollTop = document.scrollingElement?.scrollTop || 0;
      setIsScroll(scrollTop !== 0)
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
    setTheme(newTheme)
  }

  return (
    <header className={`fixed flex justify-center top-0 w-full h-14 z-[1000] ${isScroll? 'bg-[var(--body-color)]' : 'bg-transparent'}  transition-all duration-300`}>
      <nav className="flex justify-between items-center mx-[4rem] w-full">
        <a href="#home" className="flex items-center justify-center gap-1">
          <span>
            Dripchik
          </span>
          <Store size="16px"/>
        </a>
        <div className="nav__menu" id="nav-menu ">
          <ul className="flex gap-4">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="ri-home-smile-2-line"></i>
                <span>Главная</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#new" className="nav__link">
                <i className="ri-price-tag-3-line"></i>
                <span>Новинки</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#collection" className="nav__link">
                <i className="ri-compass-3-line"></i>
                <span>Коллекция</span>
              </a>
            </li>

            <li className="nav__Reg">
              <a href="#products" className="nav__link">
                <i className="ri-shopping-bag-3-line"></i>
                <span className="auth-button">Авторизация</span>
                <span></span>
              </a>
            </li>
          </ul>
        </div>
        <div>
            <span>
              <button onClick={onChangeTheme} className="cursor-pointer">
                {theme === "light" ? (<Sun size='16px' />) : (<Moon size='16px' />)}
              </button>
            </span>
        </div>
      </nav>
    </header>
  );
}
