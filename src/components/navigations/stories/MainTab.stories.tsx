import type { Meta, StoryObj } from "@storybook/react";

import MainTab from "../MainTab";

const meta: Meta<typeof MainTab> = {
  title: "Components/Navigation/Tab",
  component: MainTab,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "타입 탭",
    docs: {
      description: {
        component: "타입 별 정보를 보여주는 탭입니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MainTab>;

export const Default: Story = {};
