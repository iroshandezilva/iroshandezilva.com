"use client";

import { EnvelopeSimple } from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 pt-20 pb-8 lg:px-0">
      <span>let&apos;s work together</span>
      <h3 className="font-body mb-5 text-2xl">
        Feel free to reach out to explore opportunities, discuss freelance
        projects, seek design advice, or just say hello.
      </h3>
      <div className="mb-20">
        <div className="flex justify-between py-2">
          <div className="flex items-center gap-3">
            <EnvelopeSimple size={24} weight="bold" />
            <span className="text-base">Email</span>
          </div>
          For quick reply
        </div>
      </div>
      <div className="flex flex-col justify-between gap-3 text-sm text-stone-600 md:flex-row">
        <div className="flex gap-2">
          <Link href="#" className="text-stone-600 hover:text-stone-800">
            View source code
          </Link>
          @2025 Iroshan De Zilva
        </div>
        <span>Changelog</span>
      </div>
    </footer>
  );
}
