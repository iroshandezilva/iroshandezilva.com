import Image from "next/image";
import CustomLink from "../shared/Link";

export default function CaseStudyHighlight() {
  return (
    <section className="mt-8">
      <div>
        <div>
          <div className="max-w-5xl overflow-hidden rounded-lg border border-stone-200 shadow-image  mx-auto">
            <Image
              src="/images/case-studies/leavedates_cs_cover.webp"
              alt="Leave Dates platform screenshot"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full rounded-lg"
              priority
            />
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-6">
            <div className="mx-auto grid max-w-3xl grid-cols-6 gap-7 py-8">
              <div className="col-span-6 flex flex-col items-start justify-start gap-3 self-stretch">
                <div className="inline-flex items-center justify-start gap-3.5">
                  <div className="justify-start text-base leading-normal font-semibold text-cyan-500 uppercase">
                    Leave Dates
                  </div>
                  <div className="text-base leading-tight font-normal text-stone-400">
                    2023
                  </div>
                </div>
                <div className="justify-start self-stretch       text-3xl leading-9 font-semibold text-slate-900">
                  Revamping Leave Dates to Deliver Consistency and Flow Through
                  Scalable Design
                </div>
              </div>

              <div className="col-span-6 inline-flex items-start justify-between self-stretch">
                <div className="inline-flex w-52 flex-col items-start justify-start gap-6">
                  <div className="flex flex-col items-start justify-start gap-1 self-stretch rounded-xl bg-white p-5 border border-dashed border-slate-300">
                    <div className="justify-start self-stretch       text-3xl font-medium text-black">
                      60%
                    </div>
                    <div className="justify-start self-stretch       text-xs font-normal text-slate-600">
                      Increase in Design Efficiency
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1 self-stretch rounded-xl bg-white p-5 border border-dashed border-slate-300">
                    <div className="justify-start self-stretch       text-3xl font-medium text-black">
                      40%
                    </div>
                    <div className="justify-start self-stretch       text-xs font-normal text-slate-600">
                      Faster Feature Rollouts
                    </div>
                  </div>
                </div>
                <div className="inline-flex w-96 flex-col items-start justify-start gap-4">
                  <div className="justify-start self-stretch       text-sm leading-normal font-normal text-slate-600">
                    Iroshan spent a few months working with us designing the
                    next generation Leave Dates platform. He has a fantastic eye
                    for design, blending beautiful interfaces with enjoyable
                    user experiences. Iroshan is organised, methodical and
                    delivers well to an agreed timeline. Highly recommend
                    working with him.
                  </div>
                  <div className="inline-flex items-center justify-start gap-2">
                    <div className="h-8 w-8 rounded-full bg-zinc-300" />
                    <div className="flex items-center justify-center gap-1 p-1">
                      <div className="justify-start       text-sm leading-normal font-semibold text-slate-700">
                        Phil Norton
                      </div>
                      <div className="justify-start       text-sm leading-tight font-normal text-slate-500">
                        Founder, Leave Dates
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-3">
                <CustomLink href="/contact">read the case study</CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
