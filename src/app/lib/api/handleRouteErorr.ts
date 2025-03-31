import { NextResponse } from "next/server";

import { APIError } from "@/types/error";

export const handleRouteError = (error: unknown) => {
  if (error instanceof APIError) {
    return NextResponse.json(
      {
        code: error.code,
        message: error.message,
      },
      { status: error.status },
    );
  }

  return NextResponse.json(
    {
      code: "UNKNOWN_ERROR",
      message: "서버 오류가 발생했습니다.",
    },
    { status: 500 },
  );
};
