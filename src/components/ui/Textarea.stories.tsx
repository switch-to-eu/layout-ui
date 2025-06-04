import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { Label } from './Label';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    rows: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 max-w-sm">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
  ),
};

export const WithValue: Story = {
  args: {
    defaultValue: 'This is a sample text that shows how the textarea looks with content.',
    placeholder: 'Type your message here...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'This textarea is disabled',
    defaultValue: 'You cannot edit this text.',
  },
};

export const CustomRows: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div className="space-y-2">
        <Label>Small (2 rows)</Label>
        <Textarea rows={2} placeholder="Small textarea..." />
      </div>

      <div className="space-y-2">
        <Label>Medium (4 rows)</Label>
        <Textarea rows={4} placeholder="Medium textarea..." />
      </div>

      <div className="space-y-2">
        <Label>Large (8 rows)</Label>
        <Textarea rows={8} placeholder="Large textarea..." />
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-6 max-w-lg">
      <div className="space-y-2">
        <Label htmlFor="feedback">Feedback</Label>
        <Textarea
          id="feedback"
          placeholder="Please share your thoughts and feedback..."
          rows={4}
        />
        <p className="text-sm text-muted-foreground">
          Your feedback helps us improve our service.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">
          Project Description <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="description"
          placeholder="Describe your project goals, timeline, and requirements..."
          rows={6}
        />
        <p className="text-sm text-muted-foreground">
          Minimum 50 characters required.
        </p>
      </div>
    </div>
  ),
};

export const WithCharacterCount: Story = {
  render: function Component() {
    const [value, setValue] = React.useState('');
    const maxLength = 280;

    return (
      <div className="space-y-2 max-w-md">
        <Label htmlFor="tweet">Tweet</Label>
        <Textarea
          id="tweet"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What's happening?"
          rows={3}
          maxLength={maxLength}
        />
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            Share your thoughts
          </span>
          <span className={`${value.length > maxLength * 0.9 ? 'text-red-500' : 'text-muted-foreground'}`}>
            {value.length}/{maxLength}
          </span>
        </div>
      </div>
    );
  },
};

export const ResizableTextarea: Story = {
  render: () => (
    <div className="space-y-2 max-w-md">
      <Label htmlFor="resizable">Resizable Textarea</Label>
      <Textarea
        id="resizable"
        placeholder="This textarea can be resized by dragging the corner..."
        rows={3}
        className="resize-y"
      />
      <p className="text-sm text-muted-foreground">
        Drag the bottom-right corner to resize.
      </p>
    </div>
  ),
};

export const ContactForm: Story = {
  render: () => (
    <form className="space-y-6 max-w-lg">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <input
            id="firstName"
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="John"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <input
            id="lastName"
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <input
          id="subject"
          type="text"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="How can we help?"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Please describe your inquiry in detail..."
          rows={6}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
      >
        Send Message
      </button>
    </form>
  ),
};