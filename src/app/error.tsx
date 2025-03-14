"use client";

import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[calc(100vh_-_60px)] w-full flex-col items-center justify-center gap-10">
      <h2 className="text-2xl font-bold">예상치 못한 오류가 발생했습니다.</h2>
      <p className="text-gray-500">{error.message}</p>
      <Button variant="purple" onClick={reset}>
        다시 시도
      </Button>
    </div>
  );
}
