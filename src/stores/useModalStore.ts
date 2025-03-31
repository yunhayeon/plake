import { create } from "zustand";

interface ModalStore {
  type: "alert" | "confirm" | "createGathering" | "createReview";
  title: string;
  isOpen: boolean;
  reviewTargetId?: number;
  onOpen: () => void;
  onClose: () => void;
  onConfirm: (callback?: () => void) => void;
  openAlert: (title: string) => void;
  openConfirm: (title: string, onConfirmCallback: () => void) => void;
  openCreateGathering: () => void;
  openCreateReview: (id: number) => void;
}

const useModalStore = create<ModalStore>(set => ({
  title: "",
  type: "alert",
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onConfirm: callback =>
    set(() => {
      if (callback) {
        callback();
      }
      return { isOpen: false };
    }),
  openAlert: (title: string) =>
    set(() => ({
      type: "alert",
      title,
      isOpen: true,
      onConfirm: () => set({ isOpen: false }),
    })),
  openConfirm: (title: string, onConfirmCallback: () => void) =>
    set(() => ({
      type: "confirm",
      title,
      isOpen: true,
      onConfirm: () =>
        set(() => {
          onConfirmCallback();
          return { isOpen: false };
        }),
    })),
  openCreateGathering: () =>
    set(() => ({
      type: "createGathering",
      title: "",
      isOpen: true,
    })),
  openCreateReview: (id: number) =>
    set(() => ({
      type: "createReview",
      title: "",
      isOpen: true,
      reviewTargetId: id,
    })),
}));

export default useModalStore;
