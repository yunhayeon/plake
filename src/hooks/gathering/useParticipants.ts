import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { APIError } from "@/types/error";
import { IParticipant } from "@/types/gathering";

export const getParticipants = async (id: string): Promise<IParticipant[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/gatherings/${id}/participants`,
  );
  const data = await response.json();

  if (!response.ok) {
    throw new APIError(data.message, data.code, response.status);
  }

  return data;
};

export const useParticipants = (id: string) => {
  try {
    return useQuery<IParticipant[]>({
      queryKey: [QUERY_KEYS.GATHERING.participants(id)],
      queryFn: () => getParticipants(id),
      initialData: [],
      throwOnError: true,
      retry: false,
    });
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new Error(`참여자 목록을 가져오지 못했습니다: ${error}`);
  }
};

export const useIsParticipant = (id: string, currentUserId?: number) => {
  const { data: participants } = useParticipants(id);

  return participants.some(participant => participant.userId === currentUserId);
};
