import { Skeleton } from "@/components/ui/Skeleton";

const GatheringReviewSkeleton = () => {
  return (
    <Skeleton className="flex h-full min-h-[80vh] flex-col gap-6 p-6 pb-20">
      <Skeleton className="h-7 w-[60%] rounded-full" />
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="mb-5 flex flex-col gap-4">
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-5 w-[90%] rounded-full" />
          <Skeleton className="h-5 w-32 rounded-full" />
        </div>
      ))}
    </Skeleton>
  );
};

export default GatheringReviewSkeleton;
