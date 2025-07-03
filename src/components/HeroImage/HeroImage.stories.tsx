import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    backgroundImage: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    buttonText: { control: 'text' }
  },
};
export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    backgroundImage: 'https://via.placeholder.com/1200x400',
    title: 'Welcome to My Site',
    subtitle: 'This is a subtitle',
    buttonText: 'Learn More',
  },
};
