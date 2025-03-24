import { ReactNode } from "react";

import MyProfile from "@/app/mypage/_components/MyProfile";
import TokenValidator from "@/components/auth/TokenValidator";
import NavTab from "@/components/navigations/NavTab";

interface LayoutProps {
  children: ReactNode;
}

export default function MypageLayout({ children }: LayoutProps) {
  return (
    <div className="base-wrap w-full min-w-[375px] bg-gray-50">
      <TokenValidator />
      <div className="mx-auto w-full max-w-[996px] pb-8">
        <h1 className="pb-4 pt-6 text-2xl font-semibold sm:px-2 sm:pb-6 sm:pt-8">
          마이 페이지
        </h1>
        <MyProfile />
        <section className="mt-4 flex min-h-[60vh] w-full flex-col border-t-2 border-gray-200 bg-white px-4 py-6 md:mt-6 md:p-6">
          <NavTab />
          {children}
        </section>
      </div>
    </div>
  );
}
