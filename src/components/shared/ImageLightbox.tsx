"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { motion, useDomEvent } from "framer-motion";

interface ImageLightboxProps {
  children: React.ReactNode;
  alt: string;
  src: string;
}

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

export default function ImageLightbox({
  children,
  alt,
  src,
}: ImageLightboxProps) {
  const [isOpen, setOpen] = useState(false);

  // Close lightbox on scroll
  useDomEvent(
    useRef(typeof window !== "undefined" ? window : null),
    "scroll",
    () => isOpen && setOpen(false),
  );

  // Close on escape key press
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  return (
    <div
      className={`relative h-auto w-full ${isOpen ? "cursor-zoom-out" : "cursor-zoom-in"} m-0`}
    >
      {/* Black overlay that appears when image is expanded */}
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={transition}
        className={`fixed inset-0 z-[100] bg-black/90 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* The actual image with layout animation */}
      <div onClick={() => setOpen(!isOpen)} className="block h-auto w-full">
        {children}
      </div>

      {/* When opened, show the full image with layout animation */}
      {isOpen && (
        <motion.img
          src={src}
          alt={alt}
          layout
          transition={transition}
          className="fixed inset-0 z-[101] m-auto h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}
