import type { Meta, StoryObj } from "@storybook/react";
import Map from "@/components/Map/Map";

const meta: Meta = {
  title: "Example/Map",
  component: Map,
  tags: ["docsPage"],
  argTypes: {},
} satisfies Meta<typeof Map>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: 200,
  },
};
