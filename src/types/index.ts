/**
 * Common types used throughout the UI library
 */

export type Size = "sm" | "md" | "lg" | "xl";
export type Variant = "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
export type ColorScheme = "light" | "dark" | "system";

export interface BaseComponentProps {
    className?: string;
    children?: import("react").ReactNode;
}

// Re-export theme types
export type { ThemeConfig } from "../lib/theme";