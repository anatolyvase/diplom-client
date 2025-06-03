import { getAccessToken, removeFromStorage, saveTokenStorage } from "@/utils";
import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: "https://anatolyvase-diplom-api-60e5.twc1.net",
  withCredentials: true,
});

export const protectedApi = axios.create({
  baseURL: "https://anatolyvase-diplom-api-60e5.twc1.net",
  withCredentials: true,
});

protectedApi.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

protectedApi.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      error?.response?.status === 401 ||
      errorCatch(error) === "jwt expired" ||
      (errorCatch(error) === "jwt must be provided" &&
        error.config &&
        !error.config._isRetry)
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await api.get("/auth/refresh");
        if (response.data.access_token) {
          saveTokenStorage(response.data.access_token);
        }

        return protectedApi.request(originalRequest);
      } catch (error) {
        if (errorCatch(error as AxiosError<ErrorResponse>) === "jwt expired") {
          removeFromStorage();
        }
      }
    }
    throw error;
  },
);

type ErrorResponse = {
  message: string | string[];
  status: number;
};

export const errorCatch = (error: AxiosError<ErrorResponse>): string => {
  const message = error.response?.data?.message;

  return message
    ? Array.isArray(message)
      ? message[0]
      : message
    : error.message;
};
