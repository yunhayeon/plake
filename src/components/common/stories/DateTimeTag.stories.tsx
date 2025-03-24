import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";

import DateTimeTag from "@/components/common/DateTimeTag";

const meta = {
  title: "Components/Common/DateTimeTag",
  component: DateTimeTag,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "날짜와 시간을 표시하는 태그 컴포넌트입니다. `size`prop으로 크기를 조절할 수 있으며, `date` prop으로 표시할 날짜를 지정할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium"],
    },
  },
} satisfies Meta<typeof DateTimeTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
    date: dayjs(new Date()),
  },
  parameters: {
    docs: {
      description: {
        story:
          "기본적으로 date prop에 날짜를 지정하면 날짜와 시간을 표시합니다.",
      },
    },
  },
};

export const Small: Story = {
  args: {
    size: "small",
    date: dayjs(new Date()),
  },
  parameters: {
    docs: {
      description: {
        story:
          "size prop을 small로 지정하면 작은 크기의 날짜와 시간을 표시합니다.",
      },
    },
  },
};
