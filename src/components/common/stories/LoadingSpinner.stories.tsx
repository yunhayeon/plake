import type { Meta, StoryObj } from "@storybook/react";

import LoadingSpinner from "@/components/common/LoadingSpinner";

const meta: Meta<typeof LoadingSpinner> = {
  title: "Components/Common/LoadingSpinner",
  component: LoadingSpinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md"],
      description: "스피너 크기 선택 (sm: 24px, md: 48px)",
    },
    color: {
      control: { type: "radio" },
      options: ["purple", "gray", "white"],
      description: "스피너 색상 선택",
    },
    zIndex: {
      control: { type: "number" },
      description: "z-index 값 (기본: 20)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {
  args: {
    size: "md",
    color: "gray",
    zIndex: 20,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const PurpleSpinner: Story = {
  args: {
    size: "md",
    color: "purple",
  },
};

export const HighZIndex: Story = {
  args: {
    size: "md",
    color: "gray",
    zIndex: 50,
  },
};
