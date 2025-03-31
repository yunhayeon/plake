import { queryOptions } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import anonGatheringService from "@/services/gathering/AnonGatheringService";

export const participantsQueryOption = (id: string) =>
  queryOptions({
    queryKey: [QUERY_KEYS.GATHERING.participants(id)],
    queryFn: () => anonGatheringService.getGatheringParticipants(id),
    throwOnError: true,
    retry: false,
  });
