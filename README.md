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

The library supports custom themes through CSS custom properties:

```css
.my-theme {
  --primary: 220 100% 50%;
  --primary-foreground: 0 0% 100%;
  --radius: 0.75rem;
}
```

## Contributing

This library is part of the privacy-tools monorepo. Components are migrated from existing projects to maintain consistency across applications.