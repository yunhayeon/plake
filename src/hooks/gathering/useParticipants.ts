"use client";

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

const participantsQueryOption = (id: string) => ({
  queryKey: [QUERY_KEYS.GATHERING.participants(id)],
  queryFn: () => getParticipants(id),
  throwOnError: true,
  retry: false,
});

export const useParticipants = (id: string) => {
  return useQuery(participantsQueryOption(id));
};

export const useIsParticipant = (id: string, currentUserId?: number) => {
  const { data: participants } = useParticipants(id);

  return participants?.some(
    (participant: IParticipant) => participant.userId === currentUserId,
  );
};
