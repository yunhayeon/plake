import type { Meta, StoryObj } from "@storybook/react";

import MainCardItemSkeleton from "@/components/skeletons/MainCardItemSkeleton";

const meta: Meta<typeof MainCardItemSkeleton> = {
  title: "Components/Skeletons/MainCardItemSkeleton",
  component: MainCardItemSkeleton,
};

export default meta;

type Story = StoryObj<typeof MainCardItemSkeleton>;

export const Default: Story = {};
