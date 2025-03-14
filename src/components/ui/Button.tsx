import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const baseStyle = {
  rounded: "rounded-xl",
  text: "text-base font-semibold",
  hover: "hover:bg-gray-100",
};

const buttonVariants = cva(
  "flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Base variants
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        // Purple variants
        purple: cn(
          "bg-purple-600 text-white hover:bg-purple-700 ",
          baseStyle.rounded,
          baseStyle.text,
        ),
        "purple-secondary": cn(
          "bg-purple-700 text-white hover:bg-purple-800 ",
          baseStyle.rounded,
          baseStyle.text,
        ),
        "purple-tertiary": cn(
          "bg-purple-800 text-white hover:bg-purple-900 ",
          baseStyle.rounded,
          baseStyle.text,
        ),
        "purple-outline": cn(
          "border border-purple-600 text-purple-600 hover:bg-purple-600 ",
          baseStyle.rounded,
          baseStyle.text,
          baseStyle.hover,
        ),
        "purple-outline-secondary": cn(
          "border border-purple-500 text-purple-500 hover:bg-purple-500 ",
          baseStyle.rounded,
          baseStyle.text,
          baseStyle.hover,
        ),
        "purple-outline-tertiary": cn(
          "border border-purple-700 text-purple-700 hover:bg-purple-700 ",
          baseStyle.rounded,
          baseStyle.text,
          baseStyle.hover,
        ),

        // Gray variants
        gray: cn(
          "bg-gray-400 text-white hover:bg-gray-500 ",
          baseStyle.rounded,
          baseStyle.text,
        ),
        "gray-outline": cn(
          "border border-gray-400 text-gray-400 hover:bg-gray-400 ",
          baseStyle.rounded,
          baseStyle.text,
          baseStyle.hover,
        ),
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  "aria-label"?: string;
  "aria-disabled"?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      "aria-label": ariaLabel,
      "aria-disabled": ariaDisabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        role="button"
        aria-label={ariaLabel}
        aria-disabled={ariaDisabled}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
