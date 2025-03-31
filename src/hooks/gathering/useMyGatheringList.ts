import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import gatheringService from "@/services/gathering/GatheringService";
import { IMyGathering, IMyGatheringFilterParams } from "@/types/gathering";

const myGatheringQueryOptions = (params: IMyGatheringFilterParams = {}) => {
  const limit = 10;
  const offset = ((params.offset ? Number(params.offset) : 0) / limit) * limit;

  const queryParams: IMyGatheringFilterParams = {
    ...params,
    sortBy: params.sortBy ?? "dateTime",
    sortOrder: params.sortOrder ?? "desc",
    limit: String(limit),
    offset: String(offset),
  };

  return {
    queryKey: [QUERY_KEYS.GATHERING.myList, queryParams],
    queryFn: async ({ pageParam = 1 }) => {
      const pageOffset = (pageParam - 1) * limit;
      return gatheringService.getMyGatheringList({
        ...queryParams,
        offset: String(pageOffset),
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: IMyGathering[], pages: IMyGathering[][]) => {
      const nextPage = pages.length + 1;
      return lastPage.length > 0 ? nextPage : undefined;
    },
    throwOnError: true,
    retry: false,
  };
};

export const useSuspenseMyGatheringList = (
  params: IMyGatheringFilterParams = {},
) => {
  const { data, hasNextPage, fetchNextPage, status } = useSuspenseInfiniteQuery(
    myGatheringQueryOptions(params),
  );

  return { data, hasNextPage, fetchNextPage, status };
};
