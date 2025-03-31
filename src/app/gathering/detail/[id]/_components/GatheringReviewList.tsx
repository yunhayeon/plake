import { IReview } from "@/types/review";

import GatheringReviewItem from "./GatheringReviewItem";

interface IGatheringReviewListProps {
  reviews: IReview[];
}

const GatheringReviewList = ({ reviews }: IGatheringReviewListProps) => {
  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex h-full flex-col gap-6">
        <p className="text-lg font-semibold">
          {"이용자들은 이 프로그램을 이렇게 느꼈어요!"}
        </p>
        {reviews.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-center text-sm text-gray-500">
              {"아직 리뷰가 없어요."}
            </p>
          </div>
        ) : (
          <>
            {reviews.map(review => (
              <GatheringReviewItem key={review.id} review={review} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default GatheringReviewList;
