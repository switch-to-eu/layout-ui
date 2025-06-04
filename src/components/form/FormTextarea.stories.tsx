import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormTextarea } from './FormTextarea';
import { z } from 'zod';

const meta: Meta<typeof FormTextarea> = {
  title: 'Form/FormTextarea',
  component: FormTextarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Simple form data type for stories
type FormData = {
  message: string;
  feedback: string;
  description: string;
  bio: string;
  comments: string;
};

const schema = z.object({
  message: z.string().min(1),
  feedback: z.string().min(10),
  description: z.string().min(50),
  bio: z.string().optional(),
  comments: z.string().optional(),
});

export const Default: Story = {
  render: () => {
    const { register } = useForm<FormData>();

    return (
      <FormTextarea
        label="Message"
        name="message"
        register={register}
        placeholder="Type your message here..."
      />
    );
  },
};

export const WithSchema: Story = {
  render: () => {
    const { register } = useForm<FormData>();

    return (
      <FormTextarea
        label="Feedback"
        name="feedback"
        register={register}
        placeholder="Please share your thoughts..."
        schema={schema}
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const { register } = useForm<FormData>();

    const error = {
      type: 'validation',
      message: 'Message must be at least 10 characters long'
    };

    return (
      <FormTextarea
        label="Feedback"
        name="feedback"
        register={register}
        placeholder="Please share your thoughts..."
        error={error}
      />
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const { register } = useForm<FormData>();

    return (
      <FormTextarea
        label="Project Description"
        name="description"
        register={register}
        placeholder="Describe your project goals, timeline, and requirements..."
        description="Provide a detailed description to help us understand your needs"
        rows={6}
        schema={schema}
      />
    );
  },
};

export const DifferentSizes: Story = {
  render: () => {
    const { register } = useForm<FormData>();

    return (
      <div className="space-y-6 max-w-md">
        <FormTextarea
          label="Small (2 rows)"
          name="comments"
          register={register}
          placeholder="Brief comment..."
          rows={2}
          schema={schema}
        />

        <FormTextarea
          label="Medium (4 rows)"
          name="message"
          register={register}
          placeholder="Your message..."
          rows={4}
          schema={schema}
        />

        <FormTextarea
          label="Large (8 rows)"
          name="description"
          register={register}
          placeholder="Detailed description..."
          rows={8}
          schema={schema}
        />
      </div>
    );
  },
};

export const ContactForm: Story = {
  render: () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
      console.log('Form submitted:', data);
      alert('Form submitted! Check console for data.');
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">First Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="John"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Last Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Subject</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="How can we help?"
          />
        </div>

        <FormTextarea
          label="Message"
          name="message"
          register={register}
          placeholder="Please describe your inquiry in detail..."
          rows={6}
          error={errors.message}
          description="Tell us how we can help you"
          schema={schema}
        />

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          Send Message
        </button>
      </form>
    );
  },
};

export const FeedbackForm: Story = {
  render: () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
      console.log('Feedback submitted:', data);
      alert('Thank you for your feedback!');
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Share Your Feedback</h3>
          <p className="text-sm text-muted-foreground">
            Help us improve by sharing your thoughts
          </p>
        </div>

        <FormTextarea
          label="What did you like?"
          name="feedback"
          register={register}
          placeholder="Tell us what you enjoyed..."
          rows={4}
          error={errors.feedback}
          description="Share the positive aspects of your experience"
          schema={schema}
        />

        <FormTextarea
          label="What could be improved?"
          name="description"
          register={register}
          placeholder="Suggest improvements..."
          rows={4}
          error={errors.description}
          description="Help us understand what we can do better"
          schema={schema}
        />

        <FormTextarea
          label="Additional Comments"
          name="comments"
          register={register}
          placeholder="Any other thoughts..."
          rows={3}
          error={errors.comments}
          schema={schema}
        />

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          Submit Feedback
        </button>
      </form>
    );
  },
};

export const ValidationExample: Story = {
  render: () => {
    const { register, watch, formState: { errors } } = useForm<FormData>({
      mode: 'onChange'
    });

    const watchedMessage = watch('message');
    const minLength = 10;

    return (
      <div className="space-y-6 max-w-md">
        <FormTextarea
          label="Message"
          name="message"
          register={register}
          placeholder="Type your message here..."
          rows={4}
          error={errors.message}
          description="Real-time validation example"
          schema={schema}
        />

        <div className="text-sm space-y-1">
          <p className="text-muted-foreground">
            Characters: {watchedMessage?.length || 0}
          </p>
          <p className="text-muted-foreground">
            Minimum required: {minLength}
          </p>
          <p className={`${errors.message
            ? 'text-red-500'
            : watchedMessage && watchedMessage.length >= minLength
              ? 'text-green-500'
              : 'text-muted-foreground'
            }`}>
            Status: {
              errors.message
                ? 'Invalid'
                : watchedMessage && watchedMessage.length >= minLength
                  ? 'Valid'
                  : 'Too short'
            }
          </p>
        </div>
      </div>
    );
  },
};