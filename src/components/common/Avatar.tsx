import Image from "next/image";

type TAvatarProps = {
  type: "default" | "editable";
  size: "small" | "default" | "large";
  imgPath?: string | null;
  handleAvatar?: () => void;
};
const AVATAR_SIZE = {
  small: 25,
  default: 35,
  large: 55,
};
const Avatar = ({ type, size, imgPath, handleAvatar }: TAvatarProps) => {
  const selectedSize = AVATAR_SIZE[size];

  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-full"
        style={{ width: selectedSize, height: selectedSize }}
      >
        <Image
          className="cursor-pointer"
          onClick={handleAvatar}
          src={imgPath || "/images/avatar_default.png"}
          alt={`avatar-${type}`}
          aria-label={`avatar-${type}`}
          width={selectedSize}
          height={selectedSize}
          style={{ objectFit: "fill" }}
          loading="lazy"
        />
      </div>
      {type === "editable" && (
        <Image
          className="absolute bottom-0 right-[-3px] z-10 overflow-visible"
          src={"/images/edit-icon.png"}
          alt="edit-icon"
          aria-label="edit-icon"
          width={selectedSize / 2}
          height={selectedSize / 2}
        />
      )}
    </div>
  );
};

export default Avatar;
