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
        "overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
    >
      {children}
    </div>
  )
);
SectionCard.displayName = "SectionCard";

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ children, icon, title, description, className }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col space-y-1.5 p-6 border-b bg-muted/50",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {icon && (
          <span className="text-primary flex-shrink-0">{icon}</span>
        )}
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          {title}
        </h3>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  )
);
SectionHeader.displayName = "SectionHeader";

const SectionContent = React.forwardRef<HTMLDivElement, SectionContentProps>(
  ({ children, className }, ref) => (
    <div ref={ref} className={cn("p-6", className)}>
      {children}
    </div>
  )
);
SectionContent.displayName = "SectionContent";

export { SectionCard, SectionHeader, SectionContent };