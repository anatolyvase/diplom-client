import { api } from "./axios";

export interface User {
  id: string,
  email: string,
  firstName: string,
  lastName: string,
}

class UserService {
  async getMe() {
    // implement
  }
}

export const userService = new UserService();