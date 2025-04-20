import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Spinner } from "@phosphor-icons/react";
import type { IconProps, Icon } from "@phosphor-icons/react";
import { motion, MotionProps } from "framer-motion";
import Link from "next/link";

const PHOSPHOR_ICON_SIZE = 20;
const linkVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 border",
  {
    variants: {
      variant: {
        ai: "bg-indigo-500 text-white hover:bg-indigo-600 border-indigo-700 border-b-4 border-b-indigo-600 shadow-md",
        default:
          "bg-blue-500 text-primary-foreground hover:bg-blue-600 border-blue-700 border-b-4 border-b-blue-600 shadow-md",
        destructive:
          "bg-red-500 text-destructive-foreground hover:bg-red-600 border-red-700 border-b-4 border-b-red-600 shadow-md",
        outline:
          "border bg-white hover:bg-neutral-100 border-neutral-300 border-b-4 border-b-neutral-200",
        outline_destructive:
          "border text-red-500 bg-white hover:bg-red-50 border-red-600 border-b-4 border-b-red-500",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        ghost_destructive: "bg-transparent text-red-500 hover:bg-red-100",
        link: "text-primary underline-offset-4 hover:underline",
        solid: "bg-zinc-800 text-white hover:bg-zinc-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-14 rounded-2xl px-8",
        xs: "h-8 rounded-md px-4 text-sm",
        icon: "h-10 w-10 border-b border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Simplify to just use anchor props since we're always rendering anchors
type MotionAnchorPropsType = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkVariants> &
  MotionProps;

export interface LinkProps extends MotionAnchorPropsType {
  asChild?: boolean;
  supportIcon?: Icon<IconProps>;
  leadingIcon?: Icon<IconProps>;
  isLoading?: boolean;
  stretch?: boolean;
  href?: string;
  target?: string;
  isNextLink?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  rel?: string;
  ariaLabel?: string;
  iconSize?: number;
  iconWeight?: string;
}

const CustomLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant,
      size,
      children,
      stretch = false,
      supportIcon = undefined,
      leadingIcon = undefined,
      isLoading = false,
      asChild = false,
      href = "#", // Default to "#" if no href provided
      target,
      isNextLink = false,
      onClick,
      rel,
      ariaLabel,
      // Add defaults for the new props
      iconSize = PHOSPHOR_ICON_SIZE,
      iconWeight = "regular",
      ...props
    },
    ref
  ) => {
    const SupportIconRender = supportIcon ?? React.Fragment;
    const LeadingIconRender = leadingIcon ?? React.Fragment;

    // If target is _blank, ensure rel includes noopener and noreferrer for security
    const finalRel =
      target === "_blank"
        ? rel
          ? `${rel} noopener noreferrer`
          : "noopener noreferrer"
        : rel;

    const linkContent = (
      <>
        {isLoading ? (
          <Spinner
            size={iconSize}
            weight={iconWeight}
            className="animate-spin"
          />
        ) : (
          <></>
        )}
        {!isLoading && supportIcon && (
          <SupportIconRender size={iconSize} weight={iconWeight} />
        )}
        {children}
        {leadingIcon && (
          <LeadingIconRender size={iconSize} weight={iconWeight} />
        )}
      </>
    );

    const commonProps = {
      className: cn(
        linkVariants({ variant, size, className }),
        stretch && "w-full"
      ),
      onClick,
      rel: finalRel,
      "aria-label":
        ariaLabel || typeof children === "string" ? children : undefined,
      ...props,
    };

    // If isNextLink is true, use Next.js Link component
    if (isNextLink) {
      return (
        <Link href={href} passHref>
          <motion.a ref={ref} target={target} {...commonProps}>
            {linkContent}
          </motion.a>
        </Link>
      );
    }

    // Render as an anchor with proper accessibility attributes
    return (
      <motion.a
        href={href}
        target={target}
        ref={ref}
        tabIndex={0}
        {...commonProps}
      >
        {linkContent}
      </motion.a>
    );
  }
);

CustomLink.displayName = "Link";

export interface LinkGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const LinkGroup = React.forwardRef<HTMLDivElement, LinkGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "link-group flex flex-row overflow-hidden rounded-lg border w-fit divide-x",
          "*:rounded-none *:border-none",
          className
        )}
        {...props}
      />
    );
  }
);

LinkGroup.displayName = "LinkGroup";

// Change the export statement to be clearer and avoid confusion
// Instead of exporting as Link (which could conflict with Next.js Link)
// Export with clear, distinct names
export { CustomLink, linkVariants };
// Also export a default for easier importing
export default CustomLink;
