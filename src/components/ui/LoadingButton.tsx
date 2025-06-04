import * as React from "react";
import { Button, buttonVariants } from "./Button";
import type { VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

export interface LoadingButtonProps
  extends React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  loading?: boolean;
  loadingText?: string;
  asChild?: boolean;
}

const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ loading = false, loadingText, children, disabled, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        disabled={disabled ?? loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {loadingText ?? "Loading..."}
          </>
        ) : (
          children
        )}
      </Button>
    );
  }
);

LoadingButton.displayName = "LoadingButton";

export { LoadingButton };