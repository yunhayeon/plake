import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "../Avatar";

const meta = {
  title: "Components/Common/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "default", "large"],
      description: "아바타 크기",
    },
    type: {
      control: { type: "radio" },
      options: ["default", "editable"],
      description: "아바타 타입",
    },
    handleAvatar: {
      action: "clicked",
      description: "아바타 클릭 시 이벤트핸들러",
    },
  },
  parameters: {
    layout: "centered",
    componentSubtitle: "유저의 프로필 사진이나 아이콘을 표시합니다.",
    docs: {
      description: {
        component:
          "유저의 프로필 사진이나 아이콘을 표시합니다. 타입에 따라 기본 아바타 이미지를 보여주거나 유저 프로필을 보여주고, 'editable' 타입일 경우 사용자가 직접 이미지를 업로드할 수 있습니다.",
      },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "기본 아바타입니다.",
      },
    },
  },
  args: {
    imgPath: "",
    size: "default",
    type: "default",
    handleAvatar: () => {},
  },
};
export const UserProfile: Story = {
  parameters: {
    docs: {
      description: {
        story: "유저 프로필 아바타입니다.",
      },
    },
  },
  args: {
    imgPath: "https://picsum.photos/id/237/200/300",
    size: "default",
    type: "default",
    handleAvatar: () => {},
  },
};
