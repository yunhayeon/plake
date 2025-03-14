import type { Meta, StoryObj } from "@storybook/react";

import SubTab from "../SubTab";

const meta: Meta<typeof SubTab> = {
  title: "Components/Navigation/SubTab",
  component: SubTab,
  tags: ["autodocs"],
  argTypes: {
    tabList: {
      control: { type: "object" },
      description: "하위 탭 정보들이 담긴 배열",
    },
  },
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

export const Default: Story = {
  args: {
    tabList: ["전체", "운동", "예술", "미식", "기타"],
  },
};
