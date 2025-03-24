"use client";

import clsx from "clsx";

import MyCardItem from "@/app/mypage/_components/MyCardItem";
import { DirectionType, GatheringType, IMyGathering } from "@/types/gathering";

const mockMyGatherings: IMyGathering[] = [
  {
    teamId: 3,
    id: 103,
    name: "주말 조깅 모임",
    type: GatheringType.DALLAEMFIT,
    dateTime: "2025-04-20T08:00:00Z",
    registrationEnd: "2025-04-18T23:59:59Z",
    location: "서울숲 공원",
    participantCount: 4,
    capacity: 25,
    image: "/images/profile-background.png",
    createdBy: 2,
    canceledAt: null,
    joinedAt: "2025-04-01T07:30:00Z",
    isCompleted: true,
    isReviewed: false,
  },
  {
    teamId: 4,
    id: 104,
    name: "워케이션 in 제주",
    type: GatheringType.WORKATION,
    dateTime: "2025-05-01T10:00:00Z",
    registrationEnd: "2025-04-28T23:59:59Z",
    location: "제주 애월 카페",
    participantCount: 5,
    capacity: 10,
    image: "/images/profile-background.png",
    createdBy: 5,
    canceledAt: null,
    joinedAt: "2025-04-05T09:00:00Z",
    isCompleted: false,
    isReviewed: false,
  },
];

const MyCardList = ({ direction }: { direction: DirectionType }) => {
  const getStatusProps = (gathering: IMyGathering) => {
    if (direction !== "mypage") return null;

    if (gathering.isCompleted) {
      return [{ label: "이용 완료", className: "bg-gray-100 text-gray-500" }];
    } else {
      if (gathering.participantCount >= 5) {
        return [
          { label: "이용 예정", className: "bg-purple-100 text-purple-600" },
          {
            label: "개설 확정",
            className: "border border-purple-200 text-purple-500",
          },
        ];
      } else {
        return [
          { label: "이용 예정", className: "bg-purple-100 text-purple-600" },
          {
            label: "개설 대기",
            className: "border border-gray-200 text-gray-500",
          },
        ];
      }
    }
  };

  const getButtonProps = (gathering: IMyGathering) => {
    if (direction === "gathering") return null;

    if (!gathering.isCompleted) {
      return {
        label: "예약 취소하기",
        variant: "purple-outline" as const,
        onClick: () => console.log(`예약 취소 요청: ${gathering.id}`),
      };
    } else {
      if (gathering.isReviewed) {
        return {
          label: "내가 쓴 리뷰 보기",
          variant: "purple" as const,
          onClick: () => console.log(`내가 쓴 리뷰 보기: ${gathering.id}`),
        };
      } else {
        return {
          label: "리뷰 작성하기",
          variant: "purple" as const,
          onClick: () => console.log(`리뷰 작성하기: ${gathering.id}`),
        };
      }
    }
  };

  return (
    <div>
      {mockMyGatherings.map((gathering, index) => (
        <div
          key={gathering.id}
          className={clsx(
            "py-6",
            index !== mockMyGatherings.length - 1 &&
              "border-b-2 border-dashed border-gray-200",
          )}
        >
          <MyCardItem
            gathering={gathering}
            buttonProps={getButtonProps(gathering)}
            statusProps={getStatusProps(gathering)}
          />
        </div>
      ))}
    </div>
  );
};

export default MyCardList;
