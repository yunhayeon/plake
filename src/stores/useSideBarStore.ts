import { create } from "zustand";

type State = {
  isOpen: boolean;
};
type Action = {
  onToggleSideBar: (flag: boolean) => void;
};

const useSideBarStore = create<State & Action>(set => ({
  isOpen: false,
  onToggleSideBar: (flag: boolean) => set({ isOpen: flag }),
}));

export default useSideBarStore;
