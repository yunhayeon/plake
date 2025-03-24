import CreateGatheringModal from "@/components/modals/create-gathering-modal/CreateGatheringModal";

const GatheringLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <CreateGatheringModal />
    </>
  );
};

export default GatheringLayout;
