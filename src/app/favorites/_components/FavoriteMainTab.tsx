import { MAIN_TAB } from "@/constants/ui";
import { cn } from "@/lib/utils";
import useTabStore from "@/stores/useTabStore";

const GatheringMainTab = () => {
  const tabIdxs = useTabStore(state => state.tabIdxs);
  const setTabIdxs = useTabStore(state => state.setTabIdxs);

  const mainTabIdx = tabIdxs[0];

  return (
    <div className="flex items-center gap-3">
      {MAIN_TAB.map((tab, i) => (
        <button
          key={i}
          className={cn(
            "relative pb-1.5 text-lg font-semibold text-gray-400",
            mainTabIdx === i &&
              "text-black after:absolute after:mt-1.5 after:block after:w-full after:border-b-2 after:border-gray-900 after:content-['']",
          )}
          onClick={() => setTabIdxs([i, 0])}
          aria-label="메인 주제 탭"
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default GatheringMainTab;
