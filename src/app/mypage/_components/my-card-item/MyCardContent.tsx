import clsx from "clsx";
import { ReactNode } from "react";

interface MyCardContentProps {
  hasAction: boolean;
  children: ReactNode;
}

const MyCardContent = ({ hasAction, children }: MyCardContentProps) => {
  return (
    <div
      className={clsx(
        "flex min-w-0 flex-col justify-between sm:h-auto sm:flex-1",
        hasAction && "h-[152px]",
      )}
    >
      {children}
    </div>
  );
};

export default MyCardContent;
