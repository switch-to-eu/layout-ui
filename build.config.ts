/**
 * Build optimization configuration for the UI library
 * This file contains build-related constants and optimizations
 */

export const buildConfig = {
    // External dependencies that should not be bundled
    external: [
        "react",
        "react-dom",
        "next",
        "@radix-ui/*",
        "lucide-react",
        "class-variance-authority",
        "clsx",
        "tailwind-merge",
        "date-fns",
        "react-day-picker",
        "react-hook-form",
        "zod",
    ],

    // Target environments
    target: "es2020",

    // Tree shaking optimization
    treeshake: true,

    // Source map generation
    sourcemap: true,

    // Minification settings
    minify: {
        development: false,
        production: true,
    },

    // Bundle formats
    formats: ["cjs", "esm"] as const,

    // External CSS handling
    extractCSS: true,
} as const;

export default buildConfig;