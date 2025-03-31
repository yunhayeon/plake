import { TJoinForm } from "@/app/join/_components/JoinForm";
import { TLoginForm } from "@/app/login/_components/LoginForm";

import Service from "../Service";

class AnonAuthService extends Service {
  login(formData: TLoginForm) {
    const data = this.http.post("/auths/signin", formData);
    return data;
  }

  join(formData: TJoinForm) {
    const data = this.http.post("/auths/signup", formData);
    return data;
  }
}

const anonAuthService = new AnonAuthService();

export default anonAuthService;
