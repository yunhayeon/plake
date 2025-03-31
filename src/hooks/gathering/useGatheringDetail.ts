import { queryOptions } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import anonGatheringService from "@/services/gathering/AnonGatheringService";

export const gatheringDetailQueryOption = (id: string) =>
  queryOptions({
    queryKey: [QUERY_KEYS.GATHERING.detail(id)],
    queryFn: () => anonGatheringService.getGatheringDetail(id),
    throwOnError: true,
    retry: false,
  });
