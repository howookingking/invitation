import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  id: string;
  className?: string;
};

export default function SectionContainer({ children, id, className }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex h-lvh flex-col justify-center overflow-hidden",
        className,
      )}
    >
      {children}
    </section>
  );
}
