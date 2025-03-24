"use client";

import { usePathname } from "next/navigation";

import { ONLINE_TAB } from "@/constants/gathering";
import useConvertToQueryStr from "@/hooks/gathering/useConvertToQueryStr";
import { useGatheringList } from "@/hooks/gathering/useGatheringList";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";

import MainCardItem from "./MainCardItem";

const MainCardList = () => {
  const pathname = usePathname();

  const { searchParamsObj } = useCustomSearchParams();
  const params = useConvertToQueryStr(searchParamsObj);

  const { data } = useGatheringList(
    pathname === ONLINE_TAB ? "online" : "offline",
    params,
  );

  return (
    <div className="mb-8 flex flex-col items-center justify-center gap-6">
      {data?.pages.map((page, pageNum) =>
        page.map(card => (
          <MainCardItem
            key={card.id}
            id={card.id}
            name={card.name}
            dateTime={new Date(card.dateTime)}
            registrationEnd={new Date(card.registrationEnd)}
            location={card.location}
            participantCount={card.participantCount}
            capacity={card.capacity}
            image={card.image}
            firstPage={pageNum === 0}
          />
        )),
      )}
    </div>
  );
};

export default MainCardList;
