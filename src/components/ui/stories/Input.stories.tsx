import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../Input";

const meta = {
  title: "Components/UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel"],
      description: "입력 필드 타입",
    },
    error: {
      control: "radio",
      options: [true, false],
      description: "입력 필드의 오류 상태",
    },
    errorMsg: {
      control: "text",

      description: "입력 필드의 오류 메시지",
    },
  },
  parameters: {
    layout: "centered",
    componentSubtitle: "사용자로부터 텍스트 입력을 받는 컴포넌트입니다.",
    docs: {
      description: {
        component:
          "다양한 형태의 입력 필드를 제공합니다. 상태 표시 기능을 포함합니다.",
      },
    },
  },
  decorators: [
    Story => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    id: "text",
    label: "이름",
    placeholder: "이름을 입력해주세요",
    errorMsg: "이름을 입력해주세요.",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    id: "password",
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요",
  },
};

export const Error: Story = {
  args: {
    type: "text",
    id: "text",
    label: "이름",
    placeholder: "이름을 입력해주세요",
    error: true,
    errorMsg: "이름을 입력해주세요.",
  },
};
