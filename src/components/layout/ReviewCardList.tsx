import { IReview } from "@/types/review";

import ReviewCardItem from "./ReviewCardItem";

type TReviewCardListProps = {
  reviews?: IReview[];
};

const ReviewCardList = ({ reviews }: TReviewCardListProps) => {
  return (
    <div className="flex flex-col gap-6">
      {reviews?.map(review => (
        <ReviewCardItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewCardList;
