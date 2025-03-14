import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { APIError } from "@/types/error";
import { IReview } from "@/types/review";

const getReviewList = async (): Promise<IReview[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`);
  const data = await response.json();

  if (!response.ok) {
    throw new APIError(data.message, data.code, response.status);
  }

  return data.data;
};

export const useReviewList = () => {
  try {
    return useInfiniteQuery<IReview[]>({
      queryKey: [QUERY_KEYS.REVIEW.list],
      queryFn: getReviewList,
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
        return lastPage.length > 0 ? pages.length + 1 : undefined;
      },
      select: data => ({
        pages: data.pages,
        pageParams: data.pageParams,
      }),
      throwOnError: true,
      retry: false,
    });
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new Error(`리뷰 목록을 가져오지 못했습니다: ${error}`);
  }
};

export const prefetchReviewList = async (queryClient: QueryClient) => {
  try {
    return queryClient.prefetchInfiniteQuery({
      queryKey: [QUERY_KEYS.REVIEW.list],
      queryFn: getReviewList,
      initialPageParam: 1,
      retry: false,
    });
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new Error(`리뷰 초기 목록을 가져오지 못했습니다: ${error}`);
  }
};
