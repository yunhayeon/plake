import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { notFound } from "next/navigation";

import FetchBoundary from "@/components/boundary/FetchBoundary";
import MainCardList from "@/components/layout/MainCardList";
import MainCardListSkeleton from "@/components/skeletons/MainCardListSkeleton";
import { prefetchGateringList } from "@/hooks/gathering/useGatheringList";
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

  await prefetchGateringList(queryClient, tab);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FetchBoundary fallback={<MainCardListSkeleton />}>
        <MainCardList />
      </FetchBoundary>
    </HydrationBoundary>
  );
};

export default Page;
