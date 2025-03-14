"use client";

import { FaCircleCheck } from "react-icons/fa6";

import DateTimeTag from "@/components/common/DateTimeTag";
import FavoriteButton from "@/components/common/FavoriteButton";
import ProgressBar from "@/components/common/ProgressBar";
import ParticipantAvatarStack from "@/components/gathering-detail/ParticipantAvatarStack";
import { GATHERING } from "@/constants/gathering";
import { useGatheringDetail } from "@/hooks/gathering/useGatheringDetail";

interface IGatheringDetailInformationProps {
  id: string;
}

const GatheringDetailInformation = ({
  id,
}: IGatheringDetailInformationProps) => {
  const { data } = useGatheringDetail(id);
  const { name, location, capacity, participantCount, dateTime } = data;

  const progress = (participantCount / capacity) * 100;

  const isGatheringFull = participantCount >= GATHERING.CAPACITY.MIN;

  return (
    <article className="flex h-[270px] flex-1 flex-col gap-6 rounded-3xl border-2 border-gray-200 bg-white px-1 py-6">
      <section className="mb-5 flex justify-between gap-2 px-6">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-sm font-medium text-gray-700">{location}</p>
          </div>
          <DateTimeTag date={new Date(dateTime)} />
        </div>
        <div>
          <FavoriteButton isFavorite={false} onToggle={() => {}} />
        </div>
      </section>
      <hr className="border-b-2 border-dashed border-gray-200" />
      <section className="flex flex-col gap-2 px-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-3 text-sm font-semibold text-gray-900">
            <p>{`모집 정원 ${capacity}명`}</p>
            <ParticipantAvatarStack id={id} />
          </div>
          {isGatheringFull && (
            <div className="flex items-center gap-2 text-purple-500">
              <FaCircleCheck size={18} />
              <p className="text-sm font-medium">{"개설 확정"}</p>
            </div>
          )}
        </div>
        <ProgressBar progress={progress} />
        <div className="flex items-center justify-between text-xs font-medium text-gray-700">
          <span>{`최소인원 ${GATHERING.CAPACITY.MIN}명`}</span>
          <span>{`최대인원 ${GATHERING.CAPACITY.MAX}명`}</span>
        </div>
      </section>
    </article>
  );
};

export default GatheringDetailInformation;
