import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormInput } from './FormInput';
import { z } from 'zod';

const meta: Meta<typeof FormInput> = {
  title: 'Form/FormInput',
  component: FormInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Simple form data type for stories
type FormData = {
  email: string;
  name: string;
  password: string;
  phone: string;
  website: string;
  age: number;
};

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  password: z.string().min(8),
  phone: z.string().optional(),
  website: z.string().url().optional(),
  age: z.number().min(18).optional(),
});

export const Default: Story = {
  render: () => {
    const { register } = useForm<FormData>();

    return (
      <FormInput
        label="Email Address"
        name="email"
        register={register}
        placeholder="Enter your email"
        type="email"
      />
    );
  },
};

export const WithSchema: Story = {
  render: () => {
    const { register } = useForm<FormData>();

    return (
      <FormInput
        label="Email Address"
        name="email"
        register={register}
        placeholder="Enter your email"
        type="email"
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
      message: 'Please enter a valid email address'
    };

    return (
      <FormInput
        label="Email Address"
        name="email"
        register={register}
        placeholder="Enter your email"
        type="email"
        error={error}
      />
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const { register } = useForm<FormData>();

    return (
      <FormInput
        label="Phone Number"
        name="phone"
        register={register}
        placeholder="+1 (555) 123-4567"
        type="tel"
        description="Include country code for international numbers"
        schema={schema}
      />
    );
  },
};

export const DifferentTypes: Story = {
  render: () => {
    const { register } = useForm<FormData>();

    return (
      <div className="space-y-6 max-w-md">
        <FormInput
          label="Full Name"
          name="name"
          register={register}
          placeholder="Enter your name"
          type="text"
          schema={schema}
        />

        <FormInput
          label="Email Address"
          name="email"
          register={register}
          placeholder="user@example.com"
          type="email"
          schema={schema}
        />

        <FormInput
          label="Password"
          name="password"
          register={register}
          placeholder="Enter password"
          type="password"
          schema={schema}
        />

        <FormInput
          label="Age"
          name="age"
          register={register}
          placeholder="Enter your age"
          type="number"
          valueAsNumber
          schema={schema}
        />

        <FormInput
          label="Website"
          name="website"
          register={register}
          placeholder="https://example.com"
          type="url"
          schema={schema}
        />
      </div>
    );
  },
};

export const CompleteForm: Story = {
  render: () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
      console.log('Form submitted:', data);
      alert('Form submitted! Check console for data.');
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg">
        <FormInput
          label="Full Name"
          name="name"
          register={register}
          placeholder="John Doe"
          error={errors.name}
          schema={schema}
        />

        <FormInput
          label="Email Address"
          name="email"
          register={register}
          placeholder="john@example.com"
          type="email"
          error={errors.email}
          description="We'll never share your email with anyone else"
          schema={schema}
        />

        <FormInput
          label="Phone Number"
          name="phone"
          register={register}
          placeholder="+1 (555) 123-4567"
          type="tel"
          error={errors.phone}
          description="Optional - for account recovery"
          schema={schema}
        />

        <FormInput
          label="Password"
          name="password"
          register={register}
          placeholder="Create a strong password"
          type="password"
          error={errors.password}
          description="Must be at least 8 characters"
          schema={schema}
        />

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          Create Account
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

    const watchedEmail = watch('email');

    return (
      <div className="space-y-6 max-w-md">
        <FormInput
          label="Email Address"
          name="email"
          register={register}
          placeholder="Enter your email"
          type="email"
          error={errors.email}
          description="Real-time validation example"
          schema={schema}
        />

        <div className="text-sm">
          <p className="text-muted-foreground">
            Current value: {watchedEmail || 'Empty'}
          </p>
          <p className="text-muted-foreground">
            Status: {errors.email ? 'Invalid' : watchedEmail ? 'Valid' : 'Empty'}
          </p>
        </div>
      </div>
    );
  },
};