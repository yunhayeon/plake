import { QueryClient, useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { APIError } from "@/types/error";
import { GatheringType, IGathering } from "@/types/gathering";

const initialData: IGathering = {
  id: 0,
  teamId: "",
  name: "",
  type: GatheringType.MINDFULNESS,
  location: "",
  dateTime: "",
  registrationEnd: "",
  capacity: 0,
  participantCount: 0,
  image: "",
  createdBy: 0,
  canceledAt: null,
};

export const getGathering = async (id: string): Promise<IGathering> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/gatherings/${id}`,
  );

  const data = await response.json();

  if (!response.ok) {
    throw new APIError(data.message, data.code, response.status);
  }

  return data;
};

export const useGatheringDetail = (id: string) => {
  try {
    return useQuery<IGathering>({
      queryKey: [QUERY_KEYS.GATHERING.detail(id)],
      queryFn: () => getGathering(id),
      initialData,
      throwOnError: true,
      retry: false,
    });
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new Error(`모임 상세 데이터를 가져오지 못했습니다`);
  }
};

export const prefetchGatheringDetail = async (
  id: string,
  queryClient: QueryClient,
) => {
  try {
    return queryClient.prefetchQuery<IGathering>({
      queryKey: [QUERY_KEYS.GATHERING.detail(id)],
      queryFn: () => getGathering(id),
      initialData,
      retry: false,
    });
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new Error(`모임 초기 데이터를 가져오지 못했습니다`);
  }
};
