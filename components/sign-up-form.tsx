"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { authService } from "@/services/auth-service";
import { saveTokenStorage } from "@/utils";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { toast } from "sonner";

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    firstName: "",
    lastName: "",
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
    const { repeatPassword, ...data } = formData;

    if (repeatPassword !== data.password) {
      toast.error("Пароли не совпадают");
      return;
    }

    try {
      const response = await authService.signUp(data);
      toast.success("Вы успешно зарегистрировались!");
      saveTokenStorage(response.data.tokens.access_token);
      window.location.pathname = "/";
      window.location.reload();
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
      <div className="flex gap-[14px] w-full">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="firstName">
            Имя <span className="text-red-500">*</span>
          </label>
          <Input
            value={formData.firstName}
            onChange={handleChange}
            id="firstName"
            required
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="lastName">
            Фамилия <span className="text-red-500">*</span>
          </label>
          <Input
            value={formData.lastName}
            onChange={handleChange}
            id="lastName"
            required
            type="lastName"
          />
        </div>
      </div>
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
      <div className="flex flex-col gap-2">
        <label htmlFor="password">
          Повторите пароль <span className="text-red-500">*</span>
        </label>
        <Input
          value={formData.repeatPassword}
          onChange={handleChange}
          id="repeatPassword"
          required
          type="password"
        />
      </div>

      <Button size="lg" type="submit">
        Зарегистрироваться
      </Button>
    </form>
  );
};

export { SignUpForm };
