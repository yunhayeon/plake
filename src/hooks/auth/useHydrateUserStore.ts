"use client";

import { useEffect, useState } from "react";

import useUserStore from "@/stores/useUserStore";

// 유저스토어 hydration을 추적하는 훅
export const useHydrateUserStore = (): boolean => {
  const [isHydrating, setIsHydrating] = useState(true);
  const { isHydrated, setHydrated } = useUserStore();

  useEffect(() => {
    // 스토어가 아직 hydrate되지 않았으면 hydration 프로세스 시작
    const hydrateStore = async () => {
      if (!isHydrated) {
        try {
          // 로컬 스토리지 접근성 확인
          if (typeof localStorage !== "undefined") {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
              setHydrated(true);
            }
          }
        } catch (error) {
          console.error("스토어 hydration 오류:", error);
        }
      }
      setIsHydrating(false);
    };

    hydrateStore();
  }, [isHydrated, setHydrated]);

  return isHydrating;
};
