"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { OFFLINE_TAB } from "@/constants/gathering";
import { SUB_TAB } from "@/constants/ui";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";
import { cn } from "@/lib/utils";

const SubTab = () => {
  const pathname = usePathname();
  const { searchParams, setSearchParams } = useCustomSearchParams();

  const type = searchParams.get("type") || "";

  return (
    <div className="align-center flex gap-2">
      {SUB_TAB[pathname === OFFLINE_TAB ? "OFFLINE" : "ONLINE"].map(
        (tab, i) => (
          <Link href={tab.value ? `?type=${tab.value}` : OFFLINE_TAB} key={i}>
            <Button
              variant="default"
              aria-label="서브 주제 탭"
              onClick={() => setSearchParams({ type: tab.value })}
              className={cn(
                "rounded-xl px-4 py-2.5",
                tab.value !== type &&
                  "bg-gray-200 text-black hover:bg-gray-200/90",
              )}
            >
              {tab.name}
            </Button>
          </Link>
        ),
      )}
    </div>
  );
};

export default SubTab;
