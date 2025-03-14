"use client";

import Image from "next/image";

import DeadlineTag from "@/components/common/DeadlineTag";
import { useGatheringDetail } from "@/hooks/gathering/useGatheringDetail";

interface IGatheringImageProps {
  id: string;
}

const GatheringImage = ({ id }: IGatheringImageProps) => {
  const { data } = useGatheringDetail(id);

  return (
    <figure className="relative min-h-[270px] flex-1 overflow-hidden rounded-3xl bg-gray-300">
      <DeadlineTag registrationEndDate={new Date(data?.dateTime ?? "")} />
      <Image
        src={data.image || "https://picsum.photos/500/700"}
        alt="gathering-image"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority
      />
    </figure>
  );
};

export default GatheringImage;
