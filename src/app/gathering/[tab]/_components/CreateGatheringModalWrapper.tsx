"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import CreateGatheringModal from "@/components/modals/create-gathering-modal/CreateGatheringModal";
import { Button } from "@/components/ui/Button";
import useModalStore from "@/stores/useModalStore";
import useUserStore from "@/stores/useUserStore";

const CreateGatheringModalWrapper = () => {
  const router = useRouter();
  const openConfirm = useModalStore(state => state.openConfirm);
  const user = useUserStore(state => state.user);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickButton = () => {
    if (user) setIsOpen(true);
    else {
      openConfirm(
        "로그인이 필요한 서비스입니다. 로그인 후 이용해주세요.",
        () => {
          router.replace("/login");
        },
      );
    }
  };

  return (
    <>
      <Button
        variant="purple"
        className="h-10 w-[94px] md:h-11 md:w-28"
        onClick={onClickButton}
      >
        모임 만들기
      </Button>
      <CreateGatheringModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default CreateGatheringModalWrapper;
