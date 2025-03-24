import {
  QueryClient,
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import GatheringService from "@/services/gathering/GatheringService";
import { IGathering } from "@/types/gathering";

const filterByValue = (data: {
  pages: IGathering[][];
  pageParams: number[];
}) => ({
  pages: data.pages.map(page =>
    page.filter((data: IGathering) => data.location !== "홍대입구"),
  ),
  pagesParams: data.pageParams,
});

const gatheringQueryOption = (type: string, params?: string | undefined) => ({
  queryKey: [QUERY_KEYS.GATHERING.list, params],
  queryFn: () => GatheringService.getGatheringList(type, params),
  initialPageParam: 1,
  throwOnError: true,
  retry: false,
  getNextPageParam: (lastPage: IGathering[], pages: IGathering[][]) => {
    return lastPage.length > 0 ? pages.length + 1 : undefined;
  },
  select: type === "offline" ? filterByValue : undefined,
});

export const useGatheringList = (type: string, params?: string) => {
  return useInfiniteQuery(gatheringQueryOption(type, params));
};

export const useSuspenseGatheringList = (type: string, params?: string) => {
  return useSuspenseInfiniteQuery(gatheringQueryOption(type, params));
};

export const prefetchGateringList = async (
  queryClient: QueryClient,
  type: string,
  params?: string,
) => {
  return queryClient.prefetchInfiniteQuery(gatheringQueryOption(type, params));
};
