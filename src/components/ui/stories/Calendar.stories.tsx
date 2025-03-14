import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Calendar } from "@/components/ui/Calendar";
import { useCalendar } from "@/hooks/useCalendar";

const meta = {
  title: "components/ui/calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onSelect: { action: "selected" },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithDefaultDate: Story = {
  render: () => {
    const { calendarProps } = useCalendar({
      defaultDate: new Date("2025-10-14"),
    });

    return <Calendar {...calendarProps} />;
  },
};

export const WithSelectedDate: Story = {
  render: () => {
    const { getSelectedDate, calendarProps } = useCalendar();

    return (
      <div className="flex flex-col gap-4">
        <Calendar {...calendarProps} />
        <p className="text-center">
          Selected Date: {getSelectedDate()?.toLocaleDateString()}
        </p>
      </div>
    );
  },
};

export const WithClearDate: Story = {
  render: () => {
    const { clearDate, calendarProps } = useCalendar();

    return (
      <div className="flex flex-col gap-4">
        <Calendar {...calendarProps} />
        <button onClick={clearDate}>Clear Date</button>
      </div>
    );
  },
};

export const WithDateChange: Story = {
  render: () => {
    const { calendarProps, selectDate } = useCalendar();
    const [date, setDate] = useState<Date | undefined>(undefined);

    return (
      <div className="flex flex-col gap-4">
        <Calendar {...calendarProps} />
        <button onClick={() => selectDate(date)}>Select Date</button>
        <input
          type="date"
          value={date?.toISOString()}
          onChange={e => setDate(new Date(e.target.value))}
        />
      </div>
    );
  },
};
