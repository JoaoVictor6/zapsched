
import type { Meta, StoryObj } from '@storybook/react';
import { Notification, NotificationVariant } from './Notification';

const meta: Meta = {
  title: 'Example/Notification',
  component: Notification,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    variant: NotificationVariant.INFO
  },
  argTypes: {
    variant: {
      mapping: NotificationVariant
    }
  }
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultNotification: Story = {};
