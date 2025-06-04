/**
 * Generic theme utilities for UI component customization
 * Projects should override these defaults in their own stylesheets
 */

import type {
    ThemeConfig,
    ColorMode,
    ThemeProperty,
    PartialThemeConfig
} from "../types/theme";

// Base light theme configuration
export const baseLightTheme: ThemeConfig = {
    primary: "222.2 47.4% 11.2%",
    "primary-foreground": "210 40% 98%",
    secondary: "210 40% 96%",
    "secondary-foreground": "222.2 84% 4.9%",
    accent: "210 40% 96%",
    "accent-foreground": "222.2 84% 4.9%",
    background: "0 0% 100%",
    foreground: "222.2 84% 4.9%",
    card: "0 0% 100%",
    "card-foreground": "222.2 84% 4.9%",
    popover: "0 0% 100%",
    "popover-foreground": "222.2 84% 4.9%",
    muted: "210 40% 96%",
    "muted-foreground": "215.4 16.3% 46.9%",
    destructive: "0 84.2% 60.2%",
    "destructive-foreground": "210 40% 98%",
    border: "214.3 31.8% 91.4%",
    input: "214.3 31.8% 91.4%",
    ring: "222.2 84% 4.9%",
    radius: "0.5rem",
};

// Base dark theme configuration
export const baseDarkTheme: ThemeConfig = {
    primary: "210 40% 98%",
    "primary-foreground": "222.2 47.4% 11.2%",
    secondary: "217.2 32.6% 17.5%",
    "secondary-foreground": "210 40% 98%",
    accent: "217.2 32.6% 17.5%",
    "accent-foreground": "210 40% 98%",
    background: "222.2 84% 4.9%",
    foreground: "210 40% 98%",
    card: "222.2 84% 4.9%",
    "card-foreground": "210 40% 98%",
    popover: "222.2 84% 4.9%",
    "popover-foreground": "210 40% 98%",
    muted: "217.2 32.6% 17.5%",
    "muted-foreground": "215 20.2% 65.1%",
    destructive: "0 62.8% 30.6%",
    "destructive-foreground": "210 40% 98%",
    border: "217.2 32.6% 17.5%",
    input: "217.2 32.6% 17.5%",
    ring: "212.7 26.8% 83.9%",
    radius: "0.5rem",
};

/**
 * Apply theme configuration to CSS custom properties
 */
export function applyTheme(theme: PartialThemeConfig): void {
    if (typeof document === "undefined") {
        return; // Skip on server-side
    }

    const root = document.documentElement;

    (Object.entries(theme) as [ThemeProperty, string][]).forEach(([key, value]) => {
        if (value) {
            root.style.setProperty(`--${key}`, value);
        }
    });
}

/**
 * Get the current color mode from system preference or localStorage
 */
export function getSystemColorMode(): ColorMode {
    if (typeof window === "undefined") {
        return "light";
    }

    // Check localStorage first
    const stored = localStorage.getItem("color-mode") as ColorMode;
    if (stored && ["light", "dark", "system"].includes(stored)) {
        return stored;
    }

    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }

    return "light";
}

/**
 * Set color mode and apply it to the document
 */
export function setColorMode(mode: ColorMode): void {
    if (typeof document === "undefined") {
        return;
    }

    localStorage.setItem("color-mode", mode);

    const isDark = mode === "dark" ||
        (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);
}

/**
 * Apply base theme based on color mode
 */
export function applyBaseTheme(colorMode: ColorMode = "light"): void {
    const isDark = colorMode === "dark" ||
        (colorMode === "system" && typeof window !== "undefined" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);

    const theme = isDark ? baseDarkTheme : baseLightTheme;
    applyTheme(theme);
    setColorMode(colorMode);
}

/**
 * Get CSS custom property name for a theme property
 */
export function getCSSVariableName(property: ThemeProperty): string {
    return `--${property}`;
}