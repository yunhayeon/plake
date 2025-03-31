import {
  QueryClient,
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
import dayjs from "dayjs";

import { ONLINE } from "@/constants/gatheringFilterParams";
import { QUERY_KEYS } from "@/constants/queryKeys";
import anonGatheringService from "@/services/gathering/AnonGatheringService";
import { IGathering, IGatheringFilterParams } from "@/types/gathering";

const filterByValue = (data: {
  pages: IGathering[][];
  pageParams: number[];
}) => ({
  pages: data.pages.map(page =>
    page.filter((data: IGathering) => data.location !== ONLINE.location),
  ),
  pagesParams: data.pageParams,
});

const gatheringInfiniteListQueryOption = (
  tab: string,
  params?: IGatheringFilterParams,
) => ({
  queryKey: [QUERY_KEYS.GATHERING.listByParams(tab, params)],
  queryFn: async ({ pageParam = 1 }) => {
    const gatherings = await anonGatheringService.getGatheringInfiniteList(
      pageParam,
      params,
    );
    return gatherings.filter((gathering: IGathering) =>
      dayjs(gathering.registrationEnd).isAfter(dayjs(new Date())),
    );
  },
  initialPageParam: 1,
  throwOnError: true,
  retry: false,
  getNextPageParam: (lastPage: IGathering[], pages: IGathering[][]) => {
    const nextPage = pages.length + 1;

    return lastPage.length > 0 ? nextPage : undefined;
  },
  select: tab === "offline" ? filterByValue : undefined,
});

export const useGatheringInfiniteList = (
  tab: string,
  params?: IGatheringFilterParams,
) => {
  return useInfiniteQuery(gatheringInfiniteListQueryOption(tab, params));
};

export const useSuspenseGatheringInfiniteList = (
  tab: string,
  params?: IGatheringFilterParams,
) => {
  const { data, hasNextPage, fetchNextPage, status } = useSuspenseInfiniteQuery(
    gatheringInfiniteListQueryOption(tab, params),
  );

  return { data, hasNextPage, fetchNextPage, status };
};

export const prefetchGateringInfiniteList = async (
  queryClient: QueryClient,
  tab: string,
  params?: IGatheringFilterParams,
) => {
  return queryClient.prefetchInfiniteQuery(
    gatheringInfiniteListQueryOption(tab, params),
  );
};
