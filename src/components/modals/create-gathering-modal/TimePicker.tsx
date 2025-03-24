import dayjs from "dayjs";
import { useState } from "react";

import { Button } from "@/components/ui/Button";

const baseStyle =
  "m-[10px] flex h-[100px] md:h-[300px] flex-col gap-[10px] overflow-y-scroll pl-3";

interface ITimePickerProps {
  selectedDate?: Date;
  setValue?: (value: Date) => void;
}

const TimePicker = ({ selectedDate, setValue }: ITimePickerProps) => {
  const [selectedHour, setSelectedHour] = useState<number>(12);
  const [selectedMinute, setSelectedMinute] = useState<number>(0);
  const [selectedAmPm, setSelectedAmPm] = useState<string>("PM");

  const updateDateTime = (
    hour: number = selectedHour,
    minute: number = selectedMinute,
    ampm: string = selectedAmPm,
  ) => {
    if (!selectedDate || !setValue) return;

    let adjustedHour = hour;

    if (ampm === "PM" && hour !== 12) {
      adjustedHour = hour + 12;
    } else if (ampm === "AM" && hour === 12) {
      adjustedHour = 0;
    }

    const formattedDateTime = new Date(
      dayjs(selectedDate)
        .hour(adjustedHour)
        .minute(minute)
        .format("YYYY-MM-DD hh:mm A"),
    );

    setValue(formattedDateTime);
  };

  return (
    <section className="flex gap-2 divide-x divide-gray-200">
      <div className={baseStyle}>
        {Array.from({ length: 12 }).map((_, index) => {
          const hour = index === 0 ? 12 : index;
          return (
            <Button
              variant={selectedHour === hour ? "purple" : "ghost"}
              key={index}
              onClick={() => {
                setSelectedHour(hour);
                updateDateTime(hour);
              }}
            >
              {hour.toString().padStart(2, "0")}
            </Button>
          );
        })}
      </div>
      <div className={baseStyle}>
        {Array.from({ length: 12 }, (_, index) => index * 5).map(minute => (
          <Button
            variant={selectedMinute === minute ? "purple" : "ghost"}
            key={minute}
            onClick={() => {
              setSelectedMinute(minute);
              updateDateTime(selectedHour, minute);
            }}
          >
            {minute.toString().padStart(2, "0")}
          </Button>
        ))}
      </div>
      <div className={baseStyle}>
        <Button
          variant={selectedAmPm === "PM" ? "purple" : "ghost"}
          onClick={() => {
            setSelectedAmPm("PM");
            updateDateTime(selectedHour, selectedMinute, "PM");
          }}
        >
          {"PM"}
        </Button>
        <Button
          variant={selectedAmPm === "AM" ? "purple" : "ghost"}
          onClick={() => {
            setSelectedAmPm("AM");
            updateDateTime(selectedHour, selectedMinute, "AM");
          }}
        >
          {"AM"}
        </Button>
      </div>
    </section>
  );
};

export default TimePicker;
