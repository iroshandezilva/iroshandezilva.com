import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return (
    <div
      role="separator"
      className={cn("md:h-[0.5px] h-px bg-stone-200 w-full max-w-xl md:mx-auto mx-12", className)}
    ></div>
  );
};

export default Divider;
