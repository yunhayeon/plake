import GatheringImageSkeleton from "@/components/skeletons/gathering-detail/GatheringImageSkeleton";
import GatheringInformationSkeleton from "@/components/skeletons/gathering-detail/GatheringInformationSkeleton";

import GatheringDetailInformation from "./GatheringDetailInformation";
import GatheringImage from "./GatheringImage";
import GatheringInformationWrapper from "./GatheringInformationWrapper";

interface IGatheringInformationProps {
  id: string;
}

const GatheringInformation = ({ id }: IGatheringInformationProps) => {
  const fallback = (
    <section className="flex w-full flex-col gap-10 md:flex-row">
      <GatheringImageSkeleton />
      <GatheringInformationSkeleton />
    </section>
  );

  return (
    <GatheringInformationWrapper fallback={fallback}>
      <section className="flex w-full flex-col gap-10 md:flex-row">
        <GatheringImage id={id} />
        <GatheringDetailInformation id={id} />
      </section>
    </GatheringInformationWrapper>
  );
};

export default GatheringInformation;
