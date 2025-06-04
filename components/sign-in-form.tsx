"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { authService } from "@/services/auth-service";
import { saveTokenStorage } from "@/utils";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { toast } from "sonner";

const SignInForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await authService.signIn(
        formData.email,
        formData.password,
      );
      toast.success("Вы успешно вошли в аккаунт!");
      console.log(data.tokens);
      saveTokenStorage(data.tokens.access_token);
      router.refresh();
    } catch (e) {
      if (e instanceof AxiosError && e.status === 401) {
        toast.error("Неверно введена почта или пароль");
        return;
      }

      toast.error("Произошла непредвиденная ошибка");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3 lg:gap-[25px] w-full"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </label>
        <Input
          value={formData.email}
          onChange={handleChange}
          id="email"
          required
          type="email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">
          Пароль <span className="text-red-500">*</span>
        </label>
        <Input
          value={formData.password}
          onChange={handleChange}
          id="password"
          required
          type="password"
        />
      </div>
      <div className="flex gap-2 items-center w-full">
        <input
          checked={formData.remember}
          onChange={handleChange}
          id="remember"
          type="checkbox"
        />
        <label htmlFor="remember">Запомнить меня</label>
      </div>
      <Button size="lg" type="submit">
        Войти
      </Button>
    </form>
  );
};

export { SignInForm };
