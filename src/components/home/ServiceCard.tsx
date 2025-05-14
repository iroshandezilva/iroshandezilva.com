import { IconProps } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
  className?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "inline-flex items-start justify-start gap-4 self-stretch rounded-xl border bg-stone-100 p-6",
        className,
      )}
    >
      <div className="flex w-8 items-center justify-center gap-1 overflow-hidden rounded-lg bg-white px-[5px] py-1.5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-neutral-300">
        <div className="relative h-5 w-5">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </div>
      </div>
      <div className="inline-flex flex-1 flex-col items-start justify-start gap-1">
        <h4 className="justify-start self-stretch text-base leading-snug font-medium text-black">
          {title}
        </h4>
        <div className="justify-start self-stretch text-base leading-snug font-normal text-gray-600">
          {description}
        </div>
      </div>
    </div>
  );
}
