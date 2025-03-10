"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

interface IProgressBarProps {
  progress: number;
  color?: string;
  width?: string;
}

const ProgressBar = ({ progress, color, width }: IProgressBarProps) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProgress(progress);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={clsx(
        "relative h-1 overflow-hidden rounded-[6px] bg-gray-100",
        width ? `w-[${width}px]` : "w-full",
      )}
    >
      <div
        className={clsx(
          "absolute left-0 top-0 h-full transition-all duration-1000 ease-in-out",
          color ? `bg-[${color}]` : "bg-purple-600",
          currentProgress ? `w-[${currentProgress}%]` : "w-0",
        )}
      ></div>
    </div>
  );
};

export default ProgressBar;
