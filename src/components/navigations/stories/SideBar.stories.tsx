import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import SideBar from "../SideBar";

const meta: Meta<typeof SideBar> = {
  title: "Components/Navigation/SideBar",
  component: SideBar,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
      description: "사이드바 열림 여부",
    },
    onToggle: {
      action: "clicked",
      description: "사이드바 토글 핸들러",
    },
  },
  args: {
    isOpen: false,
    onToggle: () => {},
  },
  parameters: {
    componentSubtitle: "모바일 스크린에서 보여질 네비게이션 사이드바",
    docs: {
      description: {
        component:
          "모바일 스크린크기에서 네비게이션을 보여주는 컴포넌트입니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
  args: {
    isOpen: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "기본 상태인 닫힌 사이드바입니다. 화면에 보이지 않는 상태로 표시됩니다.",
      },
    },
  },
};

export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story: "메뉴 버튼을 눌러서 사이드바를 확인해보세요.",
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div>
        <SideBar isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      </div>
    );
  },
};
