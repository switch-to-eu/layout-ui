/**
 * Theme utilities for customizing component themes
 */

export interface ThemeConfig {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    border: string;
    radius: string;
}

export const defaultTheme: ThemeConfig = {
    primary: "222.2 84% 4.9%",
    secondary: "210 40% 98%",
    accent: "210 40% 96%",
    background: "0 0% 100%",
    foreground: "222.2 84% 4.9%",
    border: "214.3 31.8% 91.4%",
    radius: "0.5rem",
};

/**
 * Apply theme configuration to CSS custom properties
 */
export function applyTheme(theme: Partial<ThemeConfig>) {
    const root = document.documentElement;

    (Object.entries(theme) as [keyof ThemeConfig, string][]).forEach(([key, value]) => {
        if (value) {
            root.style.setProperty(`--${key}`, value);
        }
    });
}