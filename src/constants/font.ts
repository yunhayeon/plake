import localFont from "next/font/local";

export const FONT = localFont({
  src: [
    {
      path: "../assets/fonts/Pretendard-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pretendard",
});
