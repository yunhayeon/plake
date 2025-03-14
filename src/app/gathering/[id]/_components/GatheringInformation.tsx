import { Suspense } from "react";

import GatheringImage from "@/components/gathering-detail/GatheringImage";
import GatheringDetailInformation from "@/components/gathering-detail/GatheringInformation";
import GatheringImageSkeleton from "@/components/skeletons/gathering-detail/GatheringImageSkeleton";
import GatheringInformationSkeleton from "@/components/skeletons/gathering-detail/GatheringInformationSkeleton";

interface IGatheringInformationProps {
  id: string;
}

const GatheringInformation = async ({ id }: IGatheringInformationProps) => {
  return (
    <Suspense
      fallback={
        <section className="flex w-full flex-col gap-10 md:flex-row">
          <GatheringImageSkeleton />
          <GatheringInformationSkeleton />
        </section>
      }
    >
      <section className="flex w-full flex-col gap-10 md:flex-row">
        <GatheringImage id={id} />
        <GatheringDetailInformation id={id} />
      </section>
    </Suspense>
  );
};

export default GatheringInformation;
