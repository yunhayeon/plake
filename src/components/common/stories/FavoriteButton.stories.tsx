import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import FavoriteButton from "@/components/common/FavoriteButton";

const meta: Meta<typeof FavoriteButton> = {
  title: "Common/FavoriteButton",
  component: FavoriteButton,
  tags: ["autodocs"],
  argTypes: {
    isFavorite: {
      control: { type: "boolean" },
      description: "찜 상태 (true: 찜한 상태, false: 찜하지 않은 상태)",
    },
    onToggle: {
      action: "clicked",
      description: "찜 상태 변경 핸들러",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FavoriteButton>;

export const Default: Story = {
  args: {
    isFavorite: false,
  },
};

export const Favorited: Story = {
  args: {
    isFavorite: true,
  },
};

export const Interactive: Story = {
  render: args => {
    const [isFavorite, setIsFavorite] = useState(args.isFavorite);
    return (
      <FavoriteButton
        isFavorite={isFavorite}
        onToggle={() => setIsFavorite(prev => !prev)}
      />
    );
  },
  args: {
    isFavorite: false,
  },
};
