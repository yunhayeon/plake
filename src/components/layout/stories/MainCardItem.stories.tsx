import type { Meta, StoryObj } from "@storybook/react";

import MainCardItem from "../MainCardItem";

const meta: Meta<typeof MainCardItem> = {
  title: "Components/Layout/MainCardItem",
  component: MainCardItem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    componentSubtitle: "모임 목록 카드",
    artTypes: {
      name: {
        control: { type: "text" },
        description: "모임 이름",
      },
      dateTime: {
        control: { type: "date" },
        description: "모임 날짜 및 시간 (YYYY-MM-DDTHH:MM:SS)",
      },
      registrationEnd: {
        control: { type: "date" },
        description: "모임 모집 마감 날짜 및 시간 (YYYY-MM-DDTHH:MM:SS)",
      },
      location: {
        control: { type: "text" },
        description: "모임 장소",
      },
      particpantCount: {
        control: { type: "number" },
        description: "모임 참여인 수",
      },
      capacity: {
        control: { type: "number" },
        description: "모집 정원",
      },
      image: {
        control: { type: "string" },
        description: "모임 이미지 url",
      },
    },
    docs: {
      description: {
        component: "모임의 정보를 표시하는 카드 컴포넌트입니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MainCardItem>;

export const Default: Story = {
  args: {
    name: "달램핏 오피스 스트레칭",
    dateTime: new Date(),
    registrationEnd: new Date(),
    location: "강남구",
    participantCount: 6,
    capacity: 20,
    image: "https://picsum.photos/200/300",
  },
  parameters: {
    docs: {
      description: {
        story: "PC 화면에서의 카드 컴포넌트 모습입니다.",
      },
    },
  },
};
