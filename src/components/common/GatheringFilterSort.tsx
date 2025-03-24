"use client";

import { usePathname } from "next/navigation";

import Dropdown from "@/components/common/Dropdown";
import FilterCalendar from "@/components/common/FilterCalendar";
import { OFFLINE_TAB } from "@/constants/gathering";
import { SORT_OPTION } from "@/constants/ui";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";

const GatheringFilterSort = () => {
  const pathname = usePathname();
  const { setSearchParams } = useCustomSearchParams();

  return (
    <section className="mb-6 flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        {pathname === OFFLINE_TAB && (
          <Dropdown onSelect={value => setSearchParams({ location: value })} />
        )}
        <FilterCalendar />
      </div>
      <div>
        <Dropdown
          type="sort"
          placeholder="정렬"
          option={SORT_OPTION}
          onSelect={value => setSearchParams({ sortBy: value })}
        />
      </div>
    </section>
  );
};

export default GatheringFilterSort;
