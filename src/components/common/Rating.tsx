"use client";

import clsx from "clsx";
import { useMemo } from "react";
import { FaHeart } from "react-icons/fa6";

import { calculateRatingValues, createRatingHandler } from "@/utils/rating";

const HEART_COLOR = {
  filled: "text-purple-600",
  empty: "text-gray-200",
} as const;

interface IRatingProps {
  rating?: number;
  isEditable?: boolean;
  onRatingChange?: (rating: number) => void;
}

const Rating = ({
  rating = 0,
  isEditable = false,
  onRatingChange,
}: IRatingProps) => {
  const ratingValues = useMemo(() => calculateRatingValues(rating), [rating]);

  const handleRatingChange = createRatingHandler({
    onRatingChange: onRatingChange ?? (() => {}),
    isEditable,
  });

  const { fullHearts, decimal, hasPartialHeart, emptyHearts } = ratingValues;

  return (
    <div
      className={clsx(
        "flex items-center gap-2",
        isEditable && "cursor-pointer",
      )}
    >
      {Array.from({ length: fullHearts }).map((_, index) => (
        <div
          key={`full-${index}`}
          onClick={e => handleRatingChange(e, index)}
          className={clsx(isEditable && "cursor-pointer")}
        >
          <FaHeart className={HEART_COLOR.filled} />
        </div>
      ))}

      {hasPartialHeart && (
        <div
          className={clsx("relative", isEditable && "cursor-pointer")}
          onClick={e => handleRatingChange(e, fullHearts)}
        >
          <FaHeart className={HEART_COLOR.empty} />
          <div
            className="absolute left-0 top-0 overflow-hidden"
            style={{ width: `${decimal * 100}%` }}
          >
            <FaHeart className={HEART_COLOR.filled} />
          </div>
        </div>
      )}

      {Array.from({ length: emptyHearts }).map((_, index) => (
        <div
          key={`empty-${index}`}
          onClick={e =>
            handleRatingChange(
              e,
              fullHearts + (hasPartialHeart ? 1 : 0) + index,
            )
          }
          className={clsx(isEditable && "cursor-pointer")}
        >
          <FaHeart className={HEART_COLOR.empty} />
        </div>
      ))}
    </div>
  );
};

export default Rating;
