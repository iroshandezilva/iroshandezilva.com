import Image from "next/image";
// import { ArrowRight } from "@phosphor-icons/react";
// import { CustomLink } from "@/components/shared/3d-button";

interface Stat {
  value?: string | number;
  description: string;
}

interface CaseStudyCardProps {
  className?: string; // Add className prop
  imageSrc: string;
  productName: string;
  productColor?: string; // Add new prop for product color
  year: string | number;
  title: string;
  testimonial?: string;
  clientName?: string; // Make optional
  clientTitle?: string; // Make optional
  clientImage?: string;
  stats?: Stat[];
  link: string;
  caseStudyButtonText?: string;
  variant?: "row" | "column";
}

export default function CaseStudyCard({
  className = "", // Add default value for className
  imageSrc,
  productName,
  productColor = "text-cyan-500", // Default color if none is provided
  year,
  title,
  testimonial,
  clientName = "", // Provide default value
  clientTitle = "", // Provide default value
  clientImage,
  stats = [],
  // link,
  // caseStudyButtonText = "Read the case study",
  variant = "row",
}: CaseStudyCardProps) {
  const isColumn = variant === "column";

  return (
    <div
      className={`mx-auto flex ${isColumn ? "flex-col" : "flex-col lg:flex-row"} items-center gap-9 ${className}`}
    >
      <div className={`w-full ${!isColumn ? "lg:w-1/2" : ""}`}>
        <Image
          src={imageSrc}
          alt={productName + " platform screenshot"}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full rounded-xl border border-black/10"
          priority
        />
      </div>

      <div
        className={`flex w-full flex-col items-start justify-start gap-6 ${!isColumn ? "lg:w-1/2" : ""}`}
      >
        <div className="mb-4 flex flex-col items-start justify-start gap-3 self-stretch">
          <div className="inline-flex items-center justify-start gap-2">
            <div
              className={`justify-start text-base leading-normal font-semibold uppercase ${productColor}`}
            >
              {productName}
            </div>
            <div className="text-base leading-tight font-normal text-stone-400">
              {year}
            </div>
          </div>
          <h3 className="font-heading justify-start self-stretch text-xl leading-normal text-slate-900 md:text-3xl lg:leading-9">
            {title}
          </h3>
        </div>

        {stats.length > 0 && (
          <div className="flex w-full flex-row gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex w-1/2 flex-col items-start justify-start gap-1 rounded-xl border border-dashed border-slate-300 bg-white p-5"
              >
                {stat.value && (
                  <div className="justify-start self-stretch text-3xl font-medium text-black">
                    {stat.value}
                  </div>
                )}
                <div className="justify-start self-stretch text-xs font-normal text-slate-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        )}

        {testimonial && (
          <div className="inline-flex flex-col items-start justify-start bg-stone-200/40 p-6">
            <div className="justify-start self-stretch text-sm leading-normal font-normal text-slate-600">
              {testimonial}
            </div>
            {(clientName || clientTitle) && (
              <div className="mt-4 inline-flex items-center justify-start gap-2">
                {clientImage ? (
                  <div className="h-8 w-8 overflow-hidden rounded-full">
                    <Image
                      src={clientImage}
                      alt={`${clientName} profile picture`}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-8 w-8 rounded-full bg-zinc-300" />
                )}
                <div className="flex items-center justify-center gap-1 p-1">
                  {clientName && (
                    <div className="justify-start text-sm leading-normal font-semibold text-slate-700">
                      {clientName}
                    </div>
                  )}
                  {clientTitle && (
                    <div className="justify-start text-sm leading-tight font-normal text-slate-500">
                      {clientTitle}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* <div className="col-span-3">
          <CustomLink
            variant="outline"
            size="lg"
            leadingIcon={ArrowRight}
            iconSize={20}
            iconWeight="bold"
            href={link}
          >
            {caseStudyButtonText}
          </CustomLink>
        </div> */}
      </div>
    </div>
  );
}
