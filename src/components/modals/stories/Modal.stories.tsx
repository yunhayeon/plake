import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Modal, { type ModalProps } from "@/components/modals/Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Providers/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "alert", "mobileFull"],
      description:
        "모달 레이아웃 선택 (default: 기본, alert: 알림창, mobileFull: 모바일에서 전체 화면)",
    },
  },
};

export default meta;
type Story = StoryObj<ModalProps>;

const Template = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="rounded border px-2" onClick={() => setIsOpen(true)}>
        모달 열기
      </button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p className="text-center text-gray-700">이곳은 모달 내용입니다.</p>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: args => <Template {...args} />,
  args: {
    isOpen: false,
    variant: "default",
  },
};

export const Alert: Story = {
  render: args => <Template {...args} />,
  args: {
    isOpen: false,
    variant: "alert",
  },
};

export const MobileFull: Story = {
  render: args => <Template {...args} />,
  args: {
    isOpen: false,
    variant: "mobileFull",
  },
};
