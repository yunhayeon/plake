"use client";

import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { PropsWithChildren, Suspense } from "react";

import { Button } from "@/components/ui/Button";

interface IErrorComponentProps {
  reset: () => void;
}

const ErrorComponent = ({ reset }: IErrorComponentProps) => {
  return (
    <div className="flex h-full min-h-[80vh] flex-col items-center gap-6 p-10 pb-20">
      <p>에러가 발생했습니다.</p>
      <Button variant="purple" onClick={reset}>
        새로고침
      </Button>
    </div>
  );
};

const GatheringReviewBoardWrapper = ({
  children,
  fallback,
}: PropsWithChildren<{ fallback: React.ReactNode }>) => {
  return (
    <ErrorBoundary errorComponent={({ reset }) => ErrorComponent({ reset })}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default GatheringReviewBoardWrapper;
