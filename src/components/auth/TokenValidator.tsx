"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import useLogout from "@/hooks/auth/useLogout";
import useModalStore from "@/stores/useModalStore";
import useUserStore from "@/stores/useUserStore";
import { getCookieOfToken } from "@/utils/cookieToken";

const TokenValidator = () => {
  const router = useRouter();
  const { logout } = useLogout();
  const { openAlert } = useModalStore();
  const { isLoggedIn } = useUserStore();
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // 로그아웃 처리 함수
  const handleLogout = () => {
    // 로그아웃 및 리디렉션
    openAlert("로그인이 필요한 서비스입니다. 로그인 후 이용해주세요.");
    logout();
    router.replace("/login");
  };

  // 토큰 확인 함수
  const checkAuthToken = async () => {
    try {
      // 쿠키 확인
      const token = await getCookieOfToken();

      if (!token) {
        handleLogout();
        return false;
      }

      return true;
    } catch (error) {
      console.error("토큰 확인 중 오류:", error);
      return false;
    }
  };

  // 컴포넌트 마운트 시 즉시 토큰 확인
  useEffect(() => {
    const initialCheck = async () => {
      await checkAuthToken();
    };

    initialCheck();

    // 10분마다 토큰 체크
    checkIntervalRef.current = setInterval(async () => {
      await checkAuthToken();
    }, 600000);

    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
    };
  }, []);

  // 로그인 상태 변경 감지
  useEffect(() => {
    if (!isLoggedIn) {
      const checkToken = async () => {
        await checkAuthToken();
      };
      checkToken();
    }
  }, [isLoggedIn]);

  return null;
};

export default TokenValidator;
