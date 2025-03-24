import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { QUERY_KEYS } from "@/constants/queryKeys";
import gatheringService from "@/services/gathering/GatheringService";
import useModalStore from "@/stores/useModalStore";

export const useJoinGatheringMutation = (id: string) => {
  const queryClient = useQueryClient();
  const openAlert = useModalStore(state => state.openAlert);
  return useMutation({
    mutationFn: () => gatheringService.joinGathering(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GATHERING.detail(id)],
      });
    },
    onError: () => {
      openAlert("잠시 후 다시 시도해주세요.");
    },
  });
};

export const useLeaveGatheringMutation = (id: string) => {
  const queryClient = useQueryClient();
  const openAlert = useModalStore(state => state.openAlert);

  return useMutation({
    mutationFn: () => gatheringService.leaveGathering(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GATHERING.detail(id)],
      });
    },
    onError: () => {
      openAlert("잠시 후 다시 시도해주세요.");
    },
  });
};

export const useJoinGathering = (id: string, currentUserId: number) => {
  const { mutate: joinGathering } = useJoinGatheringMutation(id);
  const { mutate: leaveGathering } = useLeaveGatheringMutation(id);
  const openConfirm = useModalStore(state => state.openConfirm);
  const router = useRouter();

  const handleJoinGathering = () => {
    if (!currentUserId) {
      openConfirm("로그인 후 참여할 수 있습니다. 이동하시겠습니까?", () => {
        router.push("/login");
      });
    } else {
      openConfirm("모임에 참여하시겠습니까?", () => {
        joinGathering();
      });
    }
  };

  const handleLeaveGathering = () => {
    openConfirm("참여를 취소하시겠습니까?", () => {
      leaveGathering();
    });
  };

  return {
    handleJoinGathering,
    handleLeaveGathering,
  };
};
