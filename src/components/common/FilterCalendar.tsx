"use client";

import { ko } from "date-fns/locale";
import dayjs from "dayjs";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import { Button } from "@/components/ui/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";

import { Calendar } from "../ui/Calendar";

const FilterCalendar = () => {
  const { setSearchParams } = useCustomSearchParams();

  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleClick = (type?: string) => {
    const formatDate = dayjs(date).format("YYYY-MM-DD");
    let value = "";

    if (type === "reset") {
      setDate(new Date());
      value = "";
    } else {
      value = formatDate;
    }
    setSearchParams({
      date: value,
    });

    setSelectedDate(type === "reset" ? null : formatDate);
    setIsCalendarOpen(false);
  };

  return (
    <>
      <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className="w-[110px] min-w-[110px] rounded-xl bg-white px-3 py-2 hover:bg-white"
          >
            <span className="text-sm font-normal text-gray-800">
              {selectedDate || "날짜 전체"}
            </span>
            <IoMdArrowDropdown size={16} color="black" className="ml-2.5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto translate-y-4 rounded-xl px-[43px] py-6"
          align="start"
        >
          <Calendar
            mode="single"
            selected={date}
            onDayClick={setDate}
            disabled={date =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
            locale={ko}
          />
          <div className="flex items-center justify-center gap-3">
            <Button
              variant={"purple-outline"}
              className="h-[40px] w-[118px]"
              onClick={() => {
                handleClick("reset");
              }}
            >
              초기화
            </Button>
            <Button
              variant={"purple"}
              className="h-[40px] w-[118px]"
              onClick={() => {
                handleClick();
              }}
            >
              적용
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default FilterCalendar;
