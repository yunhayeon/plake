import { Suspense } from "react";

import GatheringReviewList from "@/components/gathering-detail/GatheringReviewList";
import GatheringReviewSkeleton from "@/components/skeletons/gathering-detail/GatheringReviewSkeleton";

const GatheringReviewBoard = async () => {
  return (
    <Suspense fallback={<GatheringReviewSkeleton />}>
      <GatheringReviewList />
    </Suspense>
  );
};

export default GatheringReviewBoard;
