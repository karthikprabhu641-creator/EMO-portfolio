import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

/**
 * Card component configured according to design.md:
 * - backgroundColor: neutral (#F5EFFF)
 * - textColor: on-surface (#2A1647)
 * - rounded: rounded.md (8px)
 * - border: border (#E5E7EB)
 * - padding: 16px - 42px
 * - Flat aesthetic without heavy drop-shadows
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, as: Component = "div", children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "bg-neutral text-on-surface rounded-md border border-border p-6 md:p-8 transition-colors",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";
