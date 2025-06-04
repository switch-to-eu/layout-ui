import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import {
  Plus,
  Download,
  Upload,
  Save,
  Edit,
  Trash2,
  Search,
  Settings,
  User,
  Heart,
  Star,
  Mail,
  Phone,
  ArrowRight,
  ArrowLeft,
  Check,
  X
} from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'gradient-primary',
        'gradient-secondary',
        'gradient-tertiary',
        'gradient-quaternary',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'success',
        'warning',
        'destructive',
        'neutral',
        'outline',
        'ghost',
        'link'
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
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
    children: 'Button',
  },
};

// Showcase Stories
export const SolidColorSchemes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="quaternary">Quaternary</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const GradientColorSchemes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="gradient-primary">Gradient Primary</Button>
      <Button variant="gradient-secondary">Gradient Secondary</Button>
      <Button variant="gradient-tertiary">Gradient Tertiary</Button>
      <Button variant="gradient-quaternary">Gradient Quaternary</Button>
    </div>
  ),
};

export const StatusVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <h3 className="w-full text-sm font-medium text-gray-600">Status Variants</h3>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    </div>
  ),
};

export const ButtonsWithIcons: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-600">Common Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="gradient-primary" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Create
          </Button>
          <Button variant="gradient-secondary">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
          <Button variant="gradient-tertiary">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="gradient-quaternary">
            <Upload className="mr-2 h-4 w-4" />
            Upload File
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-600">Edit Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
          <Button variant="success">
            <Check className="mr-2 h-4 w-4" />
            Approve
          </Button>
          <Button variant="warning">
            <X className="mr-2 h-4 w-4" />
            Reject
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-600">Navigation & Utility</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="neutral">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button variant="neutral">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="neutral">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-600">Icons After Text</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="gradient-primary">
            Next Step
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="gradient-secondary">
            Go Back
            <ArrowLeft className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="link">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-600">Icon Only Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="gradient-primary" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="gradient-secondary" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="gradient-tertiary" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="gradient-quaternary" size="icon">
            <Star className="h-4 w-4" />
          </Button>
          <Button variant="neutral" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-600">Communication</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">
            <Mail className="mr-2 h-4 w-4" />
            Send Email
          </Button>
          <Button variant="secondary">
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm" variant="gradient-primary">Small</Button>
      <Button size="default" variant="gradient-primary">Default</Button>
      <Button size="lg" variant="gradient-primary">Large</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-600">Color Schemes - Solid</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="quaternary">Quaternary</Button>
          <Button variant="neutral">Neutral</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-600">Color Schemes - Gradient</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="gradient-primary">Gradient Primary</Button>
          <Button variant="gradient-secondary">Gradient Secondary</Button>
          <Button variant="gradient-tertiary">Gradient Tertiary</Button>
          <Button variant="gradient-quaternary">Gradient Quaternary</Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-600">Status Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-600">Utility Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="neutral">Neutral</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
    </div>
  ),
};

