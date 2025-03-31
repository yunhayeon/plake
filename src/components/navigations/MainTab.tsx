"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ONLINE, ONLINE_PATH } from "@/constants/gatheringFilterParams";
import { MAIN_TAB } from "@/constants/ui";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";
import { cn } from "@/lib/utils";

const MainTab = () => {
  const pathname = usePathname();
  const { setSearchParams } = useCustomSearchParams();

  return (
    <div className="flex items-center gap-3">
      {MAIN_TAB.map((tab, i) => (
        <Link
          key={i}
          href={tab.href}
          aria-label="메인 주제 탭"
          className="relative"
          onClick={() => pathname === ONLINE_PATH && setSearchParams(ONLINE)}
        >
          <span
            className={cn(
              "pb-1.5 text-lg font-semibold text-gray-400",
              pathname === tab.href &&
                "text-black after:absolute after:mt-1.5 after:block after:w-full after:border-b-2 after:border-gray-900 after:content-['']",
            )}
          >
            {tab.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default MainTab;
