import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/Button";

const meta: Meta<typeof Button> = {
  title: "components/ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
        "purple",
        "purple-secondary",
        "purple-tertiary",
        "purple-outline",
        "purple-outline-secondary",
        "purple-outline-tertiary",
        "gray",
        "gray-outline",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const PurpleButton: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="purple">Purple</Button>
      <Button variant="purple-secondary">Purple Secondary</Button>
      <Button variant="purple-tertiary">Purple Tertiary</Button>
      <Button variant="purple-outline">Purple Outline</Button>
      <Button variant="purple-outline-secondary">
        Purple Outline Secondary
      </Button>
      <Button variant="purple-outline-tertiary">Purple Outline Tertiary</Button>
    </div>
  ),
};

export const GrayButton: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="gray">Gray</Button>
      <Button variant="gray-outline">Gray Outline</Button>
    </div>
  ),
};

export const SizeButton: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button size="default">Default</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">Icon</Button>
    </div>
  ),
};

export const DisabledButton: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button disabled>Disabled</Button>
      <Button disabled variant="outline">
        Disabled Outline
      </Button>
      <Button disabled variant="secondary">
        Disabled Secondary
      </Button>
      <Button disabled variant="ghost">
        Disabled Ghost
      </Button>
      <Button disabled variant="link">
        Disabled Link
      </Button>
      <Button disabled variant="purple">
        Disabled Purple
      </Button>
      <Button disabled variant="purple-outline">
        Disabled Purple Outline
      </Button>
      <Button disabled variant="gray">
        Disabled Gray
      </Button>
      <Button disabled variant="gray-outline">
        Disabled Gray Outline
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button className="flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        Add Item
      </Button>
    </div>
  ),
};
