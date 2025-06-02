import { User } from "@/services/user-service";
import { api } from "./axios";

interface SignUpData {
  email: string,
  firstName: string,
  lastName: string,
  password: string
}

interface Response {
  user: User,
  tokens: {
    access_token: string,
    refresh_token: string,
  }
}

class AuthService {
  async signIn(email: string, password: string) {
    return api.post<Response>('/auth/sign-in', {
      email, password
    })
  }
  async signUp(data: SignUpData) {
    return api.post<Response>('/auth/sign-up', data)
  }
}

export const authService = new AuthService();