import type { Meta, StoryObj } from "@storybook/react";

import DateTimeTag from "@/components/common/DateTimeTag";

const meta = {
  title: "Components/Common/DateTimeTag",
  component: DateTimeTag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["date", "time"],
    },
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
    type: "date",
    size: "medium",
  },
};

export const Time: Story = {
  args: {
    type: "time",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    type: "date",
    size: "small",
  },
};
