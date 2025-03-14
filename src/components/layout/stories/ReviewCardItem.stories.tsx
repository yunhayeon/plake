import type { Meta, StoryObj } from "@storybook/react";

import { GatheringType } from "@/types/gathering";

import ReviewCardItem from "../ReviewCardItem";

const meta: Meta<typeof ReviewCardItem> = {
  title: "Components/Layout/ReviewCardItem",
  component: ReviewCardItem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    componentSubtitle: "리뷰 카드 아이템 컴포넌트",
    docs: {
      description: {
        component: "리뷰 정보를 표시하는 컴포넌트입니다.",
      },
    },
  },
  args: {
    review: {
      id: "1",
      teamId: "1",
      comment:
        "따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요.",
      score: 5,
      createdAt: "2025-03-12T08:49:03.060Z",
      User: {
        id: "1",
        name: "김코드",
        teamId: "1",
        image: null,
      },
      Gathering: {
        id: 1,
        name: "달램핏 오피스 스트레칭",
        location: "강남구",
        teamId: "",
        type: GatheringType.MINDFULNESS,
        dateTime: "",
        registrationEnd: "",
        capacity: 0,
        participantCount: 0,
        image: null,
        createdBy: 0,
        canceledAt: null,
      },
    },
  },
  decorators: [
    Story => (
      <div className="flex max-w-[1000px] flex-col gap-6 p-14">
        <Story />
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ReviewCardItem>;

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
