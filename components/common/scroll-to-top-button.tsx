"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50 md:right-10 md:bottom-10">
      <Button
        onClick={scrollToTop}
        size="icon"
        aria-label="Scroll to top"
        className={cn(
          "rounded-full transition-all duration-500",
          isVisible ? "scale-100" : "scale-0",
        )}
      >
        <ArrowUpIcon className="h-6 w-6" />
      </Button>
    </div>
  );
}
