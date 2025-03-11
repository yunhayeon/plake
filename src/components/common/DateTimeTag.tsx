import clsx from "clsx";
import dayjs from "dayjs";

interface IDateTimeTagProps {
  type: "date" | "time";
  size?: "small" | "medium";
}

const DateTimeTag = ({ type = "date", size = "medium" }: IDateTimeTagProps) => {
  const now = dayjs();
  const date = now.format("M월 DD일");
  const time = now.format("HH:mm");

  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-[4px] bg-purple-200 py-[2px] text-sm font-medium",
        type === "date" ? "text-black" : "text-purple-600",
        size === "small" && "px-[6px] text-xs",
        size === "medium" && "px-2 text-sm",
      )}
    >
      {type === "date" ? date : time}
    </div>
  );
};

export default DateTimeTag;
