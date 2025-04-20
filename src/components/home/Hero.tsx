"use client";

import { CustomLink } from "@/components/shared/3d-button";
import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-16 pb-12 md:pt-52 lg:px-0">
      <div className="flex flex-col gap-6 lg:gap-12">
        <div className="flex flex-col gap-5 lg:pr-20">
          <div className="block w-24 overflow-hidden rounded-full md:hidden md:w-32">
            <Image
              src="/images/iroshandezilva_ux_portrait.webp"
              alt="Hero image"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full rounded-lg"
              priority
            />
          </div>
          <h1 className="font-heading text-4xl leading-12 font-semibold text-gray-900 lg:text-5xl lg:leading-16">
            Users Are Leaving Your SaaS I’ll Help You Keep Them
          </h1>
          <p className="font-body justify-start text-xl leading-8 font-normal text-slate-700 lg:pr-28 lg:text-xl">
            By refining your product’s UX, I help you increase activation rates
            and reduce churn
          </p>
        </div>

        <div className="mt-6 gap-4">
          <CustomLink
            href="/contact"
            className="w-full lg:w-auto"
            variant="ai"
            size="lg"
            leadingIcon={ArrowRight}
          >
            Get a Free UX Audit – See What’s Broken
          </CustomLink>
        </div>
      </div>
    </section>
  );
}
