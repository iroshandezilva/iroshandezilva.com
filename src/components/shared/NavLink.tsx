"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-lg px-4 py-2 transition-colors duration-200 ${
        isActive
          ? "bg-blue-100 font-medium text-blue-600 md:bg-transparent"
          : "text-stone-600 md:hover:text-blue-500"
      }`}
    >
      {children}
    </Link>
  );
}
