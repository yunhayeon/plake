import clsx from "clsx";

import { StatusProps } from "@/types/gathering";

interface MyCardLabelsProps {
  statuses: StatusProps[];
}

const MyCardLabels = ({ statuses }: MyCardLabelsProps) => {
  if (!statuses?.length) return null;

  return (
    <div className="mb-2.5 flex gap-2">
      {statuses.map((status, idx) => (
        <div
          key={idx}
          className={clsx(
            "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium",
            status.className,
          )}
        >
          {status.icon && <span>{status.icon}</span>}
          {status.label}
        </div>
      ))}
    </div>
  );
};

export default MyCardLabels;
