import { create } from "zustand";

interface TabStore {
  isSubTabChange: boolean;
  tabIdxs: Array<number>;
  onSubTabChangeOn: () => void;
  onSubTabChangeOff: () => void;
  setTabIdxs: (mainTabIdx: Array<number>) => void;
}

const useTabStore = create<TabStore>(set => ({
  isSubTabChange: false,
  tabIdxs: [0, 0],
  onSubTabChangeOn: () => set({ isSubTabChange: true }),
  onSubTabChangeOff: () => set({ isSubTabChange: false }),
  setTabIdxs: tabIdxs => set({ tabIdxs }),
}));

export default useTabStore;
