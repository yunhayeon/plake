import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { APIError } from "@/types/error";

const TOKEN = "token";

export const joinGathering = async (
  id: string,
  type: "join" | "leave",
  apiMethod: "POST" | "DELETE",
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/gatherings/${id}/${type}`,
    {
      method: apiMethod,
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

export const useJoinGatheringMutation = (
  id: string,
  currentUserId?: number,
) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: () => joinGathering(id, "join", "POST"),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GATHERING.detail(id)],
      });
    },
    onError: () => {
      // TODO: 확인 모달 적용하기
      if (!currentUserId) {
        window.alert("로그인 후 참여할 수 있습니다.");
        router.push("/login");
      }
    },
  });
};

export const useLeaveGatheringMutation = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => joinGathering(id, "leave", "DELETE"),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GATHERING.detail(id)],
      });
    },
    onError: () => {
      window.alert("참여 취소에 실패했습니다.");
    },
  });
};

export const useJoinGathering = (id: string, currentUserId?: number) => {
  const { mutate: handleJoinGathering } = useJoinGatheringMutation(
    id,
    currentUserId,
  );
  const { mutate: handleLeaveGathering } = useLeaveGatheringMutation(id);

  return {
    handleJoinGathering,
    handleLeaveGathering,
  };
};
