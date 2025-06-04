import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const alertVariants = cva(
  "relative w-full p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground overflow-hidden shadow-card",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-t border-b border-primary sm:rounded-lg sm:border-l sm:border-r",
        destructive: "gradient-bg-destructive border-t border-b border-primary sm:rounded-lg sm:border-l sm:border-r text-gray-900 [&>svg]:text-warning",
        primary: "gradient-bg-primary border-t border-b border-primary sm:rounded-lg sm:border-l sm:border-r text-gray-900",
        secondary: "gradient-bg-secondary border-t border-b border-primary sm:rounded-lg sm:border-l sm:border-r text-gray-900",
        tertiary: "gradient-bg-tertiary border-t border-b border-primary sm:rounded-lg sm:border-l sm:border-r text-gray-900",
        quaternary: "gradient-bg-quaternary border-t border-b border-primary sm:rounded-lg sm:border-l sm:border-r text-gray-900",
        neutral: "bg-gray-50 border-t border-b border-primary sm:rounded-lg sm:border-l sm:border-r text-gray-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };