"use client";

import { useState } from "react";

import { MAIN_TAB } from "@/constants/ui";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";
import { cn } from "@/lib/utils";

const Tab = () => {
  const { setSearchParams } = useCustomSearchParams();

  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

  const handleSearch = (value: string, index: number) => {
    setSearchParams({
      type: value,
    });

    setActiveTabIdx(index);
  };

  return (
    <>
      <div className="align-center mb-6 flex gap-3">
        {MAIN_TAB.map((tab, i) => (
          <button
            key={`tab-${i}`}
            onClick={() => handleSearch(tab.value, i)}
            className="relative"
          >
            <span
              className={cn(
                "pb-1.5 text-lg font-semibold text-gray-400",
                activeTabIdx === i &&
                  "text-black after:absolute after:mt-1.5 after:block after:w-full after:border-b-2 after:border-gray-900 after:content-['']",
              )}
            >
              {tab.name}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Tab;
