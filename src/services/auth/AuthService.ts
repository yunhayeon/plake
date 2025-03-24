import { TJoinForm } from "@/app/join/_components/JoinForm";
import { TLoginForm } from "@/app/login/_components/LoginForm";
import { IUpdateUser } from "@/types/user";
import { getCookieOfToken } from "@/utils/cookieToken";

import Service from "../Service";

class AuthService extends Service {
  constructor(token?: string) {
    super();
    this.setToken(token || "");
  }

  login(formData: TLoginForm) {
    const data = this.http.post("/auths/signin", formData);
    return data;
  }

  join(formData: TJoinForm) {
    const data = this.http.post("/auths/signup", formData);
    return data;
  }

  getUser() {
    const data = this.http.get("/auths/user");
    return data;
  }

  updateUser(formData: FormData) {
    const data = this.http.put<IUpdateUser>("/auths/user", formData);
    return data;
  }
}

export async function createAuthService() {
  const token = await getCookieOfToken();
  return new AuthService(token);
}

/*
사용 예시
import { createAuthService } from "@/services/auth/AuthService";

const authService = await createAuthService();
const user = await authService.login(userData);
*/
