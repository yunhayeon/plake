import { Skeleton } from "@/components/ui/Skeleton";

const MainCardItemSkeleton = () => {
  return (
    <div className="m-auto flex w-full min-w-[343px] flex-col overflow-hidden rounded-3xl border-2 border-gray-100 bg-white md:flex-row lg:flex-row">
      <div className="relative h-[156px] w-full min-w-[280px] md:w-[280px] lg:w-[280px]">
        <Skeleton className="h-full w-full" />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-7 p-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
            <Skeleton className="h-4 w-32 rounded-full" />
          </div>
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>

        <div className="flex w-full items-center gap-6">
          <div className="flex flex-1 flex-col items-start gap-2 md:w-[258px] lg:w-[258px]">
            <div className="flex items-center justify-center gap-2">
              <Skeleton className="h-5 w-20 rounded-full" />
              <Skeleton className="h-5 w-24 rounded-full" />
            </div>
            <Skeleton className="h-3 w-full rounded-full" />
          </div>
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default MainCardItemSkeleton;
