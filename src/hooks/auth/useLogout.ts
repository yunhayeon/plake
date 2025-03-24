"use client";

import useUserStore from "@/stores/useUserStore";
import { clearCookieOfToken } from "@/utils/cookieToken";

const useLogout = () => {
  const { clearUserState } = useUserStore();

  const logout = () => {
    // 쿠키 삭제
    clearCookieOfToken();

    // 클라이언트 유저 상태 초기화
    clearUserState();
  };

  return { logout };
};

export default useLogout;
