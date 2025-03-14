import type { Meta, StoryObj } from "@storybook/react";

import Tab from "../Tab";

const meta: Meta<typeof Tab> = {
  title: "Components/Navigation/Tab",
  component: Tab,
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

type Story = StoryObj<typeof Tab>;

export const Default: Story = {};
