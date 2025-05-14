import Image from "next/image";
import Link from "next/link";
// Tooltip imports preserved for future use
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

interface ClientLogoProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  website?: string; // Optional website URL
}

export default function ClientLogo({
  src,
  alt,
  className = "",
  priority = false,
  website,
}: ClientLogoProps) {
  // Extract company name from alt text for tooltip
  const companyName = alt.replace(" logo", "");

  const imageElement = (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className={`h-auto w-full max-w-[150px]`}
      priority={priority}
    />
  );

  // Only show link if website is provided
  // Note: Tooltips are temporarily hidden but can be restored by uncommenting the tooltip imports
  // and wrapping the Link component with TooltipProvider, Tooltip, TooltipTrigger, and TooltipContent
  return (
    <div className="flex h-28 w-full items-center justify-center rounded-lg bg-stone-200/40 grayscale-100 filter">
      {website ? (
        <Link
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${companyName} website`}
        >
          {imageElement}
        </Link>
      ) : (
        // No link if no website is provided
        imageElement
      )}
    </div>
  );
}
