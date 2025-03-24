import { Skeleton } from "@/components/ui/Skeleton";

const ReviewCardItemSkeleton = () => {
  return (
    <article className="flex flex-col gap-6 md:flex-row">
      <div className="relative h-[156px] w-full max-w-[280px] overflow-hidden rounded-3xl">
        <Skeleton className="h-full w-full" />
      </div>

      <div className="flex min-h-[156px] flex-1 flex-col justify-between">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-5 w-24 self-start rounded-full" />
          <Skeleton className="h-4 w-3/5 rounded-md" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Skeleton className="h-4 w-24 rounded-full" />
            <Skeleton className="h-4 w-20 rounded-full" />
          </div>

          <div className="flex items-center gap-1">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-4 w-16 rounded-full" />
            <Skeleton className="h-4 w-16 rounded-full" />
          </div>

          <hr className="border-b-2 border-dashed border-gray-200" />
        </div>
      </div>
    </article>
  );
};

export default ReviewCardItemSkeleton;
