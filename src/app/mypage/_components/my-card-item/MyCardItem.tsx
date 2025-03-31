import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

interface MyCardItemProps {
  id: number;
  isLast: boolean;
  children: ReactNode;
}

const MyCardItem = ({ id, isLast, children }: MyCardItemProps) => {
  return (
    <div
      className={clsx(
        "py-6",
        !isLast && "border-b-2 border-dashed border-gray-200",
      )}
    >
      <Link
        href={`/gathering/detail/${id}`}
        className="flex w-full flex-col gap-4 sm:flex-row"
      >
        {children}
      </Link>
    </div>
  );
};

export default MyCardItem;
