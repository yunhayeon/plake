import dayjs from "dayjs";
import { FaClock } from "react-icons/fa6";

interface IDeadlineTagProps {
  registrationEndDate: Date;
}

const DeadlineTag = ({ registrationEndDate }: IDeadlineTagProps) => {
  const deadlineHour = dayjs(registrationEndDate).format("H");

  return (
    <div className="absolute right-0 z-10 flex h-8 w-[120px] min-w-[120px] items-center justify-center gap-2 rounded-bl-xl bg-purple-600 text-white">
      <FaClock size={14} />
      <span className="text-xs">오늘 {deadlineHour}시 마감</span>
    </div>
  );
};

export default DeadlineTag;
