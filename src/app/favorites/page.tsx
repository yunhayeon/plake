import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import FetchBoundary from "@/components/boundary/FetchBoundary";
import MainCardListSkeleton from "@/components/skeletons/MainCardListSkeleton";

import FavoriteList from "./_components/FavoriteList";

const Page = () => {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FetchBoundary fallback={<MainCardListSkeleton />}>
        <FavoriteList />
      </FetchBoundary>
    </HydrationBoundary>
  );
};

export default Page;
