import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { Button } from "@/components/ui/Button";
import { SUB_TAB } from "@/constants/ui";
import { cn } from "@/lib/utils";
import useTabStore from "@/stores/useTabStore";

const GatheringSubTab = () => {
  const tabIdxs = useTabStore(state => state.tabIdxs);
  const setTabIdxs = useTabStore(state => state.setTabIdxs);

  const mainTabIdx = tabIdxs[0];
  const subTabIdx = tabIdxs[1];

  const pathname = usePathname();

  useEffect(() => {
    setTabIdxs([0, 0]); //다른 페이지로 이동시 탭 초기화
  }, [pathname, setTabIdxs]);

  return (
    <div className="flex items-center gap-2">
      {SUB_TAB[mainTabIdx === 0 ? "OFFLINE" : "ONLINE"].map((tab, i) => (
        <Button
          key={i}
          variant="default"
          aria-label="서브 주제 탭"
          className={cn(
            "rounded-xl px-4 py-2.5",
            subTabIdx !== i && "bg-gray-200 text-black hover:bg-gray-200/90",
          )}
          onClick={() => setTabIdxs([mainTabIdx, i])}
        >
          {tab.name}
        </Button>
      ))}
    </div>
  );
};

export default GatheringSubTab;
