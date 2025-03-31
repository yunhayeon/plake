import {
  infiniteQueryOptions,
  QueryClient,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import anonReviewService from "@/services/review/AnonReviewService";
import { IReviewResponse, TReviewQueryParams } from "@/types/review";

const initialPageParam = "0";

const reviewListQueryOption = (searchParams?: TReviewQueryParams) =>
  infiniteQueryOptions({
    queryKey: [QUERY_KEYS.REVIEW.listByQueryParams(searchParams)],
    queryFn: ({ pageParam = initialPageParam }) => {
      const mergedParams = {
        ...searchParams,
        offset: pageParam,
      };

      return anonReviewService.getReviewList(mergedParams);
    },
    initialPageParam,
    getNextPageParam: (
      lastPage: IReviewResponse,
      allPages: IReviewResponse[],
    ) => {
      if (
        lastPage.data.length === 0 ||
        allPages.length >= lastPage.totalPages
      ) {
        return undefined;
      }

      const currentOffset = allPages.length * 10;
      return currentOffset.toString();
    },
  });

export const useSuspenseReviewList = (searchParams?: TReviewQueryParams) => {
  return useSuspenseInfiniteQuery(reviewListQueryOption(searchParams));
};

export const prefetchReviewList = (
  queryClient: QueryClient,
  searchParams?: TReviewQueryParams,
) => {
  return queryClient.prefetchInfiniteQuery(reviewListQueryOption(searchParams));
};
