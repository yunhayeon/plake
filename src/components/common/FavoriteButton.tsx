import clsx from "clsx";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface FavoriteButtonProps {
  isFavorite: boolean; // 찜 상태 (로컬 스토리지에서의 찜 여부)
  onToggle: () => void; // 찜 상태 변경 핸들러
}

const FavoriteButton = ({ isFavorite, onToggle }: FavoriteButtonProps) => {
  return (
    <button
      className={clsx(
        "z-10 flex h-12 w-12 min-w-12 items-center justify-center rounded-full outline-none",
        isFavorite
          ? "bg-gray-100 text-purple-600"
          : "border-2 border-gray-200 text-gray-400 hover:text-purple-600",
      )}
      onClick={onToggle}
      aria-label={isFavorite ? "찜 목록에서 제거하기" : "찜하기"}
      aria-pressed={isFavorite}
    >
      {isFavorite ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
    </button>
  );
};

export default FavoriteButton;
