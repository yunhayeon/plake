import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { TReviewForm } from "@/schemas/reviewSchema";
import reviewService from "@/services/review/ReviewService";
import useModalStore from "@/stores/useModalStore";

export const useCreateReview = () => {
  const queryClient = useQueryClient();
  const openAlert = useModalStore(state => state.openAlert);

  const { mutate: createReview, isPending } = useMutation({
    mutationFn: async (data: TReviewForm) => {
      return reviewService.createReview(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GATHERING.myList],
      });
    },
    onError: error => {
      console.error("모임 생성 실패:", error);
      openAlert("리뷰 등록에 실패했습니다. 잠시 후 다시 시도해주세요.");
    },
  });

  const handleCreateReview = (data: TReviewForm) => {
    createReview(data);
  };

  return { handleCreateReview, isPending };
};
