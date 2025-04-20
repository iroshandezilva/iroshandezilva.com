"use client";

import React from "react";
import {
  RocketLaunch,
  PaintBrushHousehold,
  Shapes,
  UserPlus,
  Checks,
} from "@phosphor-icons/react";

const MyServices = () => {
  return (
    <section className="mx-auto max-w-3xl">
      
      <div className="inline-flex flex-col items-start justify-start gap-10">
        <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
          <div className="justify-start self-stretch font-['Inter'] text-base leading-snug font-normal text-gray-500">
            End-to-end expertise
          </div>
          <div className="justify-start self-stretch font-['Inter'] text-xl leading-relaxed font-semibold text-black">
            How can I help you
            <br />I get hired to design, fix or scale SaaS products
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-8 self-stretch">
          <div className="inline-flex items-start justify-start gap-2 self-stretch">
            <div className="flex w-8 items-center justify-center gap-1 overflow-hidden rounded-lg bg-white px-[5px] py-1.5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-neutral-300">
              <div data-property-1="3-d-view" className="relative h-5 w-5">
                <RocketLaunch size={20} weight="fill" />
              </div>
            </div>
            <div className="inline-flex flex-1 flex-col items-start justify-start gap-1">
              <div className="justify-start self-stretch font-['Inter'] text-base leading-snug font-medium text-black">
                MVP Design for SaaS
              </div>
              <div className="justify-start self-stretch font-['Inter'] text-base leading-snug font-normal text-gray-600">
                Hire MVP designers to create an early version of your SaaS
                product that will be well-received by advisors, investors, and
                customers alike.
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-2 self-stretch">
            <div className="flex w-8 items-center justify-center gap-1 overflow-hidden rounded-lg bg-white px-[5px] py-1.5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-neutral-300">
              <div data-property-1="web-design-02" className="relative h-5 w-5">
                <PaintBrushHousehold size={20} weight="fill" />
              </div>
            </div>
            <div className="inline-flex flex-1 flex-col items-start justify-start gap-1">
              <div className="justify-start self-stretch font-['Inter'] text-base leading-snug font-medium text-black">
                Product Redesign
              </div>
              <div className="justify-start self-stretch font-['Inter'] text-base leading-snug font-normal text-gray-600">
                We&apos;ll work together to overhaul your SaaS with a
                user-centered approach that will increase engagement, retention,
                and revenue. Say goodbye to a lackluster UX and hello to a
                product that stands out in the market.
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-2 self-stretch">
            <div className="flex w-8 items-center justify-center gap-1 overflow-hidden rounded-lg bg-white px-[5px] py-1.5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-neutral-300">
              <div data-property-1="add-team-02" className="relative h-5 w-5">
                <UserPlus size={20} weight="fill" />
              </div>
            </div>
            <div className="inline-flex flex-1 flex-col items-start justify-start gap-1">
              <div className="justify-start self-stretch font-['Inter'] text-base leading-snug font-medium text-black">
                Team Extension
              </div>
              <div className="justify-start self-stretch font-['Inter'] text-base leading-snug font-normal text-gray-600">
                I can seamlessly integrate into your product development team
                and provide solutions to your design challenges.
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-2 self-stretch">
            <div className="flex w-8 items-center justify-center gap-1 overflow-hidden rounded-lg bg-white px-[5px] py-1.5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-neutral-300">
              <div data-property-1="add-to-list" className="relative h-5 w-5">
                <Checks size={20} weight="fill" />
              </div>
            </div>
            <div className="inline-flex flex-1 flex-col items-start justify-start gap-1">
              <div className="justify-start self-stretch font-['Inter'] text-base leading-snug font-medium text-black">
                UX Audit
              </div>
              <div className="justify-start self-stretch font-['Inter'] text-base leading-snug font-normal text-gray-600">
                I can help you to spot your product’s bottlenecks to unlock its
                fullest potential.
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-2 self-stretch">
            <div className="flex w-8 items-center justify-center gap-1 overflow-hidden rounded-lg bg-white px-[5px] py-1.5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-neutral-300">
              <Shapes size={20} weight="fill" />
            </div>
            <div className="inline-flex flex-1 flex-col items-start justify-start gap-1">
              <div className="justify-start self-stretch font-['Inter'] text-base leading-snug font-medium text-black">
                Design System
              </div>
              <div className="justify-start self-stretch font-['Inter'] text-base leading-snug font-normal text-gray-600">
                Have big plans on scaling your SaaS? I can support you in
                creating and shaping the design system.
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
