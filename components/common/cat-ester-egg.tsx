"use client";

import React, { useEffect, useMemo, useState } from "react";
import DotLottie from "./dot-lottie";

const ODDS = 1;

export default function CatEasterEgg() {
  const [isMounted, setIsMounted] = useState(false);
  const [isCatVisible, setIsCatVisible] = useState(true);
  const [isMesasageVisible, setIsMessageVisible] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [clickedCount, setClickedCount] = useState(0);

  //   const shouldShow = useMemo(() => Math.random() < ODDS, []);

  // 방향 랜덤 선택
  const side = useMemo(() => {
    const options = ["right", "left"] as const;
    return options[Math.floor(Math.random() * options.length)];
  }, []);

  // 위치 랜덤 선택
  const position = useMemo(() => {
    const options = [300, 350, 400] as const;
    return options[Math.floor(Math.random() * options.length)];
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (!isCatVisible) return null;

  // 기본 스타일
  const baseStyle: React.CSSProperties = {
    width: "100px",
    height: "100px",
    position: "absolute",
    zIndex: 999,
    transition: "transform 0.7s ease, opacity 0.7s ease",
    cursor: "pointer",
  };

  // 위치 + 회전 스타일
  const styleMap: Record<typeof side, React.CSSProperties> = {
    right: {
      ...baseStyle,
      right: 0,
      top: `${position}vh`,
      transform: isHiding
        ? "translateX(150%) rotate(-90deg)"
        : "rotate(-90deg)",
    },
    left: {
      ...baseStyle,
      left: 0,
      top: `${position}vh`,
      transform: isHiding ? "translateX(-150%) rotate(90deg)" : "rotate(90deg)",
    },
  };

  const messageStyle: Record<typeof side, React.CSSProperties> = {
    right: {
      top: 10,
      left: 5.5,
      transform: "rotate(90deg)",
      opacity: isMesasageVisible ? 1 : 0,
      transition: "opacity 0.7s ease",
    },
    left: {
      top: 10,
      left: 5.5,
      transform: "rotate(-90deg)",
      opacity: isMesasageVisible ? 1 : 0,
      transition: "opacity 0.7s ease",
    },
  };

  const handleClick = () => {
    if (clickedCount === 0) {
      setIsMessageVisible(true);
      setClickedCount(clickedCount + 1);
    }
    if (clickedCount === 1) {
      setIsHiding(true);
      setTimeout(() => setIsCatVisible(false), 700);
    }
  };

  return (
    <div onClick={handleClick} style={styleMap[side]} className="relative">
      <DotLottie
        fileName="cat-hiding"
        loop={false}
        style={{ width: "100%", height: "100%" }}
      />

      <>
        <div
          className="absolute flex justify-center rounded-xs bg-white p-1 text-sm break-keep ring-2 ring-rose-200"
          style={messageStyle[side]}
        >
          호올홍홍올호
        </div>
      </>
    </div>
  );
}
