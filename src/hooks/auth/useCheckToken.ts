import { getCookieOfToken } from "@/utils/cookieToken";

export const checkAuthToken = async (callback: () => void) => {
  try {
    // 쿠키 토큰 확인
    const token = await getCookieOfToken();

    // 토큰이 없다면 콜백 실행
    if (!token) {
      callback();
      return false;
    }

    return true;
  } catch (error) {
    throw new Error(`토큰 확인 중 오류가 발생했습니다. ${error}`);
  }
};
