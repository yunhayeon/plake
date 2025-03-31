"use client";

import dynamic from "next/dynamic";

import offlineAnimation from "@/assets/animations/offline.json";
import onlineAnimation from "@/assets/animations/online.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface IMainAnimationProps {
  type: "online" | "offline";
}

const MainAnimation = ({ type }: IMainAnimationProps) => {
  return (
    <Lottie
      animationData={type === "online" ? onlineAnimation : offlineAnimation}
      rendererSettings={{
        preserveAspectRatio: "xMidYMid slice",
      }}
      style={{ maxWidth: "500px" }}
    />
  );
};

export default MainAnimation;
