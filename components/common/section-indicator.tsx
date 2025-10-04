"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { SECTIONS } from "@/app/page";
import useIsMobile from "@/hooks/use-is-mobile";
import { cn } from "@/lib/utils";

export default function SectionIndicator() {
  const isMobile = useIsMobile();

  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (index: number) => {
    setCurrentSection(index);
    const element = document.getElementById(SECTIONS[index].id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      SECTIONS.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        isMobile
          ? "hidden"
          : "fixed top-1/2 right-2 z-50 flex -translate-y-1/2 transform flex-col gap-3",
      )}
    >
      {SECTIONS.map((_, index) => (
        <Button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`h-3 w-3 rounded-full p-0 transition-all duration-300 hover:bg-rose-400 ${
            currentSection === index
              ? "h-6 bg-rose-500"
              : "bg-rose-200 hover:bg-rose-300"
          }`}
        />
      ))}
    </div>
  );
}
