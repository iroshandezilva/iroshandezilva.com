"use client";

import React from "react";
import {
  RocketLaunch,
  PaintBrushHousehold,
  Shapes,
  UserPlus,
  Checks,
} from "@phosphor-icons/react";
import ServiceCard from "@/components/home/ServiceCard";

export default function MyServices() {
  const services = [
    {
      icon: RocketLaunch,
      title: "MVP Design for SaaS",
      description:
        "Hire MVP designers to create an early version of your SaaS product that will be well-received by advisors, investors, and customers alike.",
    },
    {
      icon: PaintBrushHousehold,
      title: "Product Redesign",
      description:
        "We'll work together to overhaul your SaaS with a user-centered approach that will increase engagement, retention, and revenue. Say goodbye to a lackluster UX and hello to a product that stands out in the market.",
    },
    {
      icon: UserPlus,
      title: "Team Extension",
      description:
        "I can seamlessly integrate into your product development team and provide solutions to your design challenges.",
    },
    {
      icon: Checks,
      title: "UX Audit",
      description:
        "I can help you to spot your product's bottlenecks to unlock its fullest potential.",
    },
    {
      icon: Shapes,
      title: "Design System",
      description:
        "Have big plans on scaling your SaaS? I can support you in creating and shaping the design system.",
    },
  ];

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:px-0">
      <div className="inline-flex flex-col items-start justify-start gap-10">
        <div className="mx-auto flex max-w-lg flex-col gap-4 py-4 text-center">
          <span className="text-sm font-medium tracking-widest text-stone-400 uppercase">
            End-to-end expertise
          </span>
          <h2 className="font-heading text-3xl text-stone-900 md:text-5xl">
            How can I help you
          </h2>
        </div>
        <div className="border-stone-00 flex flex-col items-start justify-start gap-8 self-stretch">
          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                className=""
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
