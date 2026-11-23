import * as React from "react";
import { cn } from "@/lib/utils";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "surface" | "outline";
}

/**
 * Chip component configured according to design.md:
 * - backgroundColor: neutral (#F5EFFF)
 * - textColor: on-surface (#2A1647)
 * - typography: label-sm (IBM Plex Mono, 12px, 500, line-height 1.2)
 * - rounded: rounded.full (9999px)
 * - padding: 6px 14px
 */
export function Chip({
  className,
  variant = "default",
  children,
  ...props
}: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono text-[12px] font-medium leading-[1.2] rounded-full px-3.5 py-1.5 transition-colors border",
        variant === "default" && "bg-neutral text-on-surface border-border",
        variant === "surface" && "bg-surface text-on-surface border-border",
        variant === "outline" && "bg-transparent text-on-surface/80 border-border",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
