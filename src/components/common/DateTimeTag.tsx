import clsx from "clsx";
import dayjs from "dayjs";

interface IDateTimeTagProps {
  type: "date" | "time";
  size?: "small" | "medium";
  date?: Date;
}

const DateTimeTag = ({
  type = "date",
  size = "medium",
  date,
}: IDateTimeTagProps) => {
  const currentDate = dayjs(date);
  const dateText = currentDate.format("M월 DD일");
  const timeText = currentDate.format("HH:mm");

  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-[4px] bg-purple-200 py-[2px] text-sm font-medium",
        type === "date" ? "text-black" : "text-purple-600",
        size === "small" && "px-[6px] text-xs",
        size === "medium" && "px-2 text-sm",
      )}
    >
      {type === "date" ? dateText : timeText}
    </div>
  );
};

export default DateTimeTag;
