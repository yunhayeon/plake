import { Skeleton } from "@/components/ui/Skeleton";

const MainCarouselSkeleton = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex w-[1500px] flex-col gap-5">
        <Skeleton className="h-[40px] w-[200px]" />
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="ml-[15px] flex w-[150px] flex-col gap-2 first:ml-0 md:w-[240px] lg:w-[260px]"
            >
              <Skeleton className="h-[150px] md:h-[200px] lg:h-[250px]" />
              <Skeleton className="h-[30px] w-[80%]" />
              <Skeleton className="h-[20px] w-[50%]" />
              <Skeleton className="h-[20px] w-[60%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainCarouselSkeleton;
