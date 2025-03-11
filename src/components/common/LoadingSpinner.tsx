import clsx from "clsx";

interface LoadingProps {
  size?: "sm" | "md";
  color?: "purple" | "gray" | "white";
  zIndex?: number;
}

const LoadingSpinner = ({
  size = "md",
  color = "gray",
  zIndex = 20,
}: LoadingProps) => {
  return (
    <div
      className={clsx(
        "flex-shrink-0 animate-[spin_2s_linear_infinite] rounded-full border-4 border-t-transparent",
        {
          "border-purple-300": color === "purple",
          "border-gray-300": color === "gray",
          "border-white": color === "white",
        },
        {
          "h-6 w-6": size === "sm",
          "h-12 w-12": size === "md",
        },
      )}
      style={{ zIndex }}
    />
  );
};

export default LoadingSpinner;
