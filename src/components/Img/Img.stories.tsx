import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    rounded: { control: 'boolean' }
  },
};
export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image',
    width: '150px',
    height: '150px',
    rounded: false,
  },
};

export const Rounded: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Rounded Image',
    width: '150px',
    height: '150px',
    rounded: true,
  },
};
