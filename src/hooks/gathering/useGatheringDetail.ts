import { QueryClient, useQuery, useSuspenseQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import gatheringService from "@/services/gathering/GatheringService";

const gatheringDetailQueryOption = (id: string) => ({
  queryKey: [QUERY_KEYS.GATHERING.detail(id)],
  queryFn: () => gatheringService.getGatheringDetail(id),
  throwOnError: true,
  retry: false,
});

export const useGatheringDetail = (id: string) => {
  return useQuery(gatheringDetailQueryOption(id));
};

export const useSuspenseGatheringDetail = (id: string) => {
  return useSuspenseQuery(gatheringDetailQueryOption(id));
};

export const prefetchGatheringDetail = async (
  id: string,
  queryClient: QueryClient,
) => {
  return queryClient.prefetchQuery(gatheringDetailQueryOption(id));
};
