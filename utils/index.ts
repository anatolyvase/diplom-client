import { Product } from "@/services/product-service";
import Cookies from "js-cookie";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const domain = "localhost";

export const getAccessToken = () => {
  const accessToken = Cookies.get("access_token");
  return accessToken || null;
};

export const saveTokenStorage = (token: string) => {
  Cookies.set("access_token", token, {
    domain: process.env.NEXT_PUBLIC_DOMAIN ?? domain,
    sameSite: "strict",
    expires: 1,
  });
};

export const removeFromStorage = () => {
  Cookies.remove("access_token", {
    domain: process.env.NEXT_PUBLIC_DOMAIN ?? domain,
    sameSite: "strict",
  });
};
