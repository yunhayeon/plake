import { FaImage } from "react-icons/fa";

import { Skeleton } from "@/components/ui/Skeleton";

const GatheringImageSkeleton = () => {
  return (
    <Skeleton className="flex min-h-[270px] flex-1 items-center justify-center rounded-3xl">
      <FaImage className="text-gray-400" size={50} />
    </Skeleton>
  );
};

export default GatheringImageSkeleton;
