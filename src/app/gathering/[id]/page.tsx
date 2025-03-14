import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import FloatingBar from "@/components/gathering-detail/FloatingBar";
import { prefetchGatheringDetail } from "@/hooks/gathering/useGatheringDetail";
import { prefetchReviewList } from "@/hooks/review/useReviewList";

import GatheringInformation from "./_components/GatheringInformation";
import GatheringReviewBoard from "./_components/GatheringReviewBoard";

export default async function GatheringDetailPage() {
  const id = "2196"; // 임시 params id

  const queryClient = new QueryClient();

  await Promise.all([
    prefetchGatheringDetail(id, queryClient),
    prefetchReviewList(queryClient),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="base-wrap bg-gray-50">
        <article className="flex h-full flex-col gap-8 px-0 pt-5 md:px-20 md:pt-10">
          <GatheringInformation id={id} />
          <GatheringReviewBoard />
        </article>
        <FloatingBar id={id} />
      </div>
    </HydrationBoundary>
  );
}
