import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardContent, CardFooter } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Alert } from '../components/ui/Alert';

const meta: Meta = {
  title: 'System/Themes',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeShowcase: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Theme System Demo</h2>
        <p className="text-muted-foreground mb-6">
          Use the theme switcher in the Storybook toolbar to toggle between light and dark themes.
        </p>
      </div>

      <div className="grid gap-6">
        <section>
          <h3 className="text-lg font-semibold mb-4">Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="w-full h-16 bg-background border rounded"></div>
              <p className="text-sm">Background</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-foreground rounded"></div>
              <p className="text-sm">Foreground</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-muted rounded"></div>
              <p className="text-sm">Muted</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-accent rounded"></div>
              <p className="text-sm">Accent</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-primary rounded"></div>
              <p className="text-sm">Primary</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-secondary rounded"></div>
              <p className="text-sm">Secondary</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-destructive rounded"></div>
              <p className="text-sm">Destructive</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-border border rounded"></div>
              <p className="text-sm">Border</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Buttons</h3>
          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Form Elements</h3>
          <div className="max-w-md space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label>Message</Label>
              <textarea
                className="min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your message"
              />
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            <Card>
              <CardHeader>
                <h4 className="font-semibold">Light Theme</h4>
                <p className="text-sm text-muted-foreground">Clean and minimal design</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Perfect for daytime use and professional environments.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Learn More</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h4 className="font-semibold">Dark Theme</h4>
                <p className="text-sm text-muted-foreground">Easy on the eyes</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Great for low-light conditions and extended use.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">Try It</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Alerts</h3>
          <div className="space-y-4 max-w-2xl">
            <Alert>
              <div>
                <h4 className="font-medium">Info</h4>
                <p className="text-sm text-muted-foreground">This is an informational alert.</p>
              </div>
            </Alert>
          </div>
        </section>
      </div>
    </div>
  ),
};