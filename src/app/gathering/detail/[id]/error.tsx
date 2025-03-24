"use client";

import { useRouter } from "next/navigation";
import { IoWarningOutline } from "react-icons/io5";

import { Button } from "@/components/ui/Button";
import { APIError } from "@/types/error";

export default function GatheringDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const isAPIError = error instanceof APIError;

  const getErrorMessage = () => {
    if (!isAPIError) return error.message;
    switch (error.status) {
      case 404:
      case 400:
        return error.message;
      case 500:
        return "서버 오류가 발생했습니다.";
      default:
        return "일시적인 오류가 발생했습니다.";
    }
  };

  const getErrorAction = () => {
    if (!isAPIError) return { label: "다시 시도", action: reset };
    switch (error.status) {
      case 404:
      case 400:
        return {
          label: "목록으로 돌아가기",
          action: () => {
            router.push("/gathering");
          },
        };
      default:
        return { label: "다시 시도", action: reset };
    }
  };

  const errorAction = getErrorAction();

  return (
    <div className="flex min-h-[calc(100vh_-_60px)] w-full flex-col items-center justify-center gap-10">
      {isAPIError ? (
        <p className="text-6xl font-bold">{error.status}</p>
      ) : (
        <IoWarningOutline className="text-9xl font-bold text-purple-600" />
      )}
      <h2 className="text-2xl font-bold">{getErrorMessage()}</h2>
      <Button variant="purple" onClick={errorAction.action}>
        {errorAction.label}
      </Button>
    </div>
  );
}
