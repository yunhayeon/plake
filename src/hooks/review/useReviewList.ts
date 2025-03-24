import {
  QueryClient,
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { ReviewResponse, reviewService } from "@/services/review/ReviewService";

const reviewListQueryOption = () => ({
  queryKey: [QUERY_KEYS.REVIEW.list],
  queryFn: reviewService.getReviewList,
  initialPageParam: 1,
  throwOnError: true,
  retry: false,
  getNextPageParam: (lastPage: ReviewResponse) => {
    return lastPage.data.length === 0 ? undefined : lastPage.data.length + 1;
  },
});

export const useReviewList = () => {
  return useInfiniteQuery(reviewListQueryOption());
};

export const useSuspenseReviewList = () => {
  return useSuspenseInfiniteQuery(reviewListQueryOption());
};

export const prefetchReviewList = (queryClient: QueryClient) => {
  return queryClient.prefetchInfiniteQuery(reviewListQueryOption());
};
