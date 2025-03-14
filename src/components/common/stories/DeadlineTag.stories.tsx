import type { Meta, StoryObj } from "@storybook/react";

import DeadlineTag from "@/components/common/DeadlineTag";

const meta: Meta<typeof DeadlineTag> = {
  title: "Components/Common/DeadlineTag",
  component: DeadlineTag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    registrationEndDate: {
      control: { type: "date" },
      description: "모임 마감시간",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DeadlineTag>;

export const Default: Story = {
  args: {},
};
