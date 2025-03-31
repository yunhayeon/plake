import Image from "next/image";

import { cn } from "@/lib/utils";

type TAvatarProps = {
  type: "default" | "editable";
  size: "small" | "default" | "large";
  imgPath?: string;
  disableClick?: boolean;
  onClickAvatar?: () => void;
};

const AVATAR_SIZE = {
  small: 25,
  default: 35,
  large: 56,
} as const;

const Avatar = ({
  type,
  size,
  imgPath,
  disableClick,
  onClickAvatar,
}: TAvatarProps) => {
  const selectedSize = AVATAR_SIZE[size];

  return (
    <div className="relative">
      <div
        className={cn(
          imgPath && "border border-gray-200 bg-white",
          "overflow-hidden rounded-full",
        )}
        style={{ width: selectedSize, height: selectedSize }}
        onClick={onClickAvatar}
        aria-label={`avatar-${type}`}
      >
        <Image
          className={cn(!disableClick && "cursor-pointer")}
          src={imgPath || "/images/avatar_default.png"}
          alt={`avatar-${type}`}
          width={selectedSize}
          height={selectedSize}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          loading="lazy"
        />
      </div>
      {type === "editable" && (
        <Image
          className="absolute bottom-0 right-[-3px] z-10 cursor-pointer overflow-visible"
          src={"/images/image-edit.png"}
          alt="edit-icon"
          aria-label="edit-icon"
          width={selectedSize / 2 - 8}
          height={selectedSize / 2 - 8}
        />
      )}
    </div>
  );
};

export default Avatar;
