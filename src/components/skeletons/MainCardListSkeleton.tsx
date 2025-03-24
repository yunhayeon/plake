import MainCardItemSkeleton from "./MainCardItemSkeleton";

const MainCardListSkeleton = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <MainCardItemSkeleton key={index} />
        ))}
      </div>
    </>
  );
};

export default MainCardListSkeleton;
