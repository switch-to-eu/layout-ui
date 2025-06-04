import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Label } from './Label';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="notifications" defaultChecked />
        <Label htmlFor="notifications">Email notifications</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="marketing" />
        <Label htmlFor="marketing">Marketing emails</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="updates" defaultChecked />
        <Label htmlFor="updates">Product updates</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled" className="text-muted-foreground">
          Disabled option
        </Label>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: function Component() {
    const [checked, setChecked] = React.useState(false);

    const handleCheckedChange = (value: boolean | "indeterminate") => {
      setChecked(value === true);
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="interactive"
            checked={checked}
            onCheckedChange={handleCheckedChange}
          />
          <Label htmlFor="interactive">
            {checked ? 'Checked!' : 'Click me'}
          </Label>
        </div>

        <p className="text-sm text-muted-foreground">
          Status: {checked ? 'Checked' : 'Unchecked'}
        </p>
      </div>
    );
  },
};