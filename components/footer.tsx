import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-[7rem] mb-[1rem]">
      <div className="grid grid-cols-[repeat(2,max-content)] justify-between mx-[3rem]">
        <div>
          <a href="#" className="mb-[.75rem] text-[var(--title-color)]" style={{ fontSize: "var(--h2-font-size)" }}>
            Dripchik
          </a>
          <p className="text-[var(--text-color)]" style={{ fontSize: "var(--normal-font-size)" }}>
            Мы стремимся предложить вам
            <br />
            лучшую одежду от популярных брендов.
            <br />
          </p>
        </div>
        <div className="grid grid-cols-[repeat(4,max-content)] gap-[5.5rem]">
          <div>
            <h3 className="footer__title" >Компания</h3>
            <ul>
              <li>
                <a href="#home" className="text-[var(--text-color)]" style={{ fontSize: "var(--normal-font-size)" }}>
                  Магазин
                </a>
              </li>
              <li>
                <a href="#collection" className="text-[var(--text-color)]" style={{ fontSize: "var(--normal-font-size)" }}>
                  Категории
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Блог</h3>

            <ul>
              <li>
                <a href="#new" className="text-[var(--text-color)]" style={{ fontSize: "var(--normal-font-size)" }}>
                  События
                </a>
              </li>
              <li>
                <a href="#new" className="text-[var(--text-color)]" style={{ fontSize: "var(--normal-font-size)" }}>
                  Новости
                </a>
              </li>
              <li>
                <a href="#new" className="text-[var(--text-color)] " style={{ fontSize: "var(--normal-font-size)" }}>
                  Последние новости
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer__title">Контакты</h3>


            <div className="flex gap-4 justify-center">

            <Link
              href="https://www.youtube.com/@goblinglambeats"
              target="_blank"
              className="flex items-center justify-center p-[.4rem] min-w-[30px] max-w-[30px] bg-[var(--container-color)] text-black text-[1.25rem] rounded "
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="16px" width="16px" version="1.1" id="Layer_1" viewBox="0 0 310 310">
<g id="XMLID_822_">
	<path id="XMLID_823_" d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938   C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527   C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991   c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764   c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861   C204.394,157.263,202.325,160.684,199.021,162.41z"/>
</g>
</svg>
            </Link>
            <Link
              href="https://t.me/GoblinGlam"
              target="_blank"
              className="flex items-center justify-center p-[.4rem] min-w-[30px] max-w-[30px] bg-[var(--container-color)] text-black text-[1.25rem] rounded "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                <path d="M12 4C10.4178 4 8.87103 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.93 9.48L14.62 15.67C14.52 16.11 14.26 16.21 13.89 16.01L11.89 14.53L10.89 15.46C10.8429 15.5215 10.7824 15.5715 10.7131 15.6062C10.6438 15.6408 10.5675 15.6592 10.49 15.66L10.63 13.66L14.33 10.31C14.5 10.17 14.33 10.09 14.09 10.23L9.55 13.08L7.55 12.46C7.12 12.33 7.11 12.03 7.64 11.83L15.35 8.83C15.73 8.72 16.05 8.94 15.93 9.48Z" fill="#000000"/>
              </svg>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
