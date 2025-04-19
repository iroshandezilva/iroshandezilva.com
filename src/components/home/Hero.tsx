import CustomLink from "@/components/shared/Link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-3xl pt-52 pb-12">
      <div className="gap-12">
        <div className="gap-5">
          <h1 className="text-2xl leading-10 font-semibold text-gray-900 lg:text-5xl lg:leading-16">
            Users Are Leaving Your SaaS I’ll Help You Keep Them
          </h1>
          <p className="justify-start text-2xl leading-8 font-normal text-slate-700">
            By refining your product’s UX, I help you increase activation rates
            and reduce churn
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <CustomLink href="/about" variant="cta">
            Get a Free UX Audit – See What’s Broken
          </CustomLink>
        </div>
      </div>
    </section>
  );
}
