"use client";

import { CustomLink } from "@/components/shared/3d-button";
import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-3xl pt-16 md:pt-52 pb-12 px-6 lg:px-0">
      <div className="lg:gap-12 gap-6 flex flex-col">
        <div className="gap-5 flex flex-col lg:pr-20">
          <div className="w-24 md:w-32 overflow-hidden rounded-full md:hidden block ">
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
          <h1 className="text-4xl font-heading leading-12 font-semibold text-gray-900 lg:text-5xl lg:leading-16">
            Users Are Leaving Your SaaS I’ll Help You Keep Them
          </h1>
          <p className="font-body justify-start lg:text-xl text-xl  leading-8 font-normal text-slate-700 lg:pr-28">
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
