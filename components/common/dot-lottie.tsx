"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import React from "react";

type Props = {
  fileName: string;
  speed?: number;
  style?: React.CSSProperties;
  loop?: boolean;
};

export default function DotLottie({
  fileName,
  speed = 1,
  style,
  loop = true,
}: Props) {
  return (
    <DotLottiePlayer
      src={`/lottie/${fileName}.lottie`}
      speed={speed}
      autoplay
      loop={loop}
      style={style}
    />
  );
}
