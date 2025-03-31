import { Skeleton } from "@/components/ui/Skeleton";

const ReviewRatingSkeleton = () => {
  return (
    <section className="mb-6 flex flex-wrap items-center justify-between border-b-2 border-t-2 border-gray-200 bg-white px-6 py-8">
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        <Skeleton className="h-8 w-16 rounded-md" />
        <Skeleton className="h-6 w-32 rounded-md" />
      </div>
      <div className="mt-4 flex flex-1 flex-col gap-2 md:mt-0">
        <Skeleton className="h-5 w-[300px] rounded-md" />
        <Skeleton className="h-5 w-[300px] rounded-md" />
        <Skeleton className="h-5 w-[300px] rounded-md" />
        <Skeleton className="h-5 w-[300px] rounded-md" />
        <Skeleton className="h-5 w-[300px] rounded-md" />
      </div>
    </section>
  );
};

export default ReviewRatingSkeleton;
