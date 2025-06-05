# @switch-to-eu/layout-ui

[![npm version](https://badge.fury.io/js/@switch-to-eu%2Flayout-ui.svg)](https://www.npmjs.com/package/@switch-to-eu/layout-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

A modular, themeable UI design system for privacy-focused tools. Built with React, TypeScript, Tailwind CSS, and Radix UI primitives for maximum accessibility and customization.

## ✨ Features

- 🎨 **Fully Themeable**: Customize colors via CSS custom properties
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- ♿ **Accessibility First**: Built on Radix UI primitives with WCAG compliance
- 🔧 **TypeScript Native**: 100% TypeScript with full type safety
- 📚 **Storybook Included**: Interactive component documentation
- 🎯 **Tree Shakeable**: Import only the components you need (~32KB full bundle)
- 🔄 **Form Integration**: React Hook Form + Zod validation support
- 🌙 **Dark Mode Ready**: Built-in light/dark theme switching
- ⚡ **Modern Stack**: React 19, Next.js 15, latest tooling

## 📦 Installation

```bash
npm install @switch-to-eu/layout-ui
```

### Peer Dependencies

Ensure you have the required peer dependencies:

```bash
npm install react@^19.0.0 react-dom@^19.0.0 next@^15.2.3
```

## 🚀 Quick Start

### 1. Import Styles

Import the base styles in your project (usually in `globals.css` or `layout.tsx`):

```css
/* Option 1: Import main styles (includes globals.css) */
@import "@switch-to-eu/layout-ui/styles";

/* Option 2: Import specific style files */
@import "@switch-to-eu/layout-ui/styles/globals.css";
@import "@switch-to-eu/layout-ui/styles/themes.css";
```

Or in your TypeScript/JavaScript files:

```tsx
// In your root layout or App component
import "@switch-to-eu/layout-ui/styles/globals.css";
```

### 2. Use Components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@switch-to-eu/layout-ui";

function App() {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Welcome to Layout UI</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default" size="lg">
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
```

### 3. Customize Theme (Optional)

Override CSS custom properties to match your brand:

```css
/* In your globals.css */
:root {
  --primary: 262 83% 58%;        /* Purple */
  --secondary: 220 14% 96%;      /* Light gray */
  --accent: 142 76% 36%;         /* Green */
  --destructive: 0 72% 51%;      /* Red */
  --radius: 0.75rem;             /* Border radius */
}
```

## 🧩 Available Components

### Core UI Components

| Component | Description | Features |
|-----------|-------------|----------|
| `Button` | Interactive buttons with variants | 6 variants, loading states, icons |
| `Card` | Content containers | Header, content, footer composition |
| `Input` | Text input fields | Validation states, descriptions |
| `Label` | Form labels | Accessibility optimized |
| `Alert` | Status messages | Success, warning, error, info variants |
| `Skeleton` | Loading placeholders | Animated, responsive |
| `Checkbox` | Boolean input | Radix UI integration |
| `Select` | Dropdown selection | Radix UI integration |
| `Dialog` | Modal dialogs | Radix UI integration |
| `Calendar` | Date picker | date-fns integration |

### Composite Components

| Component | Description | Use Case |
|-----------|-------------|----------|
| `SectionCard` | Structured content sections | Main content areas |
| `SectionHeader` | Section headings with icons | Page/section titles |
| `Header` | Navigation headers | App navigation |
| `LoadingButton` | Button with loading state | Form submissions |

### Form Components

| Component | Description | Integration |
|-----------|-------------|-------------|
| `FormInput` | React Hook Form input | Full validation, error handling |
| `FormTextarea` | React Hook Form textarea | Multi-line text input |
| `Textarea` | Base textarea component | Standalone usage |

## 🎨 Theme Customization

### Method 1: CSS Custom Properties (Recommended)

Override theme variables in your CSS:

```css
/* Your project's globals.css */
@import "@switch-to-eu/layout-ui/styles";

/* Light theme customization */
:root {
  /* Brand colors */
  --primary: 262 83% 58%;           /* Purple */
  --primary-foreground: 0 0% 100%;  /* White text */

  /* Secondary colors */
  --secondary: 220 14% 96%;         /* Light gray */
  --secondary-foreground: 222 84% 5%; /* Dark text */

  /* Accent colors */
  --accent: 142 76% 36%;            /* Green */
  --accent-foreground: 0 0% 100%;   /* White text */

  /* Status colors */
  --destructive: 0 72% 51%;         /* Red */
  --destructive-foreground: 0 0% 100%; /* White text */

  /* Layout */
  --radius: 0.75rem;                /* Border radius */
  --border: 220 13% 91%;            /* Border color */
}

/* Dark theme customization */
.dark {
  --primary: 262 83% 70%;           /* Lighter purple for dark mode */
  --secondary: 217 32% 17%;         /* Dark gray */
  --background: 222 84% 5%;         /* Dark background */
  --foreground: 210 40% 98%;        /* Light text */
}
```

### Method 2: JavaScript Theme Utilities

Use the built-in theme utilities for dynamic theming:

```tsx
import { applyTheme, setColorMode, getSystemColorMode } from "@switch-to-eu/layout-ui";

// Apply custom theme programmatically
applyTheme({
  primary: "262 83% 58%",
  accent: "142 76% 36%",
  destructive: "0 72% 51%"
});

// Handle dark mode
setColorMode("dark");
setColorMode("light");
setColorMode("system"); // Follow system preference

// Get current system preference
const systemMode = getSystemColorMode(); // "light" | "dark"
```

### Complete Theme Properties Reference

```css
/* Color Properties (HSL values without hsl()) */
--background: /* Main background */
--foreground: /* Main text color */
--primary: /* Primary brand color */
--primary-foreground: /* Text on primary */
--secondary: /* Secondary color */
--secondary-foreground: /* Text on secondary */
--accent: /* Accent color */
--accent-foreground: /* Text on accent */
--destructive: /* Error/danger color */
--destructive-foreground: /* Text on destructive */
--muted: /* Muted backgrounds */
--muted-foreground: /* Muted text */
--card: /* Card backgrounds */
--card-foreground: /* Text on cards */
--border: /* Border color */
--input: /* Input border color */
--ring: /* Focus ring color */

/* Layout Properties */
--radius: /* Border radius (in rem) */
```

## 🔧 Form Integration

### React Hook Form + Zod Example

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormInput, FormTextarea, Button, Card } from "@switch-to-eu/layout-ui";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormData = z.infer<typeof schema>;

function ContactForm() {
  const { control, handleSubmit, formState: { isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          control={control}
          name="name"
          label="Full Name"
          placeholder="Enter your name"
        />
        <FormInput
          control={control}
          name="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
        />
        <FormTextarea
          control={control}
          name="message"
          label="Message"
          placeholder="Enter your message"
          rows={4}
        />
        <Button type="submit" loading={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Card>
  );
}
```

## 📖 Development

### Setup

```bash
# Clone the repository
git clone https://github.com/switch-to-eu/layout-ui.git
cd layout-ui

# Install dependencies
npm install

# Start development mode with hot reload
npm run dev

# Start Storybook for component development
npm run storybook
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Build the library for production |
| `npm run dev` | Start development mode with watch |
| `npm run storybook` | Start Storybook development server |
| `npm run build-storybook` | Build Storybook for production |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check |
| `npm run publish:dry` | Test publish without actually publishing |
| `npm run publish:beta` | Publish beta version to npm |

### Project Structure

```
layout-ui/
├── src/
│   ├── components/
│   │   ├── ui/              # Core UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── ...
│   │   ├── form/            # Form components
│   │   │   ├── FormInput.tsx
│   │   │   ├── FormTextarea.tsx
│   │   │   └── FormUtils.tsx
│   │   └── index.ts         # Component exports
│   ├── lib/
│   │   ├── utils.ts         # Utility functions
│   │   └── theme.ts         # Theme management
│   ├── styles/
│   │   ├── globals.css      # Base styles
│   │   └── themes.css       # Theme system
│   ├── types/
│   │   └── index.ts         # TypeScript definitions
│   └── index.ts             # Main library export
├── stories/                 # Storybook stories
├── .storybook/             # Storybook configuration
├── dist/                   # Built library output
└── docs/                   # Documentation
```

## 📋 Publishing

This library is published to npm as `@switch-to-eu/layout-ui`.

### Version Management

```bash
# Patch version (bug fixes)
npm run version:patch

# Minor version (new features)
npm run version:minor

# Major version (breaking changes)
npm run version:major
```

### Publishing Process

```bash
# 1. Test the build
npm run build
npm run type-check

# 2. Test publish without actually publishing
npm run publish:dry

# 3. Publish to npm
npm publish

# Or publish beta version
npm run publish:beta
```

## 🤝 Contributing

This library is part of the privacy-tools ecosystem. Components are extracted and made generic from existing projects to maintain consistency.

### Guidelines

1. **Keep it generic** - No project-specific code in the library
2. **Theme-first** - All styling should use CSS custom properties
3. **Accessibility** - Use Radix UI primitives where possible
4. **TypeScript** - Full type safety required
5. **Documentation** - Include Storybook stories for all components

### Component Migration Process

1. Extract component from existing project
2. Remove project-specific styling/logic
3. Convert to use theme variables
4. Add proper TypeScript interfaces
5. Create Storybook story
6. Update exports and documentation

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.

## 🔗 Links

- **NPM Package**: [@switch-to-eu/layout-ui](https://www.npmjs.com/package/@switch-to-eu/layout-ui)
- **GitHub Repository**: [switch-to-eu/layout-ui](https://github.com/switch-to-eu/layout-ui)
- **Issues**: [GitHub Issues](https://github.com/switch-to-eu/layout-ui/issues)
- **Changelog**: [CHANGELOG.md](./CHANGELOG.md)

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Hook Form](https://react-hook-form.com/) - Performant forms library
- [Zod](https://zod.dev/) - TypeScript-first schema validation

---

**Built with ❤️ for privacy-focused applications**