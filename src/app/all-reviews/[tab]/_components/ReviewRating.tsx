"use client";

import { useMemo } from "react";

import Rating from "@/components/common/Rating";
import { useSuspenseReviewScore } from "@/hooks/review/useReviewScore";

const ReviewRating = () => {
  const { data } = useSuspenseReviewScore();

  const averageScore = data[0].averageScore;
  const ratings = Object.values(data[0]).slice(1, 6).reverse();

  const totalRatings = useMemo(
    () => ratings.reduce((acc, value) => acc + value, 0),
    [ratings],
  );

  const ratingPercentage = useMemo(
    () => ratings.map(rating => (rating / totalRatings) * 100),
    [ratings, totalRatings],
  );

  return (
    <section className="mb-6 flex flex-wrap items-center justify-between border-b-2 border-t-2 border-gray-200 bg-white px-6 py-8">
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        <h1 className="text-xl font-semibold text-gray-400 md:text-2xl">
          <span className="text-gray-900">{averageScore}</span> / 5
        </h1>
        <Rating rating={averageScore} />
      </div>
      <div className="mt-4 flex flex-1 flex-col gap-2 md:mt-0">
        {ratings.map((rating, idx) => (
          <div key={`rating-${idx}`} className="flex items-center gap-2">
            <span className="w-[21px] break-keep text-sm text-gray-700">
              {5 - idx}점
            </span>
            <div className="mx-3 h-1 w-full min-w-36 max-w-60 rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-gray-900"
                style={{ width: ratingPercentage[idx] + "%" }}
              ></div>
            </div>
            <span className="break-keep text-sm text-gray-400">{rating}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ReviewRating;
