import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { CreateGatheringFormType } from "@/schemas/gatheringSchema";
import gatheringService from "@/services/gathering/GatheringService";
import useModalStore from "@/stores/useModalStore";

export const useCreateGathering = () => {
  const queryClient = useQueryClient();
  const openAlert = useModalStore(state => state.openAlert);

  const { mutate: createGathering, isPending } = useMutation({
    mutationFn: (data: CreateGatheringFormType) =>
      gatheringService.createGathering(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GATHERING.all],
      });
    },
    onError: () => {
      openAlert("잠시 후 다시 시도해주세요.");
    },
  });

  const handleCreateGathering = (data: CreateGatheringFormType) => {
    createGathering(data);
  };

  return { handleCreateGathering, isPending };
};
