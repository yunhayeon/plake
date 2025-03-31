import clsx from "clsx";
import dayjs from "dayjs";
import { FaUser } from "react-icons/fa6";

interface MyCardTitleProps {
  hasLabel?: boolean;
  name: string;
  location: string;
  dateTime: string;
  participantCount: number;
  capacity: number;
}

const MyCardTitle = ({
  hasLabel = false,
  name,
  location,
  dateTime,
  participantCount,
  capacity,
}: MyCardTitleProps) => {
  return (
    <div>
      <div
        className={clsx(
          "mb-1.5 flex flex-wrap truncate",
          hasLabel ? "items-center" : "flex-col gap-2",
        )}
      >
        <p
          className={clsx(
            "truncate text-lg font-semibold text-gray-900",
            hasLabel && "after:px-2 after:content-['|']",
          )}
        >
          {name}
        </p>
        <p className="text-sm text-gray-700">{location}</p>
      </div>
      <div className="flex gap-3 text-sm font-medium text-gray-700">
        <p>{dayjs(dateTime).format("M월 DD일 · HH:mm")}</p>
        <div className="flex items-center">
          <FaUser size={12} />
          <p>
            {participantCount}/{capacity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCardTitle;
