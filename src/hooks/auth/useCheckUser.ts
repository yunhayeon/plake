import { type QueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import authService from "@/services/auth/AuthService";

export const prefetchCheckUser = async (queryClient: QueryClient) => {
  const data = await queryClient.fetchQuery({
    queryKey: [QUERY_KEYS.AUTH.all],
    queryFn: async () => {
      const user = await authService.getUser();
      return { userId: String(user.id) };
    },
  });

  return data;
};
