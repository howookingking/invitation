"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  id: string;
  className?: string;
  animationDelay?: number; // 자식 요소들 간의 딜레이 (ms)
};

export default function SectionContainer({
  children,
  id,
  className,
  animationDelay = 100,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // 자식 요소들에 애니메이션 클래스와 딜레이 추가
  const animatedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)) {
      return React.cloneElement(child, {
        className: cn(
          child.props.className,
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        ),
        style: {
          ...child.props.style,
          transitionDelay: `${index * animationDelay}ms`,
        },
      });
    }
    return child;
  });

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "relative flex h-lvh snap-start snap-always flex-col justify-center overflow-hidden",
        className,
      )}
    >
      {animatedChildren}
    </section>
  );
}
