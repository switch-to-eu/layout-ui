import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription, CardAction } from './Card';
import { Button } from './Button';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-sm text-muted-foreground">Card description goes here</p>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card. You can put any content here.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <h3 className="text-lg font-semibold">Card with Footer</h3>
        <p className="text-sm text-muted-foreground">This card has a footer with actions</p>
      </CardHeader>
      <CardContent>
        <p>Main content area with some example text to demonstrate the layout.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="neutral">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const ProfileCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>John Doe</CardTitle>
        <CardDescription>Software Developer</CardDescription>
        <CardAction>
          <Button size="sm" variant="neutral">•••</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
            <span className="text-lg font-medium">JD</span>
          </div>
          <div>
            <p className="text-sm">
              Passionate about creating clean, efficient code and building great user experiences.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Profile</Button>
      </CardFooter>
    </Card>
  ),
};

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-[300px] p-6">
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">Simple Card</h3>
        <p className="text-muted-foreground">
          A simple card without header/content/footer structure.
        </p>
      </div>
    </Card>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
      <Card>
        <CardHeader>
          <h3 className="font-semibold">Feature 1</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Description of feature 1</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <h3 className="font-semibold">Feature 2</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Description of feature 2</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <h3 className="font-semibold">Feature 3</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Description of feature 3</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Learn More</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <h3 className="font-semibold">Feature 4</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Description of feature 4</p>
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="neutral">Coming Soon</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};