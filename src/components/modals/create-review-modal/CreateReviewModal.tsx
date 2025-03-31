"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useShallow } from "zustand/shallow";

import LoadingSpinner from "@/components/common/LoadingSpinner";
import Rating from "@/components/common/Rating";
import Modal from "@/components/modals/Modal";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { useCreateReview } from "@/hooks/review/useCreateReview";
import { ReviewSchema, TReviewForm } from "@/schemas/reviewSchema";
import useModalStore from "@/stores/useModalStore";

const labelTitleStyle = "mb-3 block text-base font-semibold text-gray-800";
const errorMsgStyle = "mt-2 text-sm font-semibold text-red-600";

const CreateReviewModal = () => {
  const { isOpen, onClose, type, reviewTargetId } = useModalStore(
    useShallow(state => ({
      isOpen: state.isOpen,
      onClose: state.onClose,
      type: state.type,
      reviewTargetId: state.reviewTargetId,
    })),
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    watch,
    reset,
  } = useForm<TReviewForm>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: {
      gatheringId: 0,
      score: 0,
      comment: "",
    },
  });

  const { handleCreateReview, isPending } = useCreateReview();

  useEffect(() => {
    if (type === "createReview" && reviewTargetId) {
      setValue("gatheringId", reviewTargetId);
    }
  }, [type, reviewTargetId, setValue]);

  const handleRatingChange = (newScore: number) => {
    setValue("score", newScore);
    trigger("score");
  };

  const onSubmit = (data: TReviewForm) => {
    handleCreateReview(data);
    onClose();
    reset();
  };

  const handleCancel = () => {
    onClose();
    reset();
  };

  if (type !== "createReview") return null;

  return (
    <Modal isOpen={isOpen} onClose={handleCancel} title="리뷰 쓰기">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-1 flex flex-col gap-6"
      >
        <div>
          <Label className={labelTitleStyle}>만족스러운 경험이었나요?</Label>
          <Rating
            rating={watch("score")}
            isEditable={true}
            onRatingChange={handleRatingChange}
          />
          {errors.score && (
            <p className={errorMsgStyle}>{errors.score.message}</p>
          )}
        </div>

        <div>
          <Label className={labelTitleStyle}>경험에 대해 남겨주세요.</Label>
          <textarea
            {...register("comment")}
            className="h-[120px] w-full resize-none rounded-lg border-2 border-transparent bg-gray-50 px-4 py-2.5 text-base text-gray-800 placeholder:text-gray-400 hover:border-purple-300 focus:border-purple-600 focus:outline-none"
            placeholder="남겨주신 리뷰는 프로그램 운영 및 다른 회원 분들께 큰 도움이 됩니다."
          />
          {errors.comment && (
            <p className={errorMsgStyle}>{errors.comment.message}</p>
          )}
        </div>

        <div className="flex gap-4">
          <Button
            variant="purple-outline"
            className="h-[44px] w-full"
            type="button"
            onClick={handleCancel}
          >
            취소
          </Button>
          <Button
            variant="purple"
            className="h-[44px] w-full"
            disabled={!!errors.score || !!errors.comment}
            type="submit"
          >
            {isPending ? (
              <LoadingSpinner size="xs" color="white" />
            ) : (
              "리뷰 등록"
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateReviewModal;
