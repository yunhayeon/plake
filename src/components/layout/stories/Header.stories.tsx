import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Header from "../Header";

const meta: Meta<typeof Header> = {
  title: "Components/Layout/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    componentSubtitle: "사이트 상단에 표시되는 헤더 컴포넌트",
    docs: {
      description: {
        component:
          "로고, 네비게이션, 프로필을 표시하고 사이드바를 열 수 있는 헤더 컴포넌트입니다.",
      },
    },
  },

  decorators: [
    Story => (
      <div style={{ padding: "0px", margin: "0px" }}>
        <Story />
        <div
          style={{
            padding: "80px",
            backgroundColor: "#dcdcdc",
          }}
        >
          <p>페이지 콘텐츠 영역</p>
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "모바일 환경에서의 모습입니다. 사이드바 토글 동작을 확인할 수 있습니다. 햄버거 메뉴를 클릭하여 사이드바를 열어보세요.",
      },
    },
  },
};
export const TabletSize: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    docs: {
      description: {
        story: "태블릿 환경에서의 모습입니다.",
      },
    },
  },
};

export const DesktopSize: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    docs: {
      description: {
        story: "데스크탑 환경에서의 모습입니다.",
      },
    },
  },
};
