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
      options: ["sm", "md", "lg"],
      description: "스피너 크기 선택 (sm: 24px, md: 32px, lg: 48px)",
    },
    color: {
      control: { type: "radio" },
      options: ["purple", "gray", "white"],
      description: "스피너 색상 선택",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {
  args: {
    size: "lg",
    color: "purple",
  },
};

export const MediumGray: Story = {
  args: {
    size: "md",
    color: "gray",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const WhiteSpinner: Story = {
  args: {
    size: "md",
    color: "white",
  },
};
