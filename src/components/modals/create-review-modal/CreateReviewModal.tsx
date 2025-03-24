"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Rating from "@/components/common/Rating";
import Modal from "@/components/modals/Modal";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { ReviewSchema } from "@/schemas/reviewSchema";

type TReviewForm = z.infer<typeof ReviewSchema>;

const labelTitleStyle = "mb-3 block text-base font-semibold text-gray-800";
const ErrorMsgStyle = "mt-2 text-sm font-semibold text-red-600";

const CreateReviewModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    watch,
  } = useForm<TReviewForm>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: {
      rating: 0,
      review: "",
    },
  });

  const handleRatingChange = (newRating: number) => {
    setValue("rating", newRating);
    trigger("rating");
  };

  const onSubmit = (data: TReviewForm) => {
    // TODO: 프로필 업데이터 API 호출
    console.log("리뷰 제출:", data);
  };

  return (
    <Modal isOpen={false} onClose={() => {}} title="리뷰 쓰기">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-1 flex flex-col gap-6"
      >
        <div>
          <Label className={labelTitleStyle}>만족스러운 경험이었나요?</Label>
          <Rating
            rating={watch("rating")}
            isEditable={true}
            onRatingChange={handleRatingChange}
          />
          {errors.rating && (
            <p className={ErrorMsgStyle}>{errors.rating.message}</p>
          )}
        </div>

        <div>
          <Label className={labelTitleStyle}>경험에 대해 남겨주세요.</Label>
          <textarea
            {...register("review")}
            className="h-[120px] w-full resize-none rounded-lg border-2 border-transparent bg-gray-50 px-4 py-2.5 text-base text-gray-800 placeholder:text-gray-400 hover:border-purple-300 focus:border-purple-600 focus:outline-none"
            placeholder="남겨주신 리뷰는 프로그램 운영 및 다른 회원 분들께 큰 도움이 됩니다."
          />
          {errors.review && (
            <p className={ErrorMsgStyle}>{errors.review.message}</p>
          )}
        </div>

        <div className="flex gap-4">
          <Button
            variant="purple-outline"
            className="h-[44px] w-full"
            type="button"
          >
            취소
          </Button>
          <Button
            variant="purple"
            className="h-[44px] w-full"
            disabled={!!errors.rating || !!errors.review}
            type="submit"
          >
            리뷰 등록
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateReviewModal;
