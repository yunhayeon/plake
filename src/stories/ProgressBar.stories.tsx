import type { Meta, StoryObj } from "@storybook/react";

import ProgressBar from "@/components/common/ProgressBar";

const meta = {
  title: "Components/Common/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    progress: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "진행률 (0-100)",
    },
    color: {
      control: "color",
      description: "프로그레스 바 색상",
    },
    width: {
      control: "text",
      description: "프로그레스 바 너비 (px)",
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 81,
    color: "#9600FF",
  },
  decorators: [
    Story => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export const SmallWidth: Story = {
  args: {
    progress: 45,
    width: "100",
    color: "#FF5733",
  },
};
