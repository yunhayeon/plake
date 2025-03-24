import { Suspense } from "react";

import GatheringFilterSort from "@/components/common/GatheringFilterSort";
import CreateGatheringModal from "@/components/modals/create-gathering-modal/CreateGatheringModal";
import FilterTab from "@/components/navigations/FilterTab";

import Banner from "./_components/Banner";

const GatheringLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="base-wrap">
        <Banner />
        <Suspense>
          <FilterTab />
        </Suspense>
        <hr className="my-4 border-gray-200" />
        <GatheringFilterSort />
        {children}
      </div>
      <CreateGatheringModal />
    </>
  );
};

export default GatheringLayout;
