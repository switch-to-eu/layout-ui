# Theming Guide

Layout UI provides a flexible theming system based on CSS custom properties (CSS variables). This allows you to easily customize the appearance of all components while maintaining consistency across your application.

## Theme Architecture

The theming system is built on three core concepts:

1. **CSS Custom Properties**: All colors and design tokens are defined as CSS variables
2. **HSL Color Format**: Colors use HSL values for better manipulation and transparency support
3. **Light/Dark Mode**: Automatic support for light and dark themes

## CSS Custom Properties Reference

### Color Properties

All color properties expect HSL values **without** the `hsl()` function:

```css
/* ✅ Correct */
:root {
  --primary: 262 83% 58%;
}

/* ❌ Incorrect */
:root {
  --primary: hsl(262, 83%, 58%);
}
```

### Complete Properties List

```css
:root {
  /* Core Colors */
  --background: 0 0% 100%;              /* Main background */
  --foreground: 222 84% 5%;             /* Main text color */

  /* Brand Colors */
  --primary: 222 47% 11%;               /* Primary brand color */
  --primary-foreground: 210 40% 98%;    /* Text on primary */
  --secondary: 210 40% 96%;             /* Secondary color */
  --secondary-foreground: 222 84% 5%;   /* Text on secondary */
  --accent: 210 40% 96%;                /* Accent color */
  --accent-foreground: 222 84% 5%;      /* Text on accent */

  /* Status Colors */
  --destructive: 0 72% 51%;             /* Error/danger color */
  --destructive-foreground: 210 40% 98%; /* Text on destructive */
  --success: 142 76% 36%;               /* Success color */
  --success-foreground: 210 40% 98%;    /* Text on success */
  --warning: 38 92% 50%;                /* Warning color */
  --warning-foreground: 222 84% 5%;     /* Text on warning */

  /* UI Colors */
  --muted: 210 40% 96%;                 /* Muted backgrounds */
  --muted-foreground: 215 16% 47%;      /* Muted text */
  --card: 0 0% 100%;                    /* Card backgrounds */
  --card-foreground: 222 84% 5%;        /* Text on cards */
  --popover: 0 0% 100%;                 /* Popover backgrounds */
  --popover-foreground: 222 84% 5%;     /* Text on popovers */

  /* Interactive Colors */
  --border: 214 32% 91%;                /* Border color */
  --input: 214 32% 91%;                 /* Input border color */
  --ring: 222 47% 11%;                  /* Focus ring color */

  /* Layout Properties */
  --radius: 0.5rem;                     /* Border radius */
}
```

## Basic Theme Customization

### Method 1: CSS Override (Recommended)

The easiest way to customize the theme is by overriding CSS custom properties in your project's CSS file.

**In your `globals.css` or main CSS file:**

```css
/* Import Layout UI styles first */
@import "@switch-to-eu/layout-ui/styles";

/* Override theme variables */
:root {
  /* Brand Colors - Purple Theme */
  --primary: 262 83% 58%;           /* Purple */
  --primary-foreground: 0 0% 100%;   /* White text on purple */
  --accent: 142 76% 36%;            /* Green accent */
  --accent-foreground: 0 0% 100%;    /* White text on green */

  /* Adjust border radius for modern look */
  --radius: 0.75rem;

  /* Customize border colors */
  --border: 262 40% 90%;            /* Light purple borders */
}

/* Dark mode overrides */
.dark {
  --background: 222 84% 5%;         /* Dark background */
  --foreground: 210 40% 98%;        /* Light text */
  --primary: 262 83% 70%;           /* Lighter purple for dark mode */
  --card: 222 84% 8%;               /* Dark card background */
  --border: 262 40% 20%;            /* Darker purple borders */
}
```

### Method 2: JavaScript Theme Utilities

For dynamic theming or theme switching, use the built-in utilities:

```tsx
import { applyTheme, setColorMode, getSystemColorMode } from "@switch-to-eu/layout-ui";

// Apply a custom theme
function applyPurpleTheme() {
  applyTheme({
    primary: "262 83% 58%",
    accent: "142 76% 36%",
    destructive: "0 72% 51%",
    radius: "0.75rem"
  });
}

// Dark mode controls
function toggleDarkMode() {
  const currentMode = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
  setColorMode(currentMode);
}

// Follow system preference
function useSystemTheme() {
  setColorMode("system");
}
```

## Pre-built Theme Examples

### Corporate Blue Theme

```css
:root {
  --primary: 213 94% 68%;           /* Corporate blue */
  --primary-foreground: 0 0% 100%;
  --secondary: 213 27% 84%;         /* Light blue */
  --secondary-foreground: 213 94% 20%;
  --accent: 142 76% 36%;            /* Green accent */
  --accent-foreground: 0 0% 100%;
  --destructive: 0 72% 51%;         /* Red */
  --destructive-foreground: 0 0% 100%;
  --radius: 0.5rem;
}

.dark {
  --background: 213 50% 5%;
  --foreground: 213 31% 95%;
  --primary: 213 94% 78%;
  --card: 213 50% 8%;
  --border: 213 40% 20%;
}
```

### Nature Green Theme

```css
:root {
  --primary: 142 76% 36%;           /* Forest green */
  --primary-foreground: 0 0% 100%;
  --secondary: 142 33% 84%;         /* Light green */
  --secondary-foreground: 142 76% 16%;
  --accent: 38 92% 50%;             /* Orange accent */
  --accent-foreground: 0 0% 100%;
  --destructive: 0 72% 51%;
  --destructive-foreground: 0 0% 100%;
  --radius: 0.75rem;
}

.dark {
  --background: 142 50% 5%;
  --foreground: 142 31% 95%;
  --primary: 142 76% 46%;
  --card: 142 50% 8%;
  --border: 142 40% 20%;
}
```

### Minimalist Monochrome Theme

```css
:root {
  --primary: 0 0% 15%;              /* Near black */
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 96%;            /* Light gray */
  --secondary-foreground: 0 0% 15%;
  --accent: 0 0% 40%;               /* Medium gray */
  --accent-foreground: 0 0% 100%;
  --destructive: 0 65% 48%;         /* Muted red */
  --destructive-foreground: 0 0% 100%;
  --radius: 0.25rem;                /* Sharp corners */
  --border: 0 0% 85%;
}

.dark {
  --background: 0 0% 8%;
  --foreground: 0 0% 95%;
  --primary: 0 0% 85%;
  --card: 0 0% 12%;
  --border: 0 0% 25%;
}
```

## Advanced Theming Techniques

### Dynamic Color Generation

Create themes programmatically based on a primary color:

```tsx
import { applyTheme } from "@switch-to-eu/layout-ui";

function generateThemeFromColor(primaryHsl: string) {
  // Parse HSL values
  const [h, s, l] = primaryHsl.split(' ').map(v => parseInt(v.replace('%', '')));

  // Generate complementary colors
  const secondary = `${h} ${Math.max(s - 60, 10)}% ${Math.min(l + 30, 95)}%`;
  const accent = `${(h + 120) % 360} ${s}% ${l}%`;
  const destructive = `0 72% 51%`; // Keep red for errors

  applyTheme({
    primary: primaryHsl,
    secondary,
    accent,
    destructive
  });
}

// Usage
generateThemeFromColor("262 83% 58%"); // Purple theme
generateThemeFromColor("213 94% 68%"); // Blue theme
```

### Component-Specific Theming

Override theme variables for specific components:

```css
/* Custom button theme */
.btn-special {
  --primary: 45 93% 58%;            /* Golden yellow */
  --primary-foreground: 0 0% 0%;    /* Black text */
  --radius: 9999px;                 /* Fully rounded */
}

/* Custom card theme */
.card-highlight {
  --card: 262 83% 98%;              /* Light purple background */
  --card-foreground: 262 83% 20%;   /* Dark purple text */
  --border: 262 83% 80%;            /* Purple border */
}
```

```tsx
import { Button, Card } from "@switch-to-eu/layout-ui";

function SpecialComponents() {
  return (
    <>
      <Button className="btn-special">Golden Button</Button>
      <Card className="card-highlight">
        Special highlighted card
      </Card>
    </>
  );
}
```

### Theme Switching with React

Create a complete theme switching system:

```tsx
import { createContext, useContext, useEffect, useState } from "react";
import { setColorMode } from "@switch-to-eu/layout-ui";

type Theme = "light" | "dark" | "system";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: "system",
  setTheme: () => null,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    setColorMode(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Theme switcher component
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value as Theme)}>
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}
```

## Color Accessibility

### Contrast Guidelines

When customizing colors, ensure proper contrast ratios:

- **Normal text**: 4.5:1 minimum contrast ratio
- **Large text**: 3:1 minimum contrast ratio
- **Interactive elements**: 3:1 minimum contrast ratio

### Testing Tools

Use these tools to verify accessibility:

```bash
# Install contrast checker
npm install -g color-contrast-checker

# Check contrast
color-contrast-checker "#ffffff" "#262983" # White text on purple
```

### WCAG-Compliant Color Examples

```css
/* High contrast theme for accessibility */
:root {
  --primary: 220 100% 25%;          /* Dark blue - high contrast */
  --primary-foreground: 0 0% 100%;  /* White text */
  --secondary: 220 13% 18%;         /* Dark gray */
  --secondary-foreground: 0 0% 100%; /* White text */
  --destructive: 0 65% 35%;         /* Dark red */
  --destructive-foreground: 0 0% 100%; /* White text */
}
```

## Debugging Themes

### CSS Custom Properties Inspector

Use browser dev tools to inspect CSS custom properties:

1. Open DevTools → Elements
2. Select `:root` or any element
3. Look for `--custom-property-name` in the Styles panel
4. Edit values directly to test changes

### Theme Utility Functions

Debug your theme setup:

```tsx
import { getComputedStyle } from "@switch-to-eu/layout-ui";

function debugTheme() {
  const root = document.documentElement;
  const styles = getComputedStyle(root);

  console.log({
    primary: styles.getPropertyValue('--primary'),
    background: styles.getPropertyValue('--background'),
    foreground: styles.getPropertyValue('--foreground'),
  });
}
```

## Migration from Other Systems

### From styled-components/emotion

```tsx
// Old styled-components approach
const StyledButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.primaryForeground};
`;

// New Layout UI approach
import { Button } from "@switch-to-eu/layout-ui";

// In CSS:
:root {
  --primary: 262 83% 58%;
  --primary-foreground: 0 0% 100%;
}

// Component stays the same:
<Button variant="default">Click me</Button>
```

### From CSS Variables

```css
/* Old approach - individual variables */
:root {
  --button-bg: #4338ca;
  --button-text: #ffffff;
  --card-bg: #f9fafb;
}

/* New Layout UI approach - semantic variables */
:root {
  --primary: 262 83% 58%;
  --primary-foreground: 0 0% 100%;
  --card: 220 14% 96%;
}
```

## Best Practices

1. **Use Semantic Names**: Stick to the predefined semantic color names rather than creating custom ones
2. **Test in Both Modes**: Always test your custom themes in both light and dark modes
3. **Consider Accessibility**: Ensure sufficient contrast ratios for all color combinations
4. **Start Small**: Begin with primary colors and gradually customize other aspects
5. **Use HSL Format**: HSL makes it easier to create variations (lighter/darker versions)
6. **Document Changes**: Keep track of your customizations for team consistency

## Troubleshooting

### Common Issues

**Colors not applying:**
- Ensure CSS custom properties are defined in `:root`
- Check that Layout UI styles are imported before your custom styles
- Verify HSL values don't include `hsl()` wrapper

**TypeScript errors with theme utilities:**
- Ensure you have the latest version of Layout UI
- Check that all peer dependencies are installed

For more help, check our [GitHub Issues](https://github.com/switch-to-eu/layout-ui/issues) or create a new discussion.