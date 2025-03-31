"use client";

import { useEffect, useState } from "react";

import useFavoriteStore from "@/stores/useFavoriteStore";
import useModalStore from "@/stores/useModalStore";
import useUserStore from "@/stores/useUserStore";

import FavoriteButton from "./FavoriteButton";

interface FavoriteButtonWrapperProps {
  id: string;
}

const FavoriteButtonWrapper = ({ id }: FavoriteButtonWrapperProps) => {
  const user = useUserStore(state => state.user);
  const openAlert = useModalStore(state => state.openAlert);
  const updateFavoriteState = useFavoriteStore(
    state => state.updateFavoriteState,
  );

  const email = user?.email || "unknown";

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const onClickToggle = (id: string) => {
    const value = localStorage.getItem("favorite");
    const favorite =
      JSON.parse(value || "null")?.state?.favorite || new Object();
    const favoriteByUser: Set<string> = new Set(favorite?.[email]) || new Set();

    if (!favoriteByUser.has(id)) {
      if (favoriteByUser.size >= 30)
        openAlert("모임 찜하기는 최대 30개까지 가능합니다.");
      else {
        favoriteByUser.add(id);
        setIsFavorite(true);
      }
    } else {
      favoriteByUser.delete(id);
      setIsFavorite(false);
    }

    favorite[email] = Array.from(favoriteByUser);

    updateFavoriteState({ favorite });
  };

  useEffect(() => {
    const value = localStorage.getItem("favorite");
    const favorite = JSON.parse(value || "null");
    const favoriteList = favorite?.state?.favorite?.[email];

    if (favoriteList) setIsFavorite(favoriteList.includes(id));
  }, [id, email]);

  return (
    <>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggle={() => onClickToggle(id)}
      />
    </>
  );
};

export default FavoriteButtonWrapper;
