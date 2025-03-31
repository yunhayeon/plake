"use client";

import FavoriteMainTab from "./FavoriteMainTab";
import FavoriteSubTab from "./FavoriteSubTab";

const FavoriteFilterTab = () => {
  return (
    <div className="flex flex-col gap-6">
      <FavoriteMainTab />
      <FavoriteSubTab />
    </div>
  );
};

export default FavoriteFilterTab;
