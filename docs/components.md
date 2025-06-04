# Component API Reference

This document provides a comprehensive reference for all components available in Layout UI.

## Core UI Components

### Button

Interactive button component with multiple variants and states.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | Visual style variant |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"default"` | Size variant |
| `loading` | `boolean` | `false` | Shows loading spinner and disables interaction |
| `disabled` | `boolean` | `false` | Disables the button |
| `asChild` | `boolean` | `false` | Renders as child element (using Radix Slot) |

#### Variants

```tsx
import { Button } from "@switch-to-eu/layout-ui";

// Visual variants
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Size variants
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">👍</Button>
```

---

### Card

Container component for grouping related content.

#### Components

- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title text
- `CardDescription` - Description text
- `CardContent` - Main content area
- `CardFooter` - Footer section

#### Example

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from "@switch-to-eu/layout-ui";

<Card className="w-80">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content of the card.</p>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Action</Button>
  </CardFooter>
</Card>
```

---

### Input

Text input component with validation states.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `"text"` | HTML input type |
| `disabled` | `boolean` | `false` | Disables the input |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `className` | `string` | `undefined` | Additional CSS classes |

#### Example

```tsx
import { Input, Label } from "@switch-to-eu/layout-ui";

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    type="email"
    placeholder="Enter your email"
  />
</div>
```

---

### Label

Accessible label component for form controls.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `htmlFor` | `string` | `undefined` | Associates label with form control |
| `className` | `string` | `undefined` | Additional CSS classes |

---

### Alert

Status message component with multiple variants.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive"` | `"default"` | Visual style variant |

#### Components

- `Alert` - Main container
- `AlertTitle` - Alert title
- `AlertDescription` - Alert description

#### Example

```tsx
import { Alert, AlertTitle, AlertDescription } from "@switch-to-eu/layout-ui";
import { AlertCircle } from "lucide-react";

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again.
  </AlertDescription>
</Alert>
```

---

### Skeleton

Loading placeholder component.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |

#### Example

```tsx
import { Skeleton } from "@switch-to-eu/layout-ui";

<div className="space-y-2">
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[200px]" />
  <Skeleton className="h-4 w-[150px]" />
</div>
```

---

### Checkbox

Boolean input component using Radix UI.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `undefined` | Controlled checked state |
| `defaultChecked` | `boolean` | `undefined` | Default checked state |
| `disabled` | `boolean` | `false` | Disables the checkbox |
| `onCheckedChange` | `(checked: boolean) => void` | `undefined` | Callback when checked state changes |

#### Example

```tsx
import { Checkbox, Label } from "@switch-to-eu/layout-ui";

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>
```

---

### Select

Dropdown selection component using Radix UI.

#### Components

- `Select` - Root component
- `SelectTrigger` - Trigger button
- `SelectValue` - Selected value display
- `SelectContent` - Dropdown content
- `SelectItem` - Individual option
- `SelectGroup` - Option group
- `SelectLabel` - Group label
- `SelectSeparator` - Visual separator

#### Example

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@switch-to-eu/layout-ui";

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

---

### Dialog

Modal dialog component using Radix UI.

#### Components

- `Dialog` - Root component
- `DialogTrigger` - Trigger element
- `DialogContent` - Modal content
- `DialogHeader` - Header section
- `DialogTitle` - Dialog title
- `DialogDescription` - Dialog description
- `DialogFooter` - Footer section
- `DialogClose` - Close trigger

#### Example

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, Button } from "@switch-to-eu/layout-ui";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a dialog description.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      Dialog content goes here.
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

### Calendar

Date picker component using React Day Picker.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `"single" \| "multiple" \| "range"` | `"single"` | Selection mode |
| `selected` | `Date \| Date[] \| DateRange` | `undefined` | Selected date(s) |
| `onSelect` | `function` | `undefined` | Selection callback |
| `disabled` | `Date[] \| function` | `undefined` | Disabled dates |
| `className` | `string` | `undefined` | Additional CSS classes |

#### Example

```tsx
import { Calendar } from "@switch-to-eu/layout-ui";
import { useState } from "react";

function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}
```

---

## Composite Components

### SectionCard

Structured content section with consistent styling.

#### Components

- `SectionCard` - Main container
- `SectionHeader` - Section header with icon support
- `SectionContent` - Padded content area

#### Props

**SectionHeader:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ReactNode` | `undefined` | Icon element |
| `title` | `string` | `undefined` | Section title |
| `description` | `string` | `undefined` | Section description |

#### Example

```tsx
import { SectionCard, SectionHeader, SectionContent } from "@switch-to-eu/layout-ui";
import { Settings } from "lucide-react";

<SectionCard>
  <SectionHeader
    icon={<Settings className="h-5 w-5" />}
    title="Settings"
    description="Manage your application settings"
  />
  <SectionContent>
    <p>Section content goes here.</p>
  </SectionContent>
</SectionCard>
```

---

### Header

Navigation header component system.

#### Components

- `Header` - Main header container
- `HeaderContent` - Content wrapper with responsive layout
- `HeaderBrand` - Brand/logo area
- `HeaderNav` - Navigation area

#### Props

**HeaderBrand:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | `undefined` | Link URL |

**HeaderNav:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `"start" \| "center" \| "end"` | `"end"` | Alignment of navigation items |

#### Example

```tsx
import { Header, HeaderContent, HeaderBrand, HeaderNav, Button } from "@switch-to-eu/layout-ui";

<Header>
  <HeaderContent>
    <HeaderBrand href="/">
      <span className="font-bold text-xl">My App</span>
    </HeaderBrand>
    <HeaderNav>
      <Button variant="ghost">About</Button>
      <Button variant="ghost">Contact</Button>
      <Button>Sign In</Button>
    </HeaderNav>
  </HeaderContent>
</Header>
```

---

### LoadingButton

Button component with built-in loading state.

#### Props

Inherits all `Button` props plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loading` | `boolean` | `false` | Shows loading spinner and disables button |
| `loadingText` | `string` | `undefined` | Text to show when loading |

#### Example

```tsx
import { LoadingButton } from "@switch-to-eu/layout-ui";
import { useState } from "react";

function SubmitForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <LoadingButton
      loading={loading}
      loadingText="Saving..."
      onClick={handleSubmit}
    >
      Save Changes
    </LoadingButton>
  );
}
```

---

## Form Components

### FormInput

React Hook Form integrated input component.

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `control` | `Control<T>` | React Hook Form control object |
| `name` | `Path<T>` | Field name in form data |
| `label` | `string` | Field label |
| `description` | `string` | Help text |
| `placeholder` | `string` | Input placeholder |
| `type` | `string` | HTML input type |
| `disabled` | `boolean` | Disables the input |

#### Example

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormInput, Button } from "@switch-to-eu/layout-ui";

const schema = z.object({
  email: z.string().email("Invalid email"),
  name: z.string().min(2, "Name is required")
});

type FormData = z.infer<typeof schema>;

function MyForm() {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  return (
    <form onSubmit={handleSubmit(console.log)} className="space-y-4">
      <FormInput
        control={control}
        name="name"
        label="Full Name"
        placeholder="Enter your name"
        description="This will be displayed publicly"
      />
      <FormInput
        control={control}
        name="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

---

### FormTextarea

React Hook Form integrated textarea component.

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `control` | `Control<T>` | React Hook Form control object |
| `name` | `Path<T>` | Field name in form data |
| `label` | `string` | Field label |
| `description` | `string` | Help text |
| `placeholder` | `string` | Textarea placeholder |
| `rows` | `number` | Number of visible rows |
| `disabled` | `boolean` | Disables the textarea |

#### Example

```tsx
import { FormTextarea } from "@switch-to-eu/layout-ui";

<FormTextarea
  control={control}
  name="message"
  label="Message"
  placeholder="Enter your message"
  rows={4}
  description="Maximum 500 characters"
/>
```

---

### Textarea

Base textarea component.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Disables the textarea |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `rows` | `number` | `3` | Number of visible rows |
| `className` | `string` | `undefined` | Additional CSS classes |

#### Example

```tsx
import { Textarea, Label } from "@switch-to-eu/layout-ui";

<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea
    id="message"
    placeholder="Enter your message"
    rows={4}
  />
</div>
```

---

## Utility Functions

### isFieldRequired

Utility function to check if a Zod schema field is required.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `schema` | `ZodObject` | Zod schema object |
| `fieldName` | `string` | Field name to check |

#### Returns

`boolean` - Whether the field is required

#### Example

```tsx
import { z } from "zod";
import { isFieldRequired } from "@switch-to-eu/layout-ui";

const schema = z.object({
  email: z.string().email(),
  name: z.string().optional()
});

isFieldRequired(schema, "email"); // true
isFieldRequired(schema, "name");  // false
```

---

## Theme Utilities

### applyTheme

Apply custom theme values programmatically.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `theme` | `Partial<ThemeConfig>` | Theme configuration object |

#### Example

```tsx
import { applyTheme } from "@switch-to-eu/layout-ui";

applyTheme({
  primary: "262 83% 58%",
  accent: "142 76% 36%",
  radius: "0.75rem"
});
```

---

### setColorMode

Set the color mode (light/dark/system).

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `mode` | `"light" \| "dark" \| "system"` | Color mode to apply |

#### Example

```tsx
import { setColorMode } from "@switch-to-eu/layout-ui";

setColorMode("dark");   // Force dark mode
setColorMode("light");  // Force light mode
setColorMode("system"); // Follow system preference
```

---

### getSystemColorMode

Get the current system color mode preference.

#### Returns

`"light" | "dark"` - System color mode preference

#### Example

```tsx
import { getSystemColorMode } from "@switch-to-eu/layout-ui";

const systemMode = getSystemColorMode();
console.log(systemMode); // "dark" or "light"
```

---

## CSS Classes Reference

### Theme Variables

All components use CSS custom properties that can be overridden:

```css
/* Primary colors */
.text-primary { color: hsl(var(--primary)); }
.bg-primary { background-color: hsl(var(--primary)); }
.border-primary { border-color: hsl(var(--primary)); }

/* Secondary colors */
.text-secondary { color: hsl(var(--secondary)); }
.bg-secondary { background-color: hsl(var(--secondary)); }

/* Status colors */
.text-destructive { color: hsl(var(--destructive)); }
.bg-destructive { background-color: hsl(var(--destructive)); }

/* Muted colors */
.text-muted-foreground { color: hsl(var(--muted-foreground)); }
.bg-muted { background-color: hsl(var(--muted)); }
```

### Utility Classes

```css
/* Border radius using theme variable */
.rounded-theme { border-radius: var(--radius); }

/* Custom properties for animations */
.animate-pulse { /* Uses theme-aware colors */ }
.animate-spin { /* Respects reduced motion preferences */ }
```

---

## TypeScript Support

All components are fully typed with TypeScript. Here are some key types:

```tsx
// Button variants
type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";

// Form control types
type FormInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  // ... other props
};

// Theme configuration
type ThemeConfig = {
  primary?: string;
  secondary?: string;
  accent?: string;
  destructive?: string;
  // ... other theme properties
};
```

## Accessibility Features

All components include built-in accessibility features:

- **Keyboard Navigation**: All interactive components support keyboard navigation
- **Screen Reader Support**: Proper ARIA attributes and semantic HTML
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: Theme system ensures proper contrast ratios
- **Reduced Motion**: Respects `prefers-reduced-motion` setting

For specific accessibility guidelines, refer to each component's documentation and the [WCAG 2.1 guidelines](https://www.w3.org/WAI/WCAG21/quickref/).