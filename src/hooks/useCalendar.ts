import { addMonths, isSameMonth } from "date-fns";
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

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    defaultDate,
  );

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const calendarProps: Partial<CalendarProps> = {
    mode: "single",
    selected: selectedDate,
    onSelect: handleDateChange,
    month: selectedDate,
    onMonthChange: (month: Date) => {
      if (props?.disabledAfterDate) {
        const oneMonthAfter = addMonths(props.disabledAfterDate, 1);
        if (
          month >= oneMonthAfter ||
          isSameMonth(month, props.disabledAfterDate)
        ) {
          setSelectedDate(props.disabledAfterDate);
          return;
        }
      }
      setSelectedDate(month);
    },
    defaultMonth: defaultDate,
    disabled: props?.disabledAfterDate
      ? { before: disabledBeforeDate, after: props.disabledAfterDate }
      : { before: disabledBeforeDate },
    locale: ko,
  };

  const selectDate = (date: Date | undefined) => {
    handleDateChange(date);
  };

  const clearDate = () => {
    handleDateChange(defaultDate);
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
