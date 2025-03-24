import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface IFetchErrorProps {
  reset: () => void;
  className?: string;
}

const FetchError = ({ reset, className }: IFetchErrorProps) => {
  return (
    <div
      className={cn(
        "flex h-full min-h-[80vh] w-full flex-col items-center gap-6 p-10 pb-20",
        className,
      )}
    >
      <p>에러가 발생했습니다.</p>
      <Button variant="purple" onClick={reset}>
        새로고침
      </Button>
    </div>
  );
};

export default FetchError;
