"use client";

import { useEffect, useState } from "react";

interface IProgressBarProps {
  progress: number;
  color?: string;
  width?: string;
}

const ProgressBar = ({
  progress,
  color = "#7c3aed",
  width,
}: IProgressBarProps) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProgress(progress);
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div
      className="relative h-1 overflow-hidden rounded-[6px] bg-gray-100"
      style={{ width: width ? `${width}px` : "100%" }}
    >
      <div
        className="absolute left-0 top-0 h-full transition-all duration-1000 ease-in-out"
        style={{
          backgroundColor: color,
          width: `${currentProgress}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
