import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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
  X,
  Home,
  Bell,
  Calendar,
  Camera,
  Clock,
  Database,
  File,
  Folder,
  Globe,
  Image,
  Lock,
  Map,
  MessageCircle,
  Music,
  Play,
  Shield,
  Smartphone,
  Tag,
  Zap,
  AlertCircle,
  AlertTriangle,
  Info,
  CheckCircle,
  XCircle
} from 'lucide-react';

// Create a wrapper component to showcase icons
const IconShowcase = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className="space-y-3">
    <h3 className="text-sm font-medium text-gray-600">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {children}
    </div>
  </div>
);

const IconItem = ({ icon: Icon, name, className }: { icon: any; name: string; className?: string }) => (
  <div className="flex flex-col items-center gap-2 p-3 border rounded-lg bg-white hover:bg-gray-50 transition-colors">
    <Icon className={className || "h-6 w-6 text-gray-700"} />
    <span className="text-xs text-gray-500 text-center">{name}</span>
  </div>
);

const meta: Meta = {
  title: 'UI/Icons',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="prose">
        <h2>Lucide React Icons</h2>
        <p>
          Lucide React provides a comprehensive set of beautiful & consistent icons.
          Import the icons you need and use them as React components.
        </p>
        <code className="block bg-gray-100 p-2 rounded text-sm">
          {`import { Plus, Download, Settings } from 'lucide-react';`}
        </code>
      </div>

      <IconShowcase title="Basic Icons">
        <IconItem icon={Plus} name="Plus" />
        <IconItem icon={Download} name="Download" />
        <IconItem icon={Upload} name="Upload" />
        <IconItem icon={Save} name="Save" />
        <IconItem icon={Edit} name="Edit" />
        <IconItem icon={Trash2} name="Trash2" />
        <IconItem icon={Search} name="Search" />
        <IconItem icon={Settings} name="Settings" />
      </IconShowcase>
    </div>
  ),
};

export const IconSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="prose">
        <h2>Icon Sizes</h2>
        <p>Control icon sizes using Tailwind CSS classes or custom styling.</p>
      </div>

      <IconShowcase title="Size Variations">
        <div className="flex flex-col items-center gap-2 p-3 border rounded-lg bg-white">
          <Settings className="h-3 w-3 text-gray-700" />
          <span className="text-xs text-gray-500">h-3 w-3</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-3 border rounded-lg bg-white">
          <Settings className="h-4 w-4 text-gray-700" />
          <span className="text-xs text-gray-500">h-4 w-4</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-3 border rounded-lg bg-white">
          <Settings className="h-5 w-5 text-gray-700" />
          <span className="text-xs text-gray-500">h-5 w-5</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-3 border rounded-lg bg-white">
          <Settings className="h-6 w-6 text-gray-700" />
          <span className="text-xs text-gray-500">h-6 w-6</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-3 border rounded-lg bg-white">
          <Settings className="h-8 w-8 text-gray-700" />
          <span className="text-xs text-gray-500">h-8 w-8</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-3 border rounded-lg bg-white">
          <Settings className="h-12 w-12 text-gray-700" />
          <span className="text-xs text-gray-500">h-12 w-12</span>
        </div>
      </IconShowcase>
    </div>
  ),
};

export const IconColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="prose">
        <h2>Icon Colors</h2>
        <p>Style icons with Tailwind color classes or custom CSS.</p>
      </div>

      <IconShowcase title="Color Variations">
        <IconItem icon={Heart} name="Default" className="h-6 w-6 text-gray-700" />
        <IconItem icon={Heart} name="Primary" className="h-6 w-6 text-blue-600" />
        <IconItem icon={Heart} name="Success" className="h-6 w-6 text-green-600" />
        <IconItem icon={Heart} name="Warning" className="h-6 w-6 text-orange-600" />
        <IconItem icon={Heart} name="Danger" className="h-6 w-6 text-red-600" />
        <IconItem icon={Heart} name="Purple" className="h-6 w-6 text-purple-600" />
        <IconItem icon={Heart} name="Pink" className="h-6 w-6 text-pink-600" />
        <IconItem icon={Heart} name="Indigo" className="h-6 w-6 text-indigo-600" />
      </IconShowcase>
    </div>
  ),
};

export const IconCategories: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="prose">
        <h2>Icon Categories</h2>
        <p>Lucide React provides icons organized by common use cases.</p>
      </div>

      <IconShowcase title="Navigation & UI">
        <IconItem icon={Home} name="Home" />
        <IconItem icon={Search} name="Search" />
        <IconItem icon={Settings} name="Settings" />
        <IconItem icon={User} name="User" />
        <IconItem icon={Bell} name="Bell" />
        <IconItem icon={ArrowLeft} name="Arrow Left" />
        <IconItem icon={ArrowRight} name="Arrow Right" />
        <IconItem icon={X} name="Close" />
      </IconShowcase>

      <IconShowcase title="Actions & Controls">
        <IconItem icon={Plus} name="Plus" />
        <IconItem icon={Edit} name="Edit" />
        <IconItem icon={Trash2} name="Delete" />
        <IconItem icon={Save} name="Save" />
        <IconItem icon={Download} name="Download" />
        <IconItem icon={Upload} name="Upload" />
        <IconItem icon={Play} name="Play" />
        <IconItem icon={Check} name="Check" />
      </IconShowcase>

      <IconShowcase title="Communication">
        <IconItem icon={Mail} name="Mail" />
        <IconItem icon={Phone} name="Phone" />
        <IconItem icon={MessageCircle} name="Message" />
        <IconItem icon={Bell} name="Notification" />
      </IconShowcase>

      <IconShowcase title="Files & Media">
        <IconItem icon={File} name="File" />
        <IconItem icon={Folder} name="Folder" />
        <IconItem icon={Image} name="Image" />
        <IconItem icon={Camera} name="Camera" />
        <IconItem icon={Music} name="Music" />
      </IconShowcase>

      <IconShowcase title="Status & Alerts">
        <IconItem icon={CheckCircle} name="Success" className="h-6 w-6 text-green-600" />
        <IconItem icon={AlertCircle} name="Info" className="h-6 w-6 text-blue-600" />
        <IconItem icon={AlertTriangle} name="Warning" className="h-6 w-6 text-orange-600" />
        <IconItem icon={XCircle} name="Error" className="h-6 w-6 text-red-600" />
      </IconShowcase>

      <IconShowcase title="Technology & Tools">
        <IconItem icon={Database} name="Database" />
        <IconItem icon={Globe} name="Globe" />
        <IconItem icon={Smartphone} name="Mobile" />
        <IconItem icon={Lock} name="Lock" />
        <IconItem icon={Shield} name="Shield" />
        <IconItem icon={Zap} name="Zap" />
      </IconShowcase>
    </div>
  ),
};

export const IconPatterns: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="prose">
        <h2>Common Usage Patterns</h2>
        <p>Examples of how to use icons in common UI patterns.</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-600">Icons with Text</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-3 border rounded-lg bg-white">
              <User className="h-4 w-4 text-gray-600" />
              <span className="text-sm">Profile Settings</span>
            </div>
            <div className="flex items-center gap-2 p-3 border rounded-lg bg-white">
              <Bell className="h-4 w-4 text-gray-600" />
              <span className="text-sm">Notifications</span>
            </div>
            <div className="flex items-center gap-2 p-3 border rounded-lg bg-white">
              <Lock className="h-4 w-4 text-gray-600" />
              <span className="text-sm">Security</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-600">Icon Badges</h3>
          <div className="flex gap-4">
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-2 -right-2 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">3</span>
            </div>
            <div className="relative">
              <Mail className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-2 -right-2 h-4 w-4 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white">5</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-600">Loading States</h3>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="animate-spin">
                <Settings className="h-4 w-4 text-gray-600" />
              </div>
              <span className="text-sm text-gray-600">Loading...</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-600">Interactive Icons</h3>
          <div className="flex gap-4">
            <Heart className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            <Star className="h-6 w-6 text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
            <Zap className="h-6 w-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-600">Status Indicators</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">Task completed successfully</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              <span className="text-sm">Warning: Please review your settings</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-500" />
              <span className="text-sm">Error: Failed to save changes</span>
            </div>
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 text-blue-500" />
              <span className="text-sm">Information: New features available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CodeExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="prose">
        <h2>Code Examples</h2>
        <p>Here are some common patterns for using Lucide React icons:</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-600">Basic Import & Usage</h3>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
            {`import { Plus, Download, Settings } from 'lucide-react';

// Basic usage
<Plus className="h-4 w-4" />

// With custom styling
<Download className="h-5 w-5 text-blue-600" />

// With hover effects
<Settings className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" />`}
          </pre>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-600">In Buttons</h3>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
            {`// Icon before text
<button className="flex items-center gap-2">
  <Plus className="h-4 w-4" />
  Create New
</button>

// Icon after text
<button className="flex items-center gap-2">
  Continue
  <ArrowRight className="h-4 w-4" />
</button>

// Icon only
<button className="p-2">
  <Settings className="h-4 w-4" />
</button>`}
          </pre>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-600">With Animations</h3>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
            {`// Spinning icon
<div className="animate-spin">
  <Settings className="h-4 w-4" />
</div>

// Hover animations
<Heart className="h-6 w-6 hover:scale-110 transition-transform cursor-pointer" />

// Pulse animation
<Bell className="h-5 w-5 animate-pulse text-red-500" />`}
          </pre>
        </div>
      </div>
    </div>
  ),
};