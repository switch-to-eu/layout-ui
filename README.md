# @switch-to-eu/layout-ui

A modular UI design system for privacy-focused tools, built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Themeable**: Customizable design tokens and CSS variables
- 📱 **Responsive**: Mobile-first design approach
- ♿ **Accessible**: Built with Radix UI primitives
- 🔧 **TypeScript**: Full type safety
- 📚 **Storybook**: Interactive component documentation
- 🎯 **Tree-shakeable**: Import only what you need

## Installation

```bash
npm install @switch-to-eu/layout-ui
```

## Usage

```tsx
import { Button, Card } from "@switch-to-eu/layout-ui";
import "@switch-to-eu/layout-ui/styles";

function App() {
  return (
    <Card>
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
```

## Development

```bash
# Install dependencies
npm install

# Start development mode
npm run dev

# Build the library
npm run build

# Start Storybook
npm run storybook
```

## Project Structure

```
src/
├── components/
│   ├── ui/          # Basic UI components
│   └── form/        # Form-specific components
├── lib/
│   ├── utils.ts     # Utility functions
│   └── theme.ts     # Theme management
├── styles/
│   ├── globals.css  # Base styles
│   └── themes.css   # Theme variants
└── types/           # TypeScript definitions
```

## Theming

The library provides a base theme system that projects can customize by overriding CSS custom properties.

### Basic Theme Customization

In your project's CSS file:

```css
/* Import the base UI library styles */
@import "@switch-to-eu/layout-ui/styles";

/* Override theme variables in your project */
:root {
  /* Customize primary colors */
  --primary: 220 100% 50%;
  --primary-foreground: 0 0% 100%;
  --accent: 200 100% 60%;
  --accent-foreground: 0 0% 100%;

  /* Adjust border radius */
  --radius: 0.75rem;
}

/* Dark mode overrides */
.dark {
  --primary: 200 100% 70%;
  --accent: 180 100% 80%;
}
```

### Using Theme Utilities

```tsx
import { applyTheme, setColorMode, getSystemColorMode } from "@switch-to-eu/layout-ui";

// Apply custom theme values
applyTheme({
  primary: "220 100% 50%",
  accent: "200 100% 60%"
});

// Set color mode
setColorMode("dark");

// Get system preference
const mode = getSystemColorMode();
```

### Available Theme Properties

- `primary`, `primary-foreground`
- `secondary`, `secondary-foreground`
- `accent`, `accent-foreground`
- `background`, `foreground`
- `card`, `card-foreground`
- `muted`, `muted-foreground`
- `destructive`, `destructive-foreground`
- `border`, `input`, `ring`
- `radius`

## Contributing

This library is part of the privacy-tools monorepo. Components are migrated from existing projects to maintain consistency across applications.