"use client";

import {
  EnvelopeSimple,
  XLogo,
  DribbbleLogo,
  LinkedinLogo,
  GithubLogo,
  IconProps,
} from "@phosphor-icons/react";
import Link from "next/link";
import { ElementType } from "react";

interface FooterLinkProps {
  href: string;
  icon?: ElementType<IconProps>;
  iconSize?: number;
  iconWeight?: IconProps["weight"];
  label: string;
  rightText?: string;
  className?: string;
  openInNewTab?: boolean; // New prop for controlling target behavior
}

function FooterLink({
  href,
  icon: Icon,
  iconSize = 24,
  iconWeight = "bold",
  label,
  rightText,
  className = "",
  openInNewTab = false, // Default to false
}: FooterLinkProps) {
  return (
    <Link
      href={href}
      className={`-mx-2 flex justify-between rounded-md px-2 py-2 hover:bg-stone-200 ${className}`}
      target={openInNewTab ? "_blank" : "_self"}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      <div className="flex items-center gap-3">
        {Icon && <Icon size={iconSize} weight={iconWeight} />}
        <span className="text-base">{label}</span>
      </div>
      {rightText && rightText}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 pt-20 pb-8 lg:px-0">
      <span>let&apos;s work together</span>
      <h3 className="font-body mb-5 text-2xl">
        Feel free to reach out to explore opportunities, discuss freelance
        projects, seek design advice, or just say hello.
      </h3>
      <div className="mb-20 flex flex-col gap-4">
        <FooterLink
          href="mailto:hello@iroshandezilva.com"
          icon={EnvelopeSimple}
          label="Email"
          rightText="For quick reply"
        />
        <FooterLink
          href="https://x.com/iroshandezilva"
          icon={XLogo}
          label="X / Twitter"
          rightText="BTS and Design posts"
          openInNewTab={true}
        />
        <FooterLink
          href="https://dribbble.com/iroshandezilva"
          icon={DribbbleLogo}
          label="Dribbble"
          rightText="Visual timeline of my work"
          openInNewTab={true}
        />
        <FooterLink
          href="https://www.linkedin.com/in/iroshandezilva"
          icon={LinkedinLogo}
          label="Linkedin"
          rightText="Work related background"
          openInNewTab={true}
        />
      </div>
      <div className="flex flex-col justify-between gap-3 text-sm text-stone-500 md:flex-row">
        <div className="flex items-center gap-2">
          <Link
            target="_blank"
            href="https://github.com/iroshandezilva/iroshandezilva.com"
            className="flex gap-1 text-stone-500 hover:text-stone-800"
          >
            <GithubLogo size={16} weight="fill" />
            View source code
          </Link>{" "}
          <span className="text-stone-200">| </span>
          <span>@2025 Iroshan De Zilva</span>
        </div>
        {/* <span>Changelog</span> */}
      </div>
    </footer>
  );
}
