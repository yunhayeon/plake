import clsx from "clsx";
import { useShallow } from "zustand/shallow";

import Modal from "@/components/modals/Modal";
import { Button } from "@/components/ui/Button";
import useModalStore from "@/stores/useModalStore";

const ConfirmAlertModal = () => {
  const { isOpen, onClose, type, title, onConfirm } = useModalStore(
    useShallow(state => ({
      isOpen: state.isOpen,
      onClose: state.onClose,
      type: state.type,
      title: state.title,
      onConfirm: state.onConfirm,
    })),
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex w-full flex-col items-center gap-6">
        <p className="font-medium text-gray-900">{title}</p>
        <div
          className={clsx(
            "flex w-full gap-2",
            type === "alert" && "justify-end",
            type === "confirm" && "justify-center",
          )}
        >
          {type === "confirm" && (
            <Button
              variant="purple-outline"
              className="w-[120px]"
              onClick={onClose}
            >
              취소
            </Button>
          )}
          <Button
            variant="purple"
            className="w-[120px]"
            onClick={() => onConfirm()}
          >
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmAlertModal;
