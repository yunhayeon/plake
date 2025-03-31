import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { notFound } from "next/navigation";

import FetchBoundary from "@/components/boundary/FetchBoundary";
import MainCardList from "@/components/layout/MainCardList";
import MainCardListSkeleton from "@/components/skeletons/MainCardListSkeleton";
// import { prefetchGateringInfiniteList } from "@/hooks/gathering/useGatheringInfiniteList";
import { MainTab, MainTabSchema } from "@/types/gathering/main-tab";

type PageProps = {
  params: Promise<{
    tab: MainTab;
  }>;
};

const Page = async ({ params }: PageProps) => {
  const { tab } = await params;

  const queryClient = new QueryClient();

  try {
    MainTabSchema.parse(tab);
  } catch {
    notFound();
  }

  //수정 예정
  //await prefetchGateringInfiniteList(queryClient, tab);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FetchBoundary fallback={<MainCardListSkeleton />}>
        <MainCardList tab={tab} />
      </FetchBoundary>
    </HydrationBoundary>
  );
};

export default Page;
