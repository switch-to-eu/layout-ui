# Getting Started with Layout UI

This guide will help you get up and running with Layout UI in your React/Next.js project.

## Prerequisites

Before you begin, make sure you have:

- **Node.js** 18+ installed
- A React 19+ or Next.js 15+ project
- Basic knowledge of React, TypeScript, and Tailwind CSS

## Installation

### Step 1: Install the Package

```bash
npm install @switch-to-eu/layout-ui
```

### Step 2: Install Peer Dependencies

Layout UI requires these peer dependencies:

```bash
npm install react@^19.0.0 react-dom@^19.0.0 next@^15.2.3
```

### Step 3: Install Additional Dependencies (if needed)

For form components, you'll also need:

```bash
npm install react-hook-form @hookform/resolvers zod
```

## Project Setup

### Next.js Setup

#### 1. Import Styles

In your `app/globals.css` or main CSS file:

```css
@import "@switch-to-eu/layout-ui/styles";

/* Your custom theme overrides (optional) */
:root {
  --primary: 262 83% 58%;     /* Your brand color */
  --radius: 0.75rem;          /* Border radius */
}
```

#### 2. Configure Tailwind (if using custom config)

In your `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Add this line to include Layout UI components
    "./node_modules/@switch-to-eu/layout-ui/dist/**/*.{js,mjs}"
  ],
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
  plugins: [],
};

export default config;
```

#### 3. Create Your First Component

Create `app/components/HelloWorld.tsx`:

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@switch-to-eu/layout-ui";

export default function HelloWorld() {
  return (
    <div className="p-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Welcome to Layout UI! 🎉</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            You've successfully set up Layout UI in your project.
          </p>
          <Button className="w-full">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

#### 4. Use in Your Page

In your `app/page.tsx`:

```tsx
import HelloWorld from "./components/HelloWorld";

export default function Home() {
  return (
    <main>
      <HelloWorld />
    </main>
  );
}
```

### Vite/CRA Setup

#### 1. Import Styles

In your `src/index.css` or main CSS file:

```css
@import "@switch-to-eu/layout-ui/styles";
```

#### 2. Configure Tailwind

In your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@switch-to-eu/layout-ui/dist/**/*.{js,mjs}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Basic Usage Examples

### Simple Button

```tsx
import { Button } from "@switch-to-eu/layout-ui";

function MyComponent() {
  return (
    <Button variant="default" size="lg">
      Click me!
    </Button>
  );
}
```

### Card Layout

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter, Button } from "@switch-to-eu/layout-ui";

function ProductCard() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Product Name</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Product description goes here...</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
```

### Form with Validation

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormInput, Button, Card, CardHeader, CardTitle, CardContent } from "@switch-to-eu/layout-ui";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

type FormData = z.infer<typeof schema>;

function LoginForm() {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormInput
            control={control}
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <FormInput
            control={control}
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
```

## TypeScript Configuration

If you're using TypeScript, make sure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "jsx": "react-jsx",
    "lib": ["dom", "dom.iterable", "es6"]
  }
}
```

## Common Issues & Solutions

### Issue: Styles not loading

**Solution:** Make sure you've imported the styles:
```css
@import "@switch-to-eu/layout-ui/styles";
```

### Issue: Components not styled correctly

**Solution:** Ensure Tailwind CSS is processing the Layout UI files by adding this to your Tailwind config:
```javascript
content: [
  // ... your existing content
  "./node_modules/@switch-to-eu/layout-ui/dist/**/*.{js,mjs}"
]
```

### Issue: TypeScript errors

**Solution:** Make sure you have the correct peer dependencies and TypeScript version:
```bash
npm install @types/react @types/react-dom typescript@latest
```

## Next Steps

Now that you have Layout UI set up, you can:

1. **Explore Components**: Check out all available components in the [Component Reference](./components.md)
2. **Customize Themes**: Learn about theming in the [Theming Guide](./theming.md)
3. **View Examples**: See real-world examples in our Storybook
4. **Join the Community**: Ask questions and share feedback on GitHub

## Need Help?

- 📖 **Documentation**: Check our [README](../README.md)
- 🐛 **Issues**: Report bugs on [GitHub Issues](https://github.com/switch-to-eu/layout-ui/issues)
- 💬 **Discussions**: Join conversations on [GitHub Discussions](https://github.com/switch-to-eu/layout-ui/discussions)
- 📧 **Email**: Contact us at hi@switch-to.eu

Happy coding! 🚀