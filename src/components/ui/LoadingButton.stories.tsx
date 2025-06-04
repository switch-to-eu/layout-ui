import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LoadingButton } from './LoadingButton';

const meta: Meta<typeof LoadingButton> = {
  title: 'UI/LoadingButton',
  component: LoadingButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Save Changes',
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    children: 'Saving...',
    loading: true,
  },
};

export const LoadingWithoutText: Story = {
  args: {
    children: 'Submit',
    loading: true,
    loadingText: '',
  },
};

export const CustomLoadingText: Story = {
  args: {
    children: 'Upload File',
    loading: true,
    loadingText: 'Uploading...',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <LoadingButton loading>Default</LoadingButton>
      <LoadingButton variant="destructive" loading>Destructive</LoadingButton>
      <LoadingButton variant="outline" loading>Outline</LoadingButton>
      <LoadingButton variant="secondary" loading>Secondary</LoadingButton>
      <LoadingButton variant="ghost" loading>Ghost</LoadingButton>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <LoadingButton size="sm" loading>Small</LoadingButton>
      <LoadingButton loading>Default</LoadingButton>
      <LoadingButton size="lg" loading>Large</LoadingButton>
    </div>
  ),
};

export const Interactive: Story = {
  render: function Component() {
    const [loading, setLoading] = React.useState(false);

    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };

    return (
      <div className="space-y-4">
        <LoadingButton
          loading={loading}
          onClick={handleClick}
          loadingText="Processing..."
        >
          {loading ? 'Processing...' : 'Click to Process'}
        </LoadingButton>

        <p className="text-sm text-muted-foreground">
          Click the button to see the loading state for 2 seconds
        </p>
      </div>
    );
  },
};

export const FormSubmission: Story = {
  render: function Component() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setTimeout(() => setIsSubmitting(false), 3000);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your name"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your email"
            disabled={isSubmitting}
          />
        </div>

        <LoadingButton
          type="submit"
          loading={isSubmitting}
          loadingText="Submitting..."
          className="w-full"
        >
          Submit Form
        </LoadingButton>
      </form>
    );
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const LoadingAndDisabled: Story = {
  args: {
    children: 'Loading & Disabled',
    loading: true,
    disabled: true,
  },
};