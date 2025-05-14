import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FigureProps {
  src?: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
  align?: "left" | "center" | "right";
  className?: string;
  children?: React.ReactNode;
}

export function Figure({
  src,
  alt = "",
  caption,
  width = 1200,
  height = 800,
  align = "left",
  className,
  children,
}: FigureProps) {
  return (
    <figure
      data-align={align}
      className={cn(
        "relative my-8 w-full",
        align === "center" && "flex flex-col items-center text-center",
        align === "right" && "flex flex-col items-end text-right",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-md">
        <div className="absolute inset-0 z-10 bg-black/10 opacity-0 transition-opacity duration-300"></div>
        <div>
          {src ? (
            <Image
              alt={alt}
              src={src}
              width={width}
              height={height}
              loading="lazy"
              decoding="async"
              data-nimg="1"
              className="h-auto max-w-full"
              style={{ color: "transparent" }}
            />
          ) : (
            children
          )}
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-stone-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
