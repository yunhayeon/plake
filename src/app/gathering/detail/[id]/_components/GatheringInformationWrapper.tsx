"use client";

import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { PropsWithChildren, Suspense } from "react";

import { Button } from "@/components/ui/Button";

interface IErrorComponentProps {
  reset: () => void;
}

const ErrorComponent = ({ reset }: IErrorComponentProps) => {
  return (
    <div className="flex min-h-[270px] w-full flex-col items-center justify-center gap-4">
      <p>에러가 발생했습니다.</p>
      <Button variant="purple" onClick={reset}>
        새로고침
      </Button>
    </div>
  );
};

const GatheringInformationWrapper = ({
  children,
  fallback,
}: PropsWithChildren<{ fallback: React.ReactNode }>) => {
  return (
    <ErrorBoundary
      errorComponent={({ reset }) => <ErrorComponent reset={reset} />}
    >
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default GatheringInformationWrapper;
