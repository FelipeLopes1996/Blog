import { Meta, Story } from '@storybook/react/types-6-0';
import { Switch } from '.';

export default {
  title: 'Switch',
  component: Switch,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Switch {...args} />
      <br />
      <p>oi</p>
      <p>oi</p>
      <p>oi</p>
      <p>oi</p>
      <p>oi</p>
      <p>oi</p>
    </div>
  );
};
