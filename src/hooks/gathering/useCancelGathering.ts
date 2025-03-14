import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { APIError } from "@/types/error";

const TOKEN = "token";

const cancelGathering = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/gatherings/${id}/cancel`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new APIError(data.message, data.code, response.status);
  }

  return data;
};

export const useCancelGatheringMutation = (
  id: string,
  isOrganizer: boolean,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return cancelGathering(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GATHERING.all],
      });
    },
    onError: () => {
      // TODO: 알림 모달 적용하기
      if (isOrganizer) {
        window.confirm("취소에 실패했습니다.");
      } else {
        window.confirm("주최자가 아니면 취소할 수 없습니다.");
      }
    },
  });
};

export const useCancelGathering = (id: string, isOrganizer: boolean) => {
  const { mutate: cancelGathering } = useCancelGatheringMutation(
    id,
    isOrganizer,
  );

  const handleCancelGathering = () => {
    // TODO: 확인 모달 적용하기
    if (window.confirm("정말 취소하시겠습니까?")) {
      cancelGathering();
    }
  };

  return { handleCancelGathering };
};
