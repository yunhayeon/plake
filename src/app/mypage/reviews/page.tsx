import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";

import MyReviewCardList from "@/app/mypage/_components/my-card-list/MyReviewCardList";
import MyWrittenCardList from "@/app/mypage/_components/my-card-list/MyWrittenCardList";
import ReviewTab from "@/app/mypage/_components/ReviewTab";
import FetchBoundary from "@/components/boundary/FetchBoundary";
import LoadingDots from "@/components/common/LoadingDots";
import ReviewCardItemSkeleton from "@/components/skeletons/ReviewCardItemSkeleton";
import { prefetchCheckUser } from "@/hooks/auth/useCheckUser";
import { prefetchReviewList } from "@/hooks/review/useReviewList";

interface PageProps {
  searchParams: {
    type?: string;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const isRoot = !searchParams.type;
  const queryClient = new QueryClient();

  const { userId } = await prefetchCheckUser(queryClient);

  await prefetchReviewList(queryClient, { userId });

  return (
    <>
      <Suspense>
        <ReviewTab />
      </Suspense>

      {isRoot ? (
        <FetchBoundary fallback={<LoadingDots />}>
          <MyReviewCardList />
        </FetchBoundary>
      ) : (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <FetchBoundary fallback={<ReviewCardItemSkeleton />}>
            <Suspense>
              <MyWrittenCardList userId={userId} />
            </Suspense>
          </FetchBoundary>
        </HydrationBoundary>
      )}
    </>
  );
};

export default Page;
