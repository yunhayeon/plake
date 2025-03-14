import { ko } from "date-fns/locale";
import { useState } from "react";

import { CalendarProps } from "@/components/ui/Calendar";

interface IUseCalendar {
  defaultDate?: Date;
}

export const useCalendar = (props?: IUseCalendar) => {
  const defaultDate = props?.defaultDate ?? new Date();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    defaultDate,
  );
  const [currentMonth, setCurrentMonth] = useState<Date | undefined>(
    defaultDate,
  );

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const calendarProps: Partial<CalendarProps> = {
    mode: "single",
    selected: selectedDate,
    onSelect: handleDateChange,
    month: currentMonth,
    onMonthChange: setCurrentMonth,
    defaultMonth: defaultDate,
    locale: ko,
  };

  const selectDate = (date: Date | undefined) => {
    handleDateChange(date);
    setCurrentMonth(date);
  };

  const clearDate = () => {
    handleDateChange(defaultDate);
    setCurrentMonth(defaultDate);
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
