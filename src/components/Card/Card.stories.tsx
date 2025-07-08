import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    image: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    buttonText: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    image: 'https://via.placeholder.com/300x200',
    title: 'Card Title',
    description: 'This is the card description.',
    buttonText: 'Read More',
  },
};
