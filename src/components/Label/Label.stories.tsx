import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
  },
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Label Text',
    color: 'black',
  },
};
