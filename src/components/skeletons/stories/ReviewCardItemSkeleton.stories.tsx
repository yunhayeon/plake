import type { Meta, StoryObj } from "@storybook/react";

import ReviewCardItemSkeleton from "@/components/skeletons/ReviewCardItemSkeleton";

const meta: Meta<typeof ReviewCardItemSkeleton> = {
  title: "Components/Skeletons/ReviewCardItemSkeleton",
  component: ReviewCardItemSkeleton,
};

export default meta;

type Story = StoryObj<typeof ReviewCardItemSkeleton>;

export const Default: Story = {};
