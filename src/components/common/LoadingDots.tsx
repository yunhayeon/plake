import clsx from "clsx";

interface LoadingDotsProps {
  color?: "gray" | "purple";
}

const LoadingDots = ({ color = "gray" }: LoadingDotsProps) => {
  return (
    <div className="z-50 flex space-x-3.5">
      {[...Array(3)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className={clsx("h-3 w-3 animate-bounce rounded-full", {
            "bg-gray-200": color === "gray",
            "bg-purple-300": color === "purple",
          })}
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingDots;
