import { useMutation } from "@tanstack/react-query";

import { createAuthService } from "@/services/auth/AuthService";
import useModalStore from "@/stores/useModalStore";
import useUserStore from "@/stores/useUserStore";
import { APIError } from "@/types/error";
import { IUpdateUser } from "@/types/user";

export const useUpdateUser = () => {
  const { user, updateUserState } = useUserStore();
  const openAlert = useModalStore(state => state.openAlert);

  const { mutate: updateUser } = useMutation({
    mutationFn: async (data: FormData): Promise<IUpdateUser> => {
      const authService = await createAuthService();
      return authService.updateUser(data);
    },
    onSuccess: (data: IUpdateUser) => {
      if (!user) return;

      updateUserState({
        ...data,
        teamId: user.teamId,
      });
    },
    onError: error => {
      if (error instanceof APIError) {
        openAlert(error.message);
      } else {
        openAlert("알 수 없는 오류가 발생했어요.");
      }
    },
  });

  const handleUpdateUser = (data: FormData) => {
    updateUser(data);
  };

  return { handleUpdateUser };
};
