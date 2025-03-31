import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IUser } from "@/types/user";

const STORAGE_KEY = "user";

type State<IUser> = {
  user: IUser | null;
  isLoggedIn: boolean;
  isHydrated: boolean;
};
type Action = {
  updateUserState: (user: IUser) => void;
  setUserState: (user: IUser) => void;
  clearUserState: () => void;
  setHydrated: (state: boolean) => void;
};

const useUserStore = create<State<IUser> & Action>()(
  persist(
    set => ({
      user: null,
      isLoggedIn: false,
      isHydrated: false,
      updateUserState: (user: IUser) => set({ user }),
      setUserState: (user: IUser) => set({ user, isLoggedIn: true }),
      clearUserState: () => set({ user: null, isLoggedIn: false }),
      setHydrated: (state: boolean) => set({ isHydrated: state }),
    }),
    {
      // 로컬 스토리지에 user, isLoggedIn만 저장
      name: STORAGE_KEY,
      partialize: state => ({
        user: state.user,
        isLoggedIn: state.isLoggedIn,
      }),
      // Hydrate 이벤트 발생 시 isHydrated를 true로 변경
      onRehydrateStorage: state => {
        return () => state.setHydrated(true);
      },
    },
  ),
);

export default useUserStore;
