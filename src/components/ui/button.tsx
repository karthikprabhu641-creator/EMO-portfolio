import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
}

/**
 * Button component configured according to design.md tokens:
 * - button-primary: bg #2D257D (primary), text #FFFFFF with plum hover (#581C87), rounded-full, h-64px, min-w-[160px], px-[42.67px]
 * - button-secondary: bg #9CA3AF/25 (tertiary), text #2A1647, rounded-full, h-64px, min-w-[160px], px-[42.67px]
 * - button-tertiary: transparent, text #2A1647, rounded-none, padding: 0
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "lg", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans tracking-normal transition-all duration-200 outline-none select-none disabled:opacity-40 disabled:pointer-events-none active:scale-[0.99]";

    const variantStyles = {
      primary:
        "bg-primary text-white hover:bg-secondary border-none",
      secondary:
        "bg-tertiary/20 text-on-surface hover:bg-tertiary/30 border border-border",
      tertiary:
        "bg-transparent text-on-surface hover:text-primary underline-offset-4 hover:underline p-0 rounded-none",
    };

    const sizeStyles = {
      sm: "h-[40px] px-5 text-xs rounded-full min-w-[120px]",
      md: "h-[52px] px-8 text-sm font-medium rounded-full min-w-[140px]",
      lg: "h-[64px] px-[42.6667px] text-[18.6667px] font-medium rounded-full min-w-[160px]",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          variant !== "tertiary" && sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
