/**
 * Generic theme type definitions for the UI library
 * Projects can extend and customize these base types
 */

export interface ThemeConfig {
    primary: string;
    "primary-foreground": string;
    secondary: string;
    "secondary-foreground": string;
    accent: string;
    "accent-foreground": string;
    background: string;
    foreground: string;
    card: string;
    "card-foreground": string;
    popover: string;
    "popover-foreground": string;
    muted: string;
    "muted-foreground": string;
    destructive: string;
    "destructive-foreground": string;
    border: string;
    input: string;
    ring: string;
    radius: string;
}

export type ColorMode = "light" | "dark" | "system";

export interface ThemeContextValue {
    colorMode: ColorMode;
    setColorMode: (mode: ColorMode) => void;
    applyTheme: (config: Partial<ThemeConfig>) => void;
}

// CSS custom property mapping
export type CSSVariableMap = {
    [K in keyof ThemeConfig]: `--${K}`;
};

// Theme utility types
export type ThemeProperty = keyof ThemeConfig;
export type ThemeValue = string;
export type PartialThemeConfig = Partial<ThemeConfig>;