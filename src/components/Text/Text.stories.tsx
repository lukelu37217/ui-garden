import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    size: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: 'Hello Text',
    size: '16px',
  },
};
