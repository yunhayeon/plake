import ApiClient from "@/app/lib/api/ApiClient";
import { getCookieOfToken } from "@/utils/cookieToken";

export const getAuthorizedClient = async () => {
  const token = await getCookieOfToken();
  return new ApiClient(token);
};
