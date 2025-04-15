import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-3xl">
      <div className="">
        <h1 className="mb-4 text-2xl leading-10 font-semibold text-gray-900 lg:text-5xl lg:leading-16">
          Users Are Leaving Your SaaS I’ll Help You Keep Them
        </h1>
        <p className="justify-start text-2xl leading-8 font-normal text-slate-700">
          By refining your product’s UX, I help you increase activation rates
          and reduce churn
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <Link
          className="flex w-fit overflow-hidden rounded-full border border-green-600 bg-linear-65 from-green-600 to-green-700 px-5 py-4 text-white shadow-md transition ease-in-out hover:translate-y-1 hover:bg-green-600 hover:shadow-none"
          href="/about"
          target="_blank"
        >
          Get a Free UX Audit – See What’s Broken
          {/* <ArrowRight size={24} className="text-white" weight="bold" /> */}
        </Link>

        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-red-200"></div>
          <p className="text-base text-gray-700">
            Iroshan’s UX design made it 10x easier for us to pitch investors we
            raised A$1.5M in Seed A funding — CEO / Brolly App
          </p>
        </div>
      </div>
    </section>
  );
}
