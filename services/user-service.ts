import { api, protectedApi } from "./axios";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

class UserService {
  async getMe() {
    return protectedApi.get<User>("/users/me");
  }
}

export const userService = new UserService();
