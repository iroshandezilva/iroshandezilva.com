"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkVariant = "default" | "cta";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: LinkVariant;
}

export default function CustomLink({
  href,
  children,
  className,
  variant = "default",
}: CustomLinkProps) {
  const styles = {
    default:
      "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-base font-semibold text-white shadow-xs",
    cta: "flex w-fit overflow-hidden rounded-full border border-green-600 bg-green-600 px-5 py-4 text-white shadow-md transition ease-in-out hover:translate-y-1 hover:bg-green-600 hover:shadow-none",
  };

  return (
    <Link href={href} className={cn(styles[variant], className)}>
      {children}
    </Link>
  );
}
