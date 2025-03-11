import type { Meta, StoryObj } from "@storybook/react";

import Rating from "@/components/common/Rating";

const meta = {
  title: "Components/Common/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: { type: "number", min: 0, max: 5, step: 0.5 },
      description: "평점 (0-5)",
    },
    isEditable: {
      control: "boolean",
      description: "평점 수정 가능 여부",
    },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 3.5,
    isEditable: false,
  },
};

export const FullRating: Story = {
  args: {
    rating: 5,
    isEditable: false,
  },
};

export const EmptyRating: Story = {
  args: {
    rating: 0,
    isEditable: false,
  },
};
