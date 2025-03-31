import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteStore {
  favoriteCount: number;
  favorite: object;
  setFavoriteCount: (favoriteCount: number) => void;
  updateFavoriteState: (favorite: object) => void;
}

const useFavoriteStore = create<FavoriteStore>()(
  persist(
    set => ({
      favoriteCount: 0,
      favorite: {},
      setFavoriteCount: (favoriteCount: number) => set({ favoriteCount }),
      updateFavoriteState: (favorite: object) => set({ favorite }),
    }),
    {
      name: "favorite",
      partialize: state => state.favorite,
    },
  ),
);

export default useFavoriteStore;
