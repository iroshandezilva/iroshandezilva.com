"use client";

import React from "react";
import Image from "next/image";
import ImageLightbox from "@/components/shared/ImageLightbox";

interface EnhancedImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export default function EnhancedImage({
  src,
  alt = "",
  width,
  height,
  ...props
}: EnhancedImageProps) {
  return (
    <ImageLightbox src={src} alt={alt}>
      <Image
        src={src}
        alt={alt || ""}
        width={width || 1200}
        height={height || 800}
        className="h-auto max-w-full"
        unoptimized={src.startsWith("http")}
        {...props}
      />
    </ImageLightbox>
  );
}
