import type { Meta, StoryObj } from "@storybook/react";

import SubTab from "../SubTab";

const meta: Meta<typeof SubTab> = {
  title: "Components/Navigation/SubTab",
  component: SubTab,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "하위 타입 탭",
    docs: {
      description: {
        component: "하위 타입 별 정보를 보여주는 탭입니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SubTab>;

export const Default: Story = {};
