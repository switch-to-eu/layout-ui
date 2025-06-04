# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Additional component variants and customization options
- Enhanced accessibility features
- Performance optimizations

## [0.1.0] - 2025-01-04

### Added
- Initial release of Layout UI design system
- Core UI components:
  - Button with multiple variants (default, destructive, outline, secondary, ghost, link)
  - Card components (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
  - Input components with validation states
  - Label component with proper accessibility
  - Alert component with multiple variants
  - Skeleton loading components
  - Checkbox with Radix UI integration
  - Select dropdown with Radix UI integration
  - Dialog components with Radix UI integration
  - LoadingButton with built-in loading states
  - Calendar component with date-fns integration
- Composite components:
  - SectionCard for consistent content containers
  - SectionHeader for section headings with icons
  - SectionContent for padded content areas
  - Header system (Header, HeaderContent, HeaderBrand, HeaderNav)
- Form components with React Hook Form integration:
  - FormInput with validation and error states
  - FormTextarea with validation and error states
  - Textarea base component
  - Form utility functions for Zod schema integration
- Generic theme system:
  - CSS custom properties for color theming
  - Light and dark mode support
  - Theme utilities (applyTheme, setColorMode, applyBaseTheme)
  - Tailwind CSS integration with theme variables
- Build system:
  - Dual ESM/CJS output with tsup
  - TypeScript declaration generation
  - Tree-shaking optimization
  - CSS bundling with PostCSS
- Developer experience:
  - Storybook integration for component documentation
  - TypeScript support throughout
  - ESLint configuration
  - Hot module replacement in development

### Features
- **Theme Customization**: Projects can override CSS custom properties to customize colors
- **Accessibility**: WCAG compliant components with proper ARIA attributes
- **TypeScript**: Full TypeScript support with proper type definitions
- **Tree Shaking**: Optimized bundle size with tree-shaking support
- **Framework Agnostic**: While optimized for Next.js, components work with any React setup
- **Form Integration**: Seamless React Hook Form integration with Zod validation
- **Responsive Design**: Mobile-first responsive components
- **Modern Stack**: Built with latest React patterns and modern tooling

### Technical Details
- Bundle size: ~32KB (all components included)
- Dependencies: Radix UI primitives, Tailwind CSS, React Hook Form, Zod
- Build target: ES2020
- React version: ^19.0.0 (peer dependency)
- Next.js version: ^15.2.3 (peer dependency)

---

## Release Notes

### How to Update

```bash
npm update @switch-to-eu/layout-ui
```


### Support
- **Documentation**: [README.md](./README.md)
- **Issues**: [GitHub Issues](https://github.com/switch-to-eu/layout-ui/issues)
- **Discussions**: [GitHub Discussions](https://github.com/switch-to-eu/layout-ui/discussions)