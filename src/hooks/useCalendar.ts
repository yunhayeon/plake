import { ko } from "date-fns/locale";
import { useState } from "react";

import { CalendarProps } from "@/components/ui/Calendar";

interface IUseCalendar {
  defaultDate?: Date;
  disabledAfterDate?: Date;
}

export const useCalendar = (props?: IUseCalendar) => {
  const defaultDate = props?.defaultDate ?? new Date();
  const disabledBeforeDate = new Date();

  const [selectedDate, setSelectedDate] = useState<Date>(defaultDate);

  const handleDateChange = (date: Date | undefined) => {
    if (!date) return;
    setSelectedDate(date);
  };

  const calendarProps: Partial<CalendarProps> = {
    mode: "single",
    selected: selectedDate,
    onSelect: handleDateChange,
    defaultMonth: selectedDate,
    fromDate: props?.disabledAfterDate
      ? disabledBeforeDate.toDateString() ===
        props.disabledAfterDate.toDateString()
        ? new Date(9999, 0, 1) // 모든 날짜를 비활성화
        : disabledBeforeDate
      : disabledBeforeDate,
    toDate: props?.disabledAfterDate
      ? disabledBeforeDate.toDateString() ===
        props.disabledAfterDate.toDateString()
        ? new Date(0) // 모든 날짜를 비활성화
        : props.disabledAfterDate
      : undefined,
    locale: ko,
  };

  const selectDate = (date: Date) => {
    setSelectedDate(date);
  };

  const clearDate = () => {
    setSelectedDate(defaultDate);
  };

  const getSelectedDate = () => {
    return selectedDate;
  };

  return {
    selectedDate,
    selectDate,
    clearDate,
    getSelectedDate,
    calendarProps,
  };
};
