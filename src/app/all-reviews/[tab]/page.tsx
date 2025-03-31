import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";

import FetchBoundary from "@/components/boundary/FetchBoundary";
import ReviewCardItemSkeleton from "@/components/skeletons/ReviewCardItemSkeleton";
import ReviewRatingSkeleton from "@/components/skeletons/ReviewRatingSkeleton";
import { prefetchReviewList } from "@/hooks/review/useReviewList";
import { prefetchReviewScore } from "@/hooks/review/useReviewScore";

import ReviewFilterSort from "./_components/ReviewFilterSort";
import ReviewListParent from "./_components/ReviewListParent";
import ReviewRating from "./_components/ReviewRating";

const Page = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    prefetchReviewList(queryClient),
    prefetchReviewScore(queryClient),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FetchBoundary fallback={<ReviewRatingSkeleton />}>
        <ReviewRating />
      </FetchBoundary>
      <section className="border-t-2 border-gray-200 bg-white p-6 px-4 md:px-6">
        <Suspense>
          <ReviewFilterSort />
        </Suspense>
        <FetchBoundary fallback={<ReviewCardItemSkeleton />}>
          <Suspense>
            <ReviewListParent />
          </Suspense>
        </FetchBoundary>
      </section>
    </HydrationBoundary>
  );
};

export default Page;
