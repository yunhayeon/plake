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
    registrationEnd: {
      control: { type: "date" },
      description: "모임 마감시간",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DeadlineTag>;

export const HourDeadlineTag: Story = {
  args: { registrationEnd: new Date() },
  parameters: {
    docs: {
      description: {
        story: "마감 당일일 경우의 데드라인 태그입니다.",
      },
    },
  },
};

export const DayDeadlineTag: Story = {
  render: () => {
    const date = new Date();

    return (
      <DeadlineTag
        registrationEnd={new Date(date.setMonth(date.getMonth() + 1))}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "마감까지 하루 이상 남은 경우의 데드라인 태그입니다.",
      },
    },
  },
};
