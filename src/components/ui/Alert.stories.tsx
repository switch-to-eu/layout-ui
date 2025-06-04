import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'tertiary', 'quaternary', 'neutral', 'destructive'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="max-w-md">
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is a default alert with some important information.
      </AlertDescription>
    </Alert>
  ),
};

export const Primary: Story = {
  render: () => (
    <Alert variant="primary" className="max-w-md">
      <AlertTitle>Primary Alert</AlertTitle>
      <AlertDescription>
        This is a primary alert with gradient background.
      </AlertDescription>
    </Alert>
  ),
};

export const Secondary: Story = {
  render: () => (
    <Alert variant="secondary" className="max-w-md">
      <AlertTitle>Secondary Alert</AlertTitle>
      <AlertDescription>
        This is a secondary alert with gradient background.
      </AlertDescription>
    </Alert>
  ),
};

export const Tertiary: Story = {
  render: () => (
    <Alert variant="tertiary" className="max-w-md">
      <AlertTitle>Tertiary Alert</AlertTitle>
      <AlertDescription>
        This is a tertiary alert with gradient background.
      </AlertDescription>
    </Alert>
  ),
};

export const Quaternary: Story = {
  render: () => (
    <Alert variant="quaternary" className="max-w-md">
      <AlertTitle>Quaternary Alert</AlertTitle>
      <AlertDescription>
        This is a quaternary alert with gradient background.
      </AlertDescription>
    </Alert>
  ),
};

export const Neutral: Story = {
  render: () => (
    <Alert variant="neutral" className="max-w-md">
      <AlertTitle>Neutral Alert</AlertTitle>
      <AlertDescription>
        This is a neutral alert with subtle background.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="max-w-md">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again later.
      </AlertDescription>
    </Alert>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Alert variant="primary" className="max-w-md">
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add icons to your alerts to make them more visually appealing.
      </AlertDescription>
    </Alert>
  ),
};

export const Simple: Story = {
  render: () => (
    <Alert variant="tertiary" className="max-w-md">
      <AlertDescription>
        This is a simple alert without a title.
      </AlertDescription>
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Alert variant="primary">
        <AlertTitle>Primary</AlertTitle>
        <AlertDescription>Primary gradient alert variant.</AlertDescription>
      </Alert>

      <Alert variant="secondary">
        <AlertTitle>Secondary</AlertTitle>
        <AlertDescription>Secondary gradient alert variant.</AlertDescription>
      </Alert>

      <Alert variant="tertiary">
        <AlertTitle>Tertiary</AlertTitle>
        <AlertDescription>Tertiary gradient alert variant.</AlertDescription>
      </Alert>

      <Alert variant="quaternary">
        <AlertTitle>Quaternary</AlertTitle>
        <AlertDescription>Quaternary gradient alert variant.</AlertDescription>
      </Alert>

      <Alert variant="neutral">
        <AlertTitle>Neutral</AlertTitle>
        <AlertDescription>Neutral alert variant with subtle background.</AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>Destructive alert for errors and warnings.</AlertDescription>
      </Alert>

      <Alert>
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>Default alert variant.</AlertDescription>
      </Alert>
    </div>
  ),
};