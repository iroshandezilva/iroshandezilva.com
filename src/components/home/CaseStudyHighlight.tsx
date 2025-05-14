"use client";

import CaseStudyCard from "../shared/CaseStudyCard";

// import Image from "next/image";

export default function CaseStudyHighlight() {
  return (
    <section className="px-6 py-16 xl:px-0">
      <div>
        <div>
          <div className="mx-auto mb-8 flex max-w-lg flex-col gap-4 py-4 text-center">
            <span className="text-sm font-medium tracking-widest text-stone-600 uppercase">
              LAST UPDATED February 26, 2025
            </span>
            <h2 className="font-heading text-3xl text-stone-900 lg:text-5xl">
              Select work
            </h2>
            <p className="mt-2 text-base leading-normal text-slate-600">
              We only work with companies that we think we can help move the
              needle through beautiful design.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 lg:grid-cols-2">
            <CaseStudyCard
              className="lg:col-span-2"
              imageSrc="/images/leavedates-cs-thumbnail.webp"
              featureOrScreen="leave types settings screen"
              productName="Leave Dates"
              productColor="text-cyan-500"
              year="2023"
              title="Revamping Leave Dates to Deliver Consistency and Flow Through Scalable Design"
              testimonial="Iroshan spent a few months working with us designing the next generation Leave Dates platform. He has a fantastic eye for design, blending beautiful interfaces with enjoyable user experiences. Iroshan is organised, methodical and delivers well to an agreed timeline. Highly recommend working with him."
              clientName="Phil Norton"
              clientTitle="Founder, Leave Dates"
              stats={[
                {
                  value: "60%",
                  description: "Increase in Design Efficiency",
                },
                { value: "40%", description: "Faster Feature Rollouts" },
              ]}
              link="/contact"
            />
            <CaseStudyCard
              variant="column"
              imageSrc="/images/brolly-cs-thumbnail.webp"
              productName="Brolly"
              featureOrScreen="home screen"
              productColor="text-indigo-500"
              year="2023"
              title="Designing Brolly's POC for Instant, Affordable Loans"
              caseStudyButtonText="View project details"
              link="/contact"
            />
            <CaseStudyCard
              variant="column"
              imageSrc="/images/superpaper-cs-thumbnail.webp"
              featureOrScreen="chat with PDF screen"
              productName="SuperLoop"
              productColor="text-blue-500"
              year="2023"
              title="An AI-Powered Writing Assistant for Enhanced Productivity"
              caseStudyButtonText="View project details"
              link="/contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
