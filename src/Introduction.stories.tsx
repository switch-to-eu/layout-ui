import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardAction } from './components/ui/Card';
import { Input } from './components/ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/Select';
import { Alert, AlertTitle, AlertDescription } from './components/ui/Alert';
import { Checkbox } from './components/ui/Checkbox';
import { Label } from './components/ui/Label';
import { Header, HeaderContent, HeaderBrand, HeaderNav } from './components/ui/Header';
import { SectionCard, SectionHeader, SectionContent } from './components/ui/SectionCard';
import { Skeleton } from './components/ui/Skeleton';

const meta: Meta = {
  title: 'Introduction',
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: null,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-12 w-12 rounded bg-gradient-purple-blue"></div>
          <h1 className="text-4xl font-bold">Privacy Tools UI</h1>
        </div>
        <p className="text-xl text-muted-foreground">
          A modular, theme-aware component library built for privacy-focused tools
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="py-4">
            <div className="text-2xl font-bold text-purple-600">18+</div>
            <div className="text-sm text-muted-foreground">Components</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="py-4">
            <div className="text-2xl font-bold text-green-600">100%</div>
            <div className="text-sm text-muted-foreground">TypeScript</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="py-4">
            <div className="text-2xl font-bold text-blue-600">~29KB</div>
            <div className="text-sm text-muted-foreground">Bundle</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="py-4">
            <div className="text-2xl font-bold text-orange-600">MIT</div>
            <div className="text-sm text-muted-foreground">License</div>
          </CardContent>
        </Card>
      </div>

      {/* Installation */}
      <SectionCard>
        <SectionHeader
          title="🚀 Installation"
          description="Get started with the component library"
        />
        <SectionContent>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm">
                {`# Install the package
npm install @privacy-tools/layout-ui

# Install peer dependencies
npm install react react-dom tailwindcss
npm install @radix-ui/react-*`}
              </pre>
            </div>
          </div>
        </SectionContent>
      </SectionCard>

      {/* Basic Usage */}
      <SectionCard>
        <SectionHeader
          title="📝 Basic Usage"
          description="How to use components in your application"
        />
        <SectionContent>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm">
                {`import { Button, Card, CardHeader, CardContent } from '@privacy-tools/layout-ui';
import '@privacy-tools/layout-ui/styles';

function App() {
  return (
    <Card>
      <CardHeader>
        <h3>Welcome</h3>
      </CardHeader>
      <CardContent>
        <p>This is a card with a button:</p>
        <Button className="bg-gradient-purple-blue">
          Click me
        </Button>
      </CardContent>
    </Card>
  );
}`}
              </pre>
            </div>
          </div>
        </SectionContent>
      </SectionCard>

      {/* Theme System */}
      <SectionCard>
        <SectionHeader
          title="🎨 Theme System"
          description="Light/dark mode and CSS variables"
        />
        <SectionContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              The theme system uses CSS custom properties for seamless light/dark mode switching.
              Use the theme toggle in the Storybook toolbar to test both modes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">CSS Variables</h4>
                <div className="bg-muted p-3 rounded text-sm">
                  <code>--color-background<br />--color-foreground<br />--color-primary<br />--color-muted</code>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Gradients</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-8 rounded bg-gradient-purple-blue"></div>
                  <div className="h-8 rounded bg-gradient-orange-red"></div>
                  <div className="h-8 rounded bg-gradient-green-blue"></div>
                  <div className="h-8 rounded bg-gradient-pink-purple"></div>
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </SectionCard>

      {/* Key Features */}
      <SectionCard>
        <SectionHeader
          title="✨ Key Features"
          description="What makes this library special"
        />
        <SectionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Fully Typed:</strong> Complete TypeScript support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Accessible:</strong> Built with accessibility in mind</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Themeable:</strong> Easy customization with CSS variables</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Tree Shakeable:</strong> Import only what you need</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Modern:</strong> React 18, Tailwind CSS v4, Radix UI</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Privacy-Focused:</strong> No tracking or analytics</span>
              </li>
            </ul>
          </div>
        </SectionContent>
      </SectionCard>

      {/* Components Overview */}
      <SectionCard>
        <SectionHeader
          title="🧱 Components"
          description="Available components in the library"
        />
        <SectionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Core UI Components</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <strong>Button</strong> - Multiple variants and sizes</li>
                <li>• <strong>Input</strong> - Form inputs with validation</li>
                <li>• <strong>Card</strong> - Flexible card system</li>
                <li>• <strong>Select</strong> - Dropdown with navigation</li>
                <li>• <strong>Label</strong> - Accessible form labels</li>
                <li>• <strong>Alert</strong> - Notification messages</li>
                <li>• <strong>Dialog</strong> - Modal dialogs</li>
                <li>• <strong>Checkbox</strong> - Interactive checkboxes</li>
                <li>• <strong>Calendar</strong> - Date selection</li>
                <li>• <strong>Skeleton</strong> - Loading placeholders</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Composite Components</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <strong>Header System</strong> - Navigation headers</li>
                <li>• <strong>Section Cards</strong> - Content organization</li>
                <li>• <strong>Form Components</strong> - Complete form blocks</li>
                <li>• <strong>Loading Button</strong> - Buttons with states</li>
                <li>• <strong>Textarea</strong> - Multi-line text input</li>
              </ul>
            </div>
          </div>
        </SectionContent>
      </SectionCard>

      {/* Next Steps */}
      <div className="text-center space-y-4 py-8">
        <h2 className="text-2xl font-semibold">Ready to explore?</h2>
        <p className="text-muted-foreground">
          Check out the component stories in the sidebar or view the comprehensive showcase.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-gradient-purple-blue">
            Browse Components
          </Button>
          <Button variant="outline">
            View Theme Showcase
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const ThemeShowcase: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header>
        <HeaderContent>
          <HeaderBrand>
            <div className="h-8 w-8 rounded bg-gradient-purple-blue"></div>
            <span>Privacy Tools UI</span>
          </HeaderBrand>
          <HeaderNav>
            <Button variant="ghost" size="sm">Components</Button>
            <Button variant="ghost" size="sm">Documentation</Button>
            <Button size="sm">Get Started</Button>
          </HeaderNav>
        </HeaderContent>
      </Header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-purple-blue bg-clip-text text-transparent">
            Complete Component Showcase
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience all components, themes, and interactions in one comprehensive demo.
            Toggle between light and dark modes using the toolbar above.
          </p>
        </div>

        {/* Theme & Gradient Showcase */}
        <SectionCard className="mb-16">
          <SectionHeader
            title="🎨 Theme & Gradient System"
            description="Beautiful gradients and seamless light/dark mode switching"
          />
          <SectionContent>
            <div className="space-y-8">
              {/* Gradient Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="h-24 rounded-lg bg-gradient-purple-blue flex items-center justify-center text-white font-medium">
                  Purple Blue
                </div>
                <div className="h-24 rounded-lg bg-gradient-orange-red flex items-center justify-center text-white font-medium">
                  Orange Red
                </div>
                <div className="h-24 rounded-lg bg-gradient-green-blue flex items-center justify-center text-white font-medium">
                  Green Blue
                </div>
                <div className="h-24 rounded-lg bg-gradient-pink-purple flex items-center justify-center text-white font-medium">
                  Pink Purple
                </div>
              </div>

              {/* Theme Examples */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-medium">Light Theme Components</h4>
                  <Card>
                    <CardContent className="p-4 space-y-3">
                      <Button className="bg-gradient-purple-blue">Primary Button</Button>
                      <Input placeholder="Email address" />
                      <Alert>
                        <AlertTitle>Success!</AlertTitle>
                        <AlertDescription>Your changes have been saved successfully.</AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Dark Theme Preview</h4>
                  <Card className="bg-gray-900 text-white border-gray-800">
                    <CardContent className="p-4 space-y-3">
                      <Button className="bg-gradient-purple-blue">Primary Button</Button>
                      <Input placeholder="Email address" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400" />
                      <Alert className="bg-gray-800 border-gray-700">
                        <AlertTitle className="text-white">Success!</AlertTitle>
                        <AlertDescription className="text-gray-300">Your changes have been saved successfully.</AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionCard>

        {/* Component Showcase */}
        <div className="space-y-12">
          {/* Buttons & Actions */}
          <SectionCard>
            <SectionHeader
              title="Buttons & Actions"
              description="Beautiful gradient buttons with hover effects and multiple variants"
            />
            <SectionContent>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-purple-blue">Primary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="sm" className="bg-gradient-orange-red">Small</Button>
                  <Button className="bg-gradient-green-blue">Default</Button>
                  <Button size="lg" className="bg-gradient-pink-purple">Large</Button>
                </div>
              </div>
            </SectionContent>
          </SectionCard>

          {/* Form Components */}
          <SectionCard>
            <SectionHeader
              title="Form Components"
              description="Comprehensive form controls with validation and accessibility"
            />
            <SectionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="showcase-email">Email Address</Label>
                    <Input id="showcase-email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="showcase-country">Country</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="showcase-message">Message</Label>
                    <textarea
                      id="showcase-message"
                      className="w-full px-3 py-2 border rounded-md resize-none"
                      rows={3}
                      placeholder="Type your message here..."
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="showcase-terms" />
                    <Label htmlFor="showcase-terms">I agree to the terms and conditions</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="showcase-newsletter" defaultChecked />
                    <Label htmlFor="showcase-newsletter">Subscribe to newsletter</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="showcase-marketing" />
                    <Label htmlFor="showcase-marketing">Receive marketing emails</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="showcase-updates" defaultChecked />
                    <Label htmlFor="showcase-updates">Product updates</Label>
                  </div>

                  <Button className="w-full bg-gradient-purple-blue mt-4">
                    Submit Form
                  </Button>
                </div>
              </div>
            </SectionContent>
          </SectionCard>

          {/* Cards & Layout */}
          <SectionCard>
            <SectionHeader
              title="Cards & Layout"
              description="Flexible card components for organizing content"
            />
            <SectionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Card</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      A simple card with header and content area.
                    </p>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Card with Action</CardTitle>
                    <CardAction>
                      <Button variant="outline" size="sm">Edit</Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Cards can include action buttons in the header for quick access.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">1,234</div>
                      <div className="text-sm text-muted-foreground">Total Users</div>
                      <Button size="sm" className="mt-3 bg-gradient-purple-blue">View Details</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">98.5%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                      <Button size="sm" className="mt-3 bg-gradient-green-blue">Monitor</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">567</div>
                      <div className="text-sm text-muted-foreground">Active Projects</div>
                      <Button size="sm" className="mt-3 bg-gradient-orange-red">Manage</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-600 mb-2">42</div>
                      <div className="text-sm text-muted-foreground">Team Members</div>
                      <Button size="sm" className="mt-3 bg-gradient-pink-purple">Invite</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </SectionContent>
          </SectionCard>

          {/* Alerts & Feedback */}
          <SectionCard>
            <SectionHeader
              title="Alerts & Feedback"
              description="User feedback components for different states"
            />
            <SectionContent>
              <div className="space-y-4">
                <Alert>
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This is an informational alert with important details for the user.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Something went wrong. Please check your input and try again.
                  </AlertDescription>
                </Alert>

                <Alert>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Your changes have been saved successfully and are now live.
                  </AlertDescription>
                </Alert>
              </div>
            </SectionContent>
          </SectionCard>

          {/* Loading States */}
          <SectionCard>
            <SectionHeader
              title="Loading States"
              description="Skeleton components for better user experience"
            />
            <SectionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium">Card Loading States</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Content Loading States</h4>
                  <div className="space-y-3">
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-32 w-full" />
                  </div>
                </div>
              </div>
            </SectionContent>
          </SectionCard>
        </div>

        {/* Footer */}
        <div className="text-center py-16 border-t mt-16">
          <h2 className="text-3xl font-semibold mb-4">Explore More</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            This showcase demonstrates the full capability of our privacy-focused design system.
            Every component is accessible, themeable, and ready for production use.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-purple-blue">
              View All Components
            </Button>
            <Button variant="outline" size="lg">
              Read Documentation
            </Button>
            <Button variant="secondary" size="lg">
              Download Package
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};