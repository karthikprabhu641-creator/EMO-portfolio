import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "full";
}

export function Container({
  className,
  size = "md",
  children,
  ...props
}: ContainerProps) {
  const sizeStyles = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    full: "max-w-7xl",
  };

  return (
    <div
      className={cn("mx-auto w-full px-6 md:px-12", sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
