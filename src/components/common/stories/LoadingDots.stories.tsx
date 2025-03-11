import type { Meta, StoryObj } from "@storybook/react";

import LoadingDots from "@/components/common/LoadingDots";

const meta: Meta<typeof LoadingDots> = {
  title: "Components/Common/LoadingDots",
  component: LoadingDots,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["gray", "purple"],
      description: "로딩 점의 색상 선택",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingDots>;

export const Default: Story = {
  args: {
    color: "gray",
  },
};

export const Purple: Story = {
  args: {
    color: "purple",
  },
};
