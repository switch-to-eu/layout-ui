import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { Input } from './Input';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Label',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">I agree to the terms and conditions</Label>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="username">
        Username <span className="text-red-500">*</span>
      </Label>
      <Input id="username" placeholder="Enter username" />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Enter password" />
      <p className="text-sm text-muted-foreground">
        Must be at least 8 characters long
      </p>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-6 max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name</Label>
        <Input id="firstName" placeholder="John" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name</Label>
        <Input id="lastName" placeholder="Doe" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">
          Bio <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Input id="bio" placeholder="Tell us about yourself" />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter" />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="disabled" className="text-muted-foreground">
        Disabled Field
      </Label>
      <Input id="disabled" disabled placeholder="This field is disabled" />
    </div>
  ),
};

export const LongLabel: Story = {
  render: () => (
    <div className="space-y-2 max-w-md">
      <Label htmlFor="description">
        Please provide a detailed description of your project including goals, timeline, and expected outcomes
      </Label>
      <Input id="description" placeholder="Enter description..." />
    </div>
  ),
};