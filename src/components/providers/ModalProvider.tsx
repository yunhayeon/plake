import ConfirmAlertModal from "@/components/modals/confirm-alert-modal/ConfirmAlertModal";
import CreateReviewModal from "@/components/modals/create-review-modal/CreateReviewModal";

const ModalProvider = () => {
  return (
    <>
      <ConfirmAlertModal />
      <CreateReviewModal />
    </>
  );
};

export default ModalProvider;
