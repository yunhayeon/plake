import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { QUERY_KEYS } from "@/constants/queryKeys";
import gatheringService from "@/services/gathering/GatheringService";
import useModalStore from "@/stores/useModalStore";

export const useCancelGatheringMutation = (
  id: string,
  isOrganizer: boolean,
) => {
  const queryClient = useQueryClient();
  const openAlert = useModalStore(state => state.openAlert);

  return useMutation({
    mutationFn: () => gatheringService.deleteGathering(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GATHERING.all],
      });
    },
    onError: () => {
      const errorMessage = isOrganizer
        ? "잠시 후 다시 시도해주세요."
        : "주최자가 아니면 취소할 수 없습니다.";
      openAlert(errorMessage);
    },
  });
};

export const useCancelGathering = (id: string, isOrganizer: boolean) => {
  const { mutate: cancelGathering } = useCancelGatheringMutation(
    id,
    isOrganizer,
  );
  const openConfirm = useModalStore(state => state.openConfirm);
  const router = useRouter();

  const handleCancelGathering = () => {
    openConfirm("정말 취소하시겠습니까?", () => {
      cancelGathering();
      router.push("/gatherings");
    });
  };

  return { handleCancelGathering };
};
