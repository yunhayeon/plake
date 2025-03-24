"use client";

import { Suspense } from "react";

import ReviewContent from "@/app/mypage/_components/ReviewContent";
import ReviewTab from "@/app/mypage/_components/ReviewTab";

const Page = () => {
  return (
    <>
      <Suspense>
        <ReviewTab />
      </Suspense>

      <Suspense>
        <ReviewContent />
      </Suspense>
    </>
  );
};

export default Page;
