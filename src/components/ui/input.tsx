import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Input component configured according to design.md:
 * - backgroundColor: surface (#FFFFFF)
 * - textColor: on-surface (#2A1647)
 * - typography: body-md (IBM Plex Mono, 16px, 300)
 * - rounded: rounded.full (9999px)
 * - padding: 16px 24px
 * - border: border (#E5E7EB)
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "w-full bg-surface text-on-surface font-mono text-[16px] font-light leading-[24px] rounded-full px-6 py-4 border border-border placeholder:text-tertiary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
