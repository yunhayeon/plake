import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import MyCreateCardList from "@/app/mypage/_components/my-card-list/MyCreateCardList";
import FetchBoundary from "@/components/boundary/FetchBoundary";
import LoadingDots from "@/components/common/LoadingDots";
import { prefetchCheckUser } from "@/hooks/auth/useCheckUser";
import { prefetchGateringInfiniteList } from "@/hooks/gathering/useGatheringInfiniteList";

const Page = async () => {
  const queryClient = new QueryClient();

  const { userId } = await prefetchCheckUser(queryClient);

  await prefetchGateringInfiniteList(queryClient, "all", {
    createdBy: userId,
    sortOrder: "desc",
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FetchBoundary fallback={<LoadingDots />}>
        <MyCreateCardList userId={userId} />
      </FetchBoundary>
    </HydrationBoundary>
  );
};

export default Page;
