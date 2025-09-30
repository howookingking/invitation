"use client";

import { micah } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { useMemo } from "react";

export default function DicebearAvatar({ size = 32 }: { size?: number }) {
  const avatar = useMemo(
    () =>
      createAvatar(micah, {
        size,
        radius: 50,
        backgroundColor: ["b6e3f4", "c0aede", "d1d4f9"],
        seed: "Amaya",
        backgroundType: ["gradientLinear", "solid"],
        shirt: ["collared", "crew", "open"], // 필수
        nose: ["curve", "pointed", "tound"], // 팔수
        mouth: ["laughing", "nervous", "smile", "smirk", "surprised"], // 필수
        hairColor: ["000000", "6bd9e9", "9287ff"], // 필수
        hair: ["dannyPhantom", "full", "pixie", "mrClean", "mrT"],
        // .sort(
        // () => Math.random() - 0.5,
        // ), // 필수
        glassesProbability: 100, // 0 or 100
        glassesColor: ["000000"], // 고정
        glasses: ["round", "square"], // 필수
        eyes: ["eyes", "smiling", "round"], // 필수
      }).toDataUri(),
    [],
  );

  return (
    <img src={avatar} alt="Avatar" className="ring-primary rounded-full" />
  );
}
