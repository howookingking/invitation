"use client";

import DotLottie from "@/components/common/dot-lottie";
import { cn } from "@/lib/utils";
import howoo from "@/public/photos/howoo.png";
import olly from "@/public/photos/olly.png";
import Image from "next/image";
import { useState } from "react";

export default function InterativePets() {
  const [hovered, setHovered] = useState<"howoo" | "olly" | null>(null);
  const [hearts, setHearts] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
    }>
  >([]);
  const [preventHide, setPreventHide] = useState(false);
  const [heartIdCounter, setHeartIdCounter] = useState(0);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newHeartId = heartIdCounter + 1;

    const newHeart = {
      id: newHeartId,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    setHearts((prev) => [...prev, newHeart]);
    setHeartIdCounter(newHeartId);

    setPreventHide(true);

    setTimeout(() => {
      setPreventHide(false);
    }, 300);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== newHeartId));
    }, 2000);
  };

  const handleMouseEnter = (cat: "howoo" | "olly") => {
    setHovered(cat);
  };

  const handleMouseLeave = () => {
    if (!preventHide) {
      setHovered(null);
    }
  };

  return (
    <div className="relative inline-block select-none">
      <div className="relative cursor-pointer" onClick={handleClick}>
        <div
          className="z-20 h-full w-1/2"
          onMouseEnter={() => handleMouseEnter("howoo")}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={cn(
              hovered === "howoo"
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
            )}
          >
            <Image
              src={howoo}
              alt="Howoo"
              width={300}
              height={300}
              className="pointer-events-none -rotate-15"
              placeholder="blur"
            />
          </div>
        </div>

        {/* Olly hover area */}
        <div
          className="absolute top-0 right-0 z-20 h-full w-1/2"
          onMouseEnter={() => handleMouseEnter("olly")}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={cn(
              hovered === "olly"
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0",
              "absolute top-4 right-20 z-30 transition-all duration-300 ease-out"
            )}
          >
            <Image
              src={olly}
              alt="Olly"
              width={220}
              height={220}
              className="pointer-events-none rotate-12"
            />
          </div>
        </div>
      </div>

      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="lottie-container pointer-events-none absolute z-40"
          style={{
            left: `${heart.x - 50}px`,
            top: `${heart.y - 50}px`,
          }}
        >
          <DotLottie
            fileName="heart"
            speed={2}
            loop={false}
            style={{
              width: "100px",
              height: "100px",
              transform: "scale(1.2)",
              opacity: 0.9,
              pointerEvents: "none",
            }}
          />
        </div>
      ))}
    </div>
  );
}
