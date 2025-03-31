import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;

  // 토큰 없으면 401 응답
  if (!token) {
    return NextResponse.json(
      { code: "UNAUTHORIZED", message: "인증이 필요합니다." },
      { status: 401 },
    );
  }

  return NextResponse.next();
}

// 인증이 필요한 API 경로에만 동작하도록 설정
export const config = {
  matcher: ["/api/:path*"],
};
