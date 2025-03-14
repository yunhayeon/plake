"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";

import DateTimeTag from "../common/DateTimeTag";
import DeadlineTag from "../common/DeadlineTag";
import FavoriteButton from "../common/FavoriteButton";
import ProgressBar from "../common/ProgressBar";

interface IMainCardItemProps {
  name: string;
  dateTime: Date;
  registrationEnd?: Date;
  location: string;
  participantCount: number;
  capacity: number;
  image: string;
}

const MainCardItem = ({
  name,
  dateTime,
  registrationEnd,
  location,
  participantCount,
  capacity,
  image,
}: IMainCardItemProps) => {
  const MIN_PARTICIPANT_COUNT = 5; //모임의 최소 인원 수
  const isConfirmed = participantCount > MIN_PARTICIPANT_COUNT; //모임 개설 확정 여부
  const progressPercentage = (participantCount / capacity) * 100; //전체 모임 정원 중 모임 참여자의 비율

  return (
    <>
      <div className="m-auto flex min-w-[343px] flex-col overflow-hidden rounded-3xl border-2 border-gray-100 bg-white md:flex-row lg:flex-row">
        <div className="relative h-[156px] w-full min-w-[280px] md:w-[280px] lg:w-[280px]">
          <Image
            src={image}
            alt={name}
            className="h-full w-full object-cover"
            fill
          ></Image>
          {registrationEnd && (
            <DeadlineTag registrationEndDate={registrationEnd} />
          )}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-7 p-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col items-start justify-center gap-2">
              <div className="flex items-center justify-center">
                <p className="text-lg font-semibold text-gray-800">{name}</p>
                <RxDividerVertical className="text-gray-900" />
                <span className="ml-[3px] text-sm text-gray-700">
                  {location}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <DateTimeTag date={dateTime} />
              </div>
            </div>
            <FavoriteButton isFavorite={false} onToggle={() => {}} />
          </div>
          <div className="flex w-full items-center gap-6">
            <div className="flex flex-1 flex-col items-start gap-2 md:w-[258px] lg:w-[258px]">
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-0.5 text-gray-700">
                  <IoMdPerson size={16} />
                  <span className="text-sm">
                    {participantCount}/{capacity}
                  </span>
                </div>
                {isConfirmed && (
                  <div className="flex items-center justify-center gap-[7px] text-purple-500">
                    <FaCircleCheck />
                    <span className="text-sm">{"개설확정"}</span>
                  </div>
                )}
              </div>
              <ProgressBar progress={progressPercentage} />
            </div>
            <Link
              href=""
              className="flex items-center justify-center gap-2 text-purple-500"
            >
              <span className="font-semibold">{"join now"}</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCardItem;
