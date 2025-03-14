"use client";

import { useReviewList } from "@/hooks/review/useReviewList";
import { IReview } from "@/types/review";

import ReviewCardItem from "./ReviewCardItem";

// <--- 추후 삭제
// 임시 부모 컴포넌트
export const TempParentComponent = () => {
  const { data } = useReviewList();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ReviewCardList reviews={data.pages.flat()} />
    </div>
  );
};
// 추후 삭제 --->

type TReviewCardListProps = {
  reviews: IReview[];
};

const ReviewCardList = ({ reviews }: TReviewCardListProps) => {
  return (
    <div className="flex flex-col gap-6">
      {reviews.map(review => (
        <ReviewCardItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewCardList;
