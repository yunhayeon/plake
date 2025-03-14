import { Skeleton } from "@/components/ui/Skeleton";

const GatheringInformationSkeleton = () => {
  return (
    <Skeleton className="flex min-h-[270px] flex-1 flex-col gap-6 rounded-3xl px-1 py-6">
      <section className="mb-10 flex flex-col gap-2 px-6">
        <div className="flex flex-col gap-1">
          <Skeleton className="h-6 w-[80%] rounded-full" />
          <Skeleton className="h-4 w-[60%] rounded-full" />
        </div>
        <Skeleton className="h-5 w-32 rounded-full" />
      </section>
      <section className="flex flex-col gap-2 px-6">
        <Skeleton className="h-5 w-24 rounded-full" />
        <Skeleton className="h-5 w-full rounded-full" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-5 w-24 rounded-full" />
        </div>
      </section>
    </Skeleton>
  );
};

export default GatheringInformationSkeleton;
