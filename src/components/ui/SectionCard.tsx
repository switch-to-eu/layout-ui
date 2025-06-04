"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
}

export interface SectionHeaderProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "neutral";
}

export interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

const SectionCard = React.forwardRef<HTMLDivElement, SectionCardProps>(
  ({ children, className }, ref) => (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden shadow-card",
        // Mobile: only top/bottom borders, no left/right
        "border-t border-b border-primary",
        // Desktop: rounded corners and full border
        "sm:rounded-lg sm:border-l sm:border-r",
        className
      )}
    >
      {children}
    </div>
  )
);
SectionCard.displayName = "SectionCard";

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ children, icon, title, description, className, variant = "primary" }, ref) => {
    const variantStyles = {
      primary: "gradient-bg-primary border-b",
      secondary: "gradient-bg-secondary border-b",
      tertiary: "gradient-bg-tertiary border-b",
      quaternary: "gradient-bg-quaternary border-b",
      neutral: "bg-gray-50 border-b",
    };

    const iconColors = {
      primary: "text-brand-primary",
      secondary: "text-warning",
      tertiary: "text-success",
      quaternary: "text-warning",
      neutral: "text-gray-600",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "border-gray-200 px-6 py-4",
          variantStyles[variant],
          className
        )}
      >
        <div className="flex items-center gap-2">
          {icon && (
            <span className={iconColors[variant]}>{icon}</span>
          )}
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        </div>
        {description && (
          <p className="mt-1 text-sm text-gray-600">
            {description}
          </p>
        )}
        {children}
      </div>
    );
  }
);
SectionHeader.displayName = "SectionHeader";

const SectionContent = React.forwardRef<HTMLDivElement, SectionContentProps>(
  ({ children, className }, ref) => (
    <div ref={ref} className={cn("p-6 bg-white", className)}>
      {children}
    </div>
  )
);
SectionContent.displayName = "SectionContent";

export { SectionCard, SectionHeader, SectionContent };