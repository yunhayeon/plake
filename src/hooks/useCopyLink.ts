import { usePathname } from "next/navigation";

import useModalStore from "@/stores/useModalStore";

const useCopyLink = () => {
  const pathname = usePathname();
  const openAlert = useModalStore(state => state.openAlert);

  const handleCopyLink = () => {
    const url = `${window.location.origin}${pathname}`;
    navigator.clipboard.writeText(url);
    openAlert("링크가 복사되었습니다.");
  };

  return { handleCopyLink };
};

export default useCopyLink;
