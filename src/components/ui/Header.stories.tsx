import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderContent, HeaderBrand, HeaderNav } from './Header';
import { Button } from './Button';
import { Calendar, Plus, User, Settings, Home, Info, Mail, Zap, BarChart3 } from 'lucide-react';

const meta: Meta<typeof Header> = {
  title: 'UI/Header',
  component: Header,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Header>
      <HeaderContent>
        <HeaderBrand icon={<Calendar className="h-4 w-4" />}>
          Dashboard
        </HeaderBrand>
        <HeaderNav>
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
            Profile
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </HeaderNav>
      </HeaderContent>
    </Header>
  ),
};

export const WithNavigation: Story = {
  render: () => (
    <Header>
      <HeaderContent>
        <HeaderBrand href="/" icon={<Zap className="h-4 w-4" />}>
          MyApp
        </HeaderBrand>
        <HeaderNav>
          <Button variant="ghost" size="sm">
            <Home className="h-4 w-4" />
            Home
          </Button>
          <Button variant="ghost" size="sm">
            <Info className="h-4 w-4" />
            About
          </Button>
          <Button variant="ghost" size="sm">
            <Mail className="h-4 w-4" />
            Contact
          </Button>
          <Button size="sm">Sign In</Button>
        </HeaderNav>
      </HeaderContent>
    </Header>
  ),
};

export const SimpleBrand: Story = {
  render: () => (
    <Header>
      <HeaderContent>
        <HeaderBrand icon={<Settings className="h-4 w-4" />}>
          Settings
        </HeaderBrand>
      </HeaderContent>
    </Header>
  ),
};

export const WithLogo: Story = {
  render: () => (
    <Header>
      <HeaderContent>
        <HeaderBrand href="/" icon={<BarChart3 className="h-4 w-4" />}>
          Brand Name
        </HeaderBrand>
        <HeaderNav>
          <Button variant="ghost" size="sm">Dashboard</Button>
          <Button variant="ghost" size="sm">Projects</Button>
          <Button variant="ghost" size="sm">Team</Button>
          <Button variant="neutral" size="sm">Export</Button>
          <Button size="sm">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </HeaderNav>
      </HeaderContent>
    </Header>
  ),
};

export const CenteredNav: Story = {
  render: () => (
    <Header>
      <HeaderContent>
        <HeaderBrand icon={<Calendar className="h-4 w-4" />}>
          Portfolio
        </HeaderBrand>
        <HeaderNav align="center">
          <Button variant="ghost" size="sm">Work</Button>
          <Button variant="ghost" size="sm">About</Button>
          <Button variant="ghost" size="sm">Contact</Button>
        </HeaderNav>
      </HeaderContent>
    </Header>
  ),
};

export const StickyHeader: Story = {
  render: () => (
    <div className="h-96 overflow-y-auto">
      <Header sticky>
        <HeaderContent>
          <HeaderBrand icon={<Calendar className="h-4 w-4" />}>
            Sticky Header
          </HeaderBrand>
          <HeaderNav>
            <Button variant="ghost" size="sm">Scroll down to test</Button>
          </HeaderNav>
        </HeaderContent>
      </Header>
      <div className="h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-8">
        <h2 className="text-2xl font-bold mb-4">Content Area</h2>
        <p className="text-muted-foreground">
          Scroll up and down to see the sticky header behavior. The header should stay at the top of the viewport.
        </p>
      </div>
    </div>
  ),
};

export const NonStickyHeader: Story = {
  render: () => (
    <Header sticky={false}>
      <HeaderContent>
        <HeaderBrand icon={<Zap className="h-4 w-4" />}>
          Non-Sticky Header
        </HeaderBrand>
        <HeaderNav>
          <Button variant="neutral" size="sm">Home</Button>
          <Button size="sm">Get Started</Button>
        </HeaderNav>
      </HeaderContent>
    </Header>
  ),
};

export const PlottyStyle: Story = {
  render: () => (
    <Header>
      <HeaderContent>
        <HeaderBrand href="/" icon={<Calendar className="h-4 w-4" />}>
          Plotty
        </HeaderBrand>
        <HeaderNav>
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="default" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Create Poll
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden">
            <Button size="sm" variant="neutral">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </HeaderNav>
      </HeaderContent>
    </Header>
  ),
};