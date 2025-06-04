import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SectionCard, SectionHeader, SectionContent } from './SectionCard';
import { Button } from './Button';
import { Input } from './Input';

const meta: Meta<typeof SectionCard> = {
  title: 'UI/SectionCard',
  component: SectionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SectionCard className="max-w-md">
      <SectionHeader
        title="Section Title"
        description="This is a description of what this section contains."
      />
      <SectionContent>
        <p>This is the main content of the section card.</p>
      </SectionContent>
    </SectionCard>
  ),
};

export const GradientVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
      <SectionCard>
        <SectionHeader
          variant="primary"
          title="Primary Gradient"
          description="Purple to blue gradient theme"
          icon={
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          }
        />
        <SectionContent>
          <p className="text-sm text-gray-600">Brand primary gradient with subtle background styling.</p>
        </SectionContent>
      </SectionCard>

      <SectionCard>
        <SectionHeader
          variant="secondary"
          title="Secondary Gradient"
          description="Warning orange theme"
          icon={
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.734 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          }
        />
        <SectionContent>
          <p className="text-sm text-gray-600">Warning-themed gradient perfect for alerts and notifications.</p>
        </SectionContent>
      </SectionCard>

      <SectionCard>
        <SectionHeader
          variant="tertiary"
          title="Tertiary Gradient"
          description="Success green theme"
          icon={
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <SectionContent>
          <p className="text-sm text-gray-600">Success-themed gradient ideal for completed states.</p>
        </SectionContent>
      </SectionCard>

      <SectionCard>
        <SectionHeader
          variant="quaternary"
          title="Quaternary Gradient"
          description="Warm orange theme"
          icon={
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
          }
        />
        <SectionContent>
          <p className="text-sm text-gray-600">Warm gradient theme for energy and enthusiasm.</p>
        </SectionContent>
      </SectionCard>

      <SectionCard>
        <SectionHeader
          variant="neutral"
          title="Neutral Theme"
          description="Clean minimal styling"
          icon={
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          }
        />
        <SectionContent>
          <p className="text-sm text-gray-600">Neutral design without gradients for minimal interfaces.</p>
        </SectionContent>
      </SectionCard>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <SectionCard className="max-w-md">
      <SectionHeader
        variant="primary"
        title="User Settings"
        description="Manage your account preferences"
        icon={
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }
      >
      </SectionHeader>
      <SectionContent>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Email notifications</span>
            <span className="text-muted-foreground">Enabled</span>
          </div>
          <div className="flex justify-between">
            <span>Two-factor authentication</span>
            <span className="text-muted-foreground">Disabled</span>
          </div>
          <div className="flex justify-between">
            <span>Theme preference</span>
            <span className="text-muted-foreground">Auto</span>
          </div>
        </div>
      </SectionContent>
    </SectionCard>
  ),
};

export const SimpleContent: Story = {
  render: () => (
    <SectionCard className="max-w-sm">
      <SectionContent>
        <div className="text-center py-8">
          <h4 className="font-medium mb-2">No data available</h4>
          <p className="text-sm text-muted-foreground mb-4">
            There's nothing to show here yet.
          </p>
          <Button size="sm" className="gradient-primary">Add Item</Button>
        </div>
      </SectionContent>
    </SectionCard>
  ),
};

export const WithList: Story = {
  render: () => (
    <SectionCard className="max-w-md">
      <SectionHeader
        variant="tertiary"
        title="Recent Activity"
        icon={
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />
      <SectionContent>
        <div className="space-y-3">
          {[
            { action: 'Created new project', time: '2 hours ago' },
            { action: 'Updated profile settings', time: '1 day ago' },
            { action: 'Invited team member', time: '3 days ago' },
            { action: 'Published article', time: '1 week ago' },
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-primary last:border-b-0">
              <span className="text-sm">{item.action}</span>
              <span className="text-xs text-muted-foreground">{item.time}</span>
            </div>
          ))}
        </div>
      </SectionContent>
    </SectionCard>
  ),
};

export const Statistics: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <SectionCard>
        <SectionHeader variant="primary" title="Total Users" />
        <SectionContent className="text-center py-6">
          <div className="text-3xl font-bold mb-2">
            <span className="bg-gradient-primary bg-clip-text ">1,234</span>
          </div>
          <div className="text-sm text-muted-foreground">Active accounts</div>
        </SectionContent>
      </SectionCard>

      <SectionCard>
        <SectionHeader variant="quaternary" title="Active Projects" />
        <SectionContent className="text-center py-6">
          <div className="text-3xl font-bold mb-2">
            <span className="bg-gradient-quaternary bg-clip-text ">567</span>
          </div>
          <div className="text-sm text-muted-foreground">In progress</div>
        </SectionContent>
      </SectionCard>

      <SectionCard>
        <SectionHeader variant="tertiary" title="Success Rate" />
        <SectionContent className="text-center py-6">
          <div className="text-3xl font-bold mb-2">
            <span className="bg-gradient-tertiary bg-clip-text">89%</span>
          </div>
          <div className="text-sm text-muted-foreground">Completion rate</div>
        </SectionContent>
      </SectionCard>
    </div>
  ),
};

export const FormSection: Story = {
  render: () => (
    <SectionCard className="max-w-lg">
      <SectionHeader
        variant="primary"
        title="Personal Information"
        description="Update your personal details below"
        icon={
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        }
      />
      <SectionContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <Input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <Input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="john@example.com"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="neutral">Cancel</Button>
            <Button className="gradient-primary">Save Changes</Button>
          </div>
        </div>
      </SectionContent>
    </SectionCard>
  ),
};

export const StatusCards: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <SectionCard>
        <SectionHeader
          variant="tertiary"
          title="System Status"
          description="All systems operational"
          icon={
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <SectionContent>
          <div className="flex items-center justify-between">
            <span>Server uptime</span>
            <span className="text-success font-medium">99.9%</span>
          </div>
        </SectionContent>
      </SectionCard>

      <SectionCard>
        <SectionHeader
          variant="secondary"
          title="Maintenance Notice"
          description="Scheduled maintenance window"
          icon={
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.734 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          }
        />
        <SectionContent>
          <div className="flex items-center justify-between">
            <span>Next maintenance</span>
            <span className="text-warning font-medium">Tomorrow 2:00 AM</span>
          </div>
        </SectionContent>
      </SectionCard>

      <SectionCard>
        <SectionHeader
          variant="neutral"
          title="General Information"
          description="Account details and settings"
        />
        <SectionContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Account type</span>
              <span className="text-muted-foreground">Professional</span>
            </div>
            <div className="flex justify-between">
              <span>Member since</span>
              <span className="text-muted-foreground">January 2023</span>
            </div>
          </div>
        </SectionContent>
      </SectionCard>
    </div>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <SectionCard>
        <SectionHeader variant="primary" title="Account Overview" />
        <SectionContent>
          <p>Your account is active and in good standing.</p>
        </SectionContent>
      </SectionCard>

      <SectionCard>
        <SectionHeader variant="quaternary" title="Billing Information" />
        <SectionContent>
          <p>Next billing date: January 15, 2024</p>
        </SectionContent>
      </SectionCard>

      <SectionCard>
        <SectionHeader variant="tertiary" title="Support" />
        <SectionContent>
          <p>Need help? Contact our support team.</p>
        </SectionContent>
      </SectionCard>
    </div>
  ),
};