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
      id: {
        control: { type: "text" },
        description: "모임 아이디",
      },
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
      firstPage: {
        control: { type: "boolean" },
        description:
          "첫번째 페이지인 경우 true를 반환. (Next Image 최적화를 위해 첫번째 페이지에서만 priority를 설정)",
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
  render: () => {
    const date = new Date();

    return (
      <MainCardItem
        id={1}
        name={"달램핏 오피스 스트레칭"}
        dateTime={date}
        registrationEnd={new Date(date.setMonth(date.getMonth() + 1))}
        location={"강남구"}
        participantCount={6}
        capacity={20}
        image={"https://picsum.photos/200/300"}
        firstPage={true}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "마감되지 않은 카드의 모습입니다.",
      },
    },
  },
};

export const ClosedCardItem: Story = {
  render: () => {
    const date = new Date();

    return (
      <MainCardItem
        id={1}
        name={"달램핏 오피스 스트레칭"}
        dateTime={date}
        registrationEnd={new Date(date.setDate(date.getDay() - 1))}
        location={"강남구"}
        participantCount={6}
        capacity={20}
        image={"https://picsum.photos/200/300"}
        firstPage={true}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "마감된 카드 예시입니다.",
      },
    },
  },
};
