"use client";

import { useEffect, useRef } from "react";

import { checkAuthToken } from "@/hooks/auth/useCheckToken";
import useLogout from "@/hooks/auth/useLogout";
import useModalStore from "@/stores/useModalStore";
import useUserStore from "@/stores/useUserStore";

const TokenValidator = () => {
  const { logout } = useLogout();
  const openAlert = useModalStore(state => state.openAlert);
  const isLoggedIn = useUserStore(state => state.isLoggedIn);
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // 로그아웃 처리 함수
  const handleLogout = () => {
    openAlert("로그인 유지시간이 만료됐습니다. 다시 로그인해주세요.");
    logout();
  };

  // 로그인 된 상태라면 10분마다 토큰 체크
  useEffect(() => {
    if (isLoggedIn) {
      checkIntervalRef.current = setInterval(async () => {
        await checkAuthToken(handleLogout);
      }, 600000);
    }
    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return null;
};

export default TokenValidator;
