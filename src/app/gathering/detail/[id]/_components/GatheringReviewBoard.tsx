import GatheringReviewList from "@/components/gathering-detail/GatheringReviewList";
import GatheringReviewSkeleton from "@/components/skeletons/gathering-detail/GatheringReviewSkeleton";

import GatheringReviewBoardWrapper from "./GatheringReviewBoardWrapper";

const GatheringReviewBoard = async () => {
  const fallback = <GatheringReviewSkeleton />;
  return (
    <GatheringReviewBoardWrapper fallback={fallback}>
      <GatheringReviewList />
    </GatheringReviewBoardWrapper>
  );
};

export default GatheringReviewBoard;
