"use client";

import DotLottie from "@/components/common/dot-lottie";
import { PET_ORDER } from "@/constants/easter-egg";
import { cn } from "@/lib/utils";
import hongsam from "@/public/photos/hongsam.png";
import howoo from "@/public/photos/howoo.png";
import olly from "@/public/photos/olly.png";
import { useEasterEggStore } from "@/store/use-easter-egg-store";
import Image from "next/image";
import { useRef, useState } from "react";
import SpeechBallooon from "./speech-ballooon";

type PetEnum = "howoo" | "olly" | "hongsam" | null;

export default function InterativePets() {
  const { setStep } = useEasterEggStore();

  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<PetEnum>(null);
  const [hearts, setHearts] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
    }>
  >([]);
  const [heartIdCounter, setHeartIdCounter] = useState(0);
  const [_, setClickedSequence] = useState<PetEnum[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [clickedPet, setClickedPet] = useState<PetEnum>(null);

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    // 터치 이벤트와 마우스 이벤트 모두 처리
    const clientX = "touches" in e ? e.touches[0]?.clientX || 0 : e.clientX;
    const clientY = "touches" in e ? e.touches[0]?.clientY || 0 : e.clientY;

    // 컨테이너를 기준으로 좌표 계산
    const rect = containerRef.current.getBoundingClientRect();
    const newHeartId = heartIdCounter + 1;

    const newHeart = {
      id: newHeartId,
      x: clientX - rect.left,
      y: clientY - rect.top,
    };

    setClickedPet(e.currentTarget.id as PetEnum);

    setHeartIdCounter(newHeartId);
    setHearts((prev) => [...prev, newHeart]);

    // 하트 제거
    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== newHeartId));
    }, 2000);

    setClickedSequence((prev) => {
      const newSeq = [...prev, hovered];

      if (newSeq.length > PET_ORDER.length) {
        newSeq.shift();
      }

      if (
        newSeq.length === PET_ORDER.length &&
        newSeq.every((order, i) => order === PET_ORDER[i])
      ) {
        setIsCorrect(true);
        setTimeout(() => {
          setStep(1);
        }, 0);
      }

      return newSeq;
    });
  };

  return (
    <div className="relative select-none" ref={containerRef}>
      <div className="flex items-center justify-center gap-2">
        <div className="relative w-1/3">
          <Image
            id="olly"
            alt="olly"
            src={olly}
            className={cn(
              "cursor-pointer transition duration-400",
              hovered === "olly" && !isCorrect && "scale-120",
            )}
            onMouseEnter={() => setHovered("olly")}
            onTouchStart={() => setHovered("olly")}
            onClick={handleClick}
          />
          <SpeechBallooon
            isCorrect={isCorrect}
            korPetName="올리"
            message="와줄거지??"
            answer="갤러리"
            shouldShow={clickedPet === "olly" || isCorrect}
          />
        </div>

        <div className="relative w-1/3">
          <Image
            id="howoo"
            alt="howoo"
            src={howoo}
            className={cn(
              "scale-125 cursor-pointer transition duration-400",
              hovered === "howoo" && !isCorrect && "scale-150",
            )}
            onMouseEnter={() => setHovered("howoo")}
            onTouchStart={() => setHovered("howoo")}
            onClick={handleClick}
          />
          <SpeechBallooon
            isCorrect={isCorrect}
            korPetName="호우"
            message="드디어 결혼하냥!!"
            answer="13"
            shouldShow={clickedPet === "howoo" || isCorrect}
          />
        </div>

        <div className="relative w-1/3">
          <Image
            id="hongsam"
            alt="hongsam"
            src={hongsam}
            className={cn(
              "scale-115 cursor-pointer transition duration-400",
              hovered === "hongsam" && !isCorrect && "scale-140",
            )}
            onMouseEnter={() => setHovered("hongsam")}
            onTouchStart={() => setHovered("hongsam")}
            onClick={handleClick}
          />
          <SpeechBallooon
            isCorrect={isCorrect}
            korPetName="홍삼"
            message="언니 결혼 축하해!~"
            answer="💐"
            shouldShow={clickedPet === "hongsam" || isCorrect}
          />
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
              zIndex: 50,
            }}
          />
        </div>
      ))}
    </div>
  );
}
