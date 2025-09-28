"use client";

import { SECTIONS } from "@/app/page";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function SectionIndicator() {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (index: number) => {
    setCurrentSection(index);
    const element = document.getElementById(SECTIONS[index]);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      SECTIONS.forEach((section, index) => {
        const element = document.getElementById(section);
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
    <div className="fixed right-2 top-1/2 transform -translate-y-1/2 z-50 gap-3 flex flex-col">
      {SECTIONS.map((_, index) => (
        <Button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 p-0 hover:bg-rose-400 cursor-pointer ${
            currentSection === index
              ? "bg-rose-500 h-6"
              : "bg-rose-200 hover:bg-rose-300"
          }`}
        />
      ))}
    </div>
  );
}
