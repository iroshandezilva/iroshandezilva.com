import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return (
    <div
      role="separator"
      className={cn(
        "mx-12 h-px max-w-xl bg-stone-200 md:mx-auto md:h-[0.5px]",
        className,
      )}
    ></div>
  );
};

export default Divider;
