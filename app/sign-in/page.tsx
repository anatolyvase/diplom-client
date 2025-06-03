import { SignInForm } from "@/components/sign-in-form";
import Link from "next/link";
import React from "react";

function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f8f9fb] dark:bg-gray-900">
      <section className="relative flex flex-col items-center bg-white dark:bg-gray-800 dar drop-shadow-xl w-[800px] p-[50px] rounded">
        <Link
          className="absolute top-[25px] left-[25px] text-blue-500"
          href="/"
        >
          На главную
        </Link>
        <header className="flex flex-col gap-2 items-center mb-[40px]">
          <h1 className="text-4xl font-bold">Войдите в аккаунт</h1>
          <p>Введите свои учетные данные для доступа к вашему аккаунту</p>
        </header>
        <main className="w-full">
          <SignInForm />
        </main>
        <footer className="mt-[20px]">
          <p>
            Ещё нет аккаунта?{" "}
            <Link className="text-blue-500" href="/sign-up">
              Зарегистрируйтесь
            </Link>
          </p>
        </footer>
      </section>
    </div>
  );
}

export default SignInPage;
