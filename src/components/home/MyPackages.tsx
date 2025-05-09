import React from "react";

const MyPackages = () => {
  return (
    <section className="mx-auto max-w-3xl">
      <div className="inline-flex flex-col items-start justify-start gap-10">
        <div className="inline-flex items-start justify-start gap-8 self-stretch">
          <div className="inline-flex h-48 flex-1 flex-col items-center justify-between overflow-hidden rounded-xl bg-white px-4 py-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-neutral-300">
            <div className="flex flex-col items-start justify-start gap-1 self-stretch">
              <div className="justify-start self-stretch font-['Inter'] text-xs leading-tight font-normal text-gray-400">
                FROM O TO 1
              </div>
              <div className="justify-start self-stretch font-['Inter'] text-base leading-snug font-normal text-gray-600">
                Build the best app, from scratch
              </div>
            </div>
            <div className="inline-flex h-9 items-center justify-start gap-1 self-stretch py-[3px]">
              <div className="inline-flex flex-1 flex-col items-start justify-start gap-1">
                <div className="justify-start self-stretch font-['Inter'] text-xs font-medium text-gray-900">
                  $2,600
                </div>
                <div className="justify-start self-stretch font-['Inter'] text-xs font-medium text-gray-400">
                  USD/month
                </div>
              </div>
              <div className="relative h-5 w-5">
                <div className="absolute top-[1.67px] left-[1.67px] h-4 w-4 outline-[1.50px] outline-offset-[-0.75px] outline-neutral-300" />
                <div className="absolute top-[6.67px] left-[6.67px] h-1.5 w-1.5 outline-[1.50px] outline-offset-[-0.75px] outline-neutral-300" />
              </div>
            </div>
          </div>
          <div className="inline-flex h-48 flex-1 flex-col items-center justify-between overflow-hidden rounded-xl bg-white px-4 py-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-neutral-300">
            <div className="flex flex-col items-start justify-start gap-1 self-stretch">
              <div className="justify-start self-stretch font-['Inter'] text-xs leading-tight font-normal text-gray-400">
                CONSULTING
              </div>
              <div className="justify-start self-stretch font-['Inter'] text-base leading-snug font-normal text-gray-600">
                Performance audits,
                <br />
                team support or else
              </div>
            </div>
            <div className="inline-flex h-9 items-center justify-start gap-1 self-stretch py-[3px]">
              <div className="inline-flex flex-1 flex-col items-start justify-start gap-1">
                <div className="justify-start self-stretch font-['Inter'] text-xs font-medium text-gray-900">
                  $35
                </div>
                <div className="justify-start self-stretch font-['Inter'] text-xs font-medium text-gray-400">
                  USD/Hourly
                </div>
              </div>
              <div className="relative h-5 w-5">
                <div className="absolute top-[1.67px] left-[1.67px] h-4 w-4 outline-[1.50px] outline-offset-[-0.75px] outline-neutral-300" />
                <div className="absolute top-[6.67px] left-[6.67px] h-1.5 w-1.5 outline-[1.50px] outline-offset-[-0.75px] outline-neutral-300" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-3 self-stretch">
          <div className="justify-start self-stretch font-['Inter'] text-2xl leading-loose font-normal text-slate-800">
            &quot;We frequently recommend A&F to folks that come to us looking
            for help with their React Native apps.&quot;
          </div>
          <div className="inline-flex items-center justify-start gap-2">
            <div className="h-8 w-8 rounded-full bg-zinc-300" />
            <div className="flex items-center justify-center gap-1 p-1">
              <div className="justify-start font-['Inter'] text-xs leading-tight font-medium text-gray-900">
                Phil Norton
              </div>
              <div className="justify-start font-['Inter'] text-xs leading-tight font-normal text-gray-400">
                Founder, Leave Dates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPackages;
