"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
  sticky?: boolean;
}

export interface HeaderBrandProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export interface HeaderNavProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

export interface HeaderContentProps {
  children: React.ReactNode;
  className?: string;
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ children, className, sticky = true }, ref) => (
    <header
      ref={ref}
      className={cn(
        "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        sticky && "sticky top-0 z-50",
        className
      )}
    >
      {children}
    </header>
  )
);
Header.displayName = "Header";

const HeaderContent = React.forwardRef<HTMLDivElement, HeaderContentProps>(
  ({ children, className }, ref) => (
    <div
      ref={ref}
      className={cn(
        "container mx-auto flex items-center justify-between py-3 sm:py-4",
        className
      )}
    >
      {children}
    </div>
  )
);
HeaderContent.displayName = "HeaderContent";

const HeaderBrand = React.forwardRef<HTMLDivElement, HeaderBrandProps>(
  ({ children, href, className, onClick }, ref) => {
    const brandContent = (
      <div
        ref={ref}
        className={cn(
          "flex cursor-pointer items-center gap-2 text-lg font-semibold transition-opacity hover:opacity-80 sm:text-xl",
          className
        )}
        onClick={onClick}
      >
        {children}
      </div>
    );

    if (href) {
      return (
        <a href={href} className="no-underline">
          {brandContent}
        </a>
      );
    }

    return brandContent;
  }
);
HeaderBrand.displayName = "HeaderBrand";

const HeaderNav = React.forwardRef<HTMLDivElement, HeaderNavProps>(
  ({ children, className, align = "right" }, ref) => (
    <nav
      ref={ref}
      className={cn(
        "flex items-center gap-2",
        align === "left" && "justify-start",
        align === "center" && "justify-center",
        align === "right" && "justify-end",
        className
      )}
    >
      {children}
    </nav>
  )
);
HeaderNav.displayName = "HeaderNav";

export { Header, HeaderContent, HeaderBrand, HeaderNav };