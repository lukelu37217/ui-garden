import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'radioGroup',
    value: 'option1',
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Option 2',
    name: 'radioGroup',
    value: 'option2',
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Option',
    name: 'radioGroup',
    value: 'disabledOption',
    checked: false,
    disabled: true,
  },
};
