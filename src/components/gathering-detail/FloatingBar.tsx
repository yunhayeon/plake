"use client";

import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { useCancelGathering } from "@/hooks/gathering/useCancelGathering";
import { useSuspenseGatheringDetail } from "@/hooks/gathering/useGatheringDetail";
import { useJoinGathering } from "@/hooks/gathering/useJoinGathering";
import { useIsParticipant } from "@/hooks/gathering/useParticipants";
import useModalStore from "@/stores/useModalStore";

interface IFloatingBarProps {
  id: string;
}

const FloatingBar = ({ id }: IFloatingBarProps) => {
  const pathname = usePathname();
  const currentUserId = 1667; // 임시 currentUserId: 1667(주최자), 1602(참여자)

  const openAlert = useModalStore(state => state.openAlert);
  const {
    data: { createdBy },
  } = useSuspenseGatheringDetail(id);
  const { handleJoinGathering, handleLeaveGathering } = useJoinGathering(
    id,
    currentUserId,
  );
  const { handleCancelGathering } = useCancelGathering(
    id,
    currentUserId === createdBy,
  );

  const isParticipant = useIsParticipant(id, currentUserId);
  const isOrganizer = currentUserId === createdBy;

  const handleCopyLink = () => {
    const url = `${window.location.origin}${pathname}`;
    navigator.clipboard.writeText(url);
    openAlert("링크가 복사되었습니다.");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex min-h-[84px] items-center border-t-2 border-gray-200 bg-white py-5">
      <div className="base-wrap flex h-full w-full flex-wrap items-start justify-between gap-5 xs:flex-nowrap">
        <div className="flex h-full flex-col gap-2">
          <p className="text-base font-semibold">
            {"더 건강한 나와 팀을 위한 프로그램 🏃‍️️"}
          </p>
          <p className="text-xs font-medium">
            {
              "국내 최고 웰니스 전문가와 프로그램을 통해 지친 몸과 마음을 회복해봐요"
            }
          </p>
        </div>
        {isOrganizer ? (
          <div className="flex gap-2">
            <Button onClick={handleCancelGathering} variant="purple-outline">
              취소하기
            </Button>
            <Button variant="purple" onClick={handleCopyLink}>
              공유하기
            </Button>
          </div>
        ) : (
          <>
            {isParticipant ? (
              <Button onClick={handleLeaveGathering} variant="purple-outline">
                참여 취소하기
              </Button>
            ) : (
              <Button onClick={handleJoinGathering} variant="purple">
                참여하기
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FloatingBar;
