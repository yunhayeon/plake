"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ITabProps {
  tabList: Array<string>;
}

const SubTab = ({ tabList }: ITabProps) => {
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

  return (
    <nav className="align-center mb-6 flex gap-2">
      {tabList.map((tab, i) => (
        <Button
          key={`subTab-${i}`}
          variant="default"
          className={cn(
            "rounded-xl px-4 py-2.5",
            activeTabIdx !== i && "bg-gray-200 text-black hover:bg-gray-200/90",
          )}
          onClick={() => setActiveTabIdx(i)}
        >
          {tab}
        </Button>
      ))}
    </nav>
  );
};

export default SubTab;
