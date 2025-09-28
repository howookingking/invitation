"use client";

import DotLottie from "@/components/common/dot-lottie";
import { cn } from "@/lib/utils";
import hongsam from "@/public/photos/hongsam.png";
import howoo from "@/public/photos/howoo.png";
import olly from "@/public/photos/olly.png";
import Image from "next/image";
import { useRef, useState } from "react";

type PetEnum = "howoo" | "olly" | "hongsam" | null;

interface Message {
  id: number;
  petType: PetEnum;
  isExiting: boolean;
}

export default function InterativePets() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<PetEnum>(null);
  const [hearts, setHearts] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
    }>
  >([]);
  const [preventHide, setPreventHide] = useState(false);
  const [heartIdCounter, setHeartIdCounter] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageIdCounter, setMessageIdCounter] = useState(0);

  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    // 컨테이너를 기준으로 좌표 계산
    const rect = containerRef.current.getBoundingClientRect();
    const newHeartId = heartIdCounter + 1;
    const newMessageId = messageIdCounter + 1;

    const newHeart = {
      id: newHeartId,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    const newMessage = {
      id: newMessageId,
      petType: hovered,
      isExiting: false,
    };

    setHearts((prev) => [...prev, newHeart]);
    setHeartIdCounter(newHeartId);
    setMessages((prev) => [...prev, newMessage]);
    setMessageIdCounter(newMessageId);

    setPreventHide(true);

    setTimeout(() => {
      setPreventHide(false);
    }, 300);

    // 하트 제거
    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== newHeartId));
    }, 2000);

    // 메시지 exit 애니메이션 시작
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((message) =>
          message.id === newMessageId
            ? { ...message, isExiting: true }
            : message,
        ),
      );
    }, 1700); // 2초보다 300ms 일찍 시작

    // 메시지 제거 (exit 애니메이션 후)
    setTimeout(() => {
      setMessages((prev) =>
        prev.filter((message) => message.id !== newMessageId),
      );
    }, 2000);
  };

  const handleMouseEnter = (pet: PetEnum) => {
    setHovered(pet);
  };

  const handleMouseLeave = () => {
    if (!preventHide) {
      setHovered(null);
    }
  };

  // 특정 펫 타입의 메시지 가져오기
  const getMessageForPet = (petType: PetEnum) => {
    const petMessages = messages.filter((msg) => msg.petType === petType);
    return petMessages.length > 0 ? petMessages[petMessages.length - 1] : null;
  };

  return (
    <div className="relative select-none" ref={containerRef}>
      <div className="flex items-center justify-center gap-2">
        <div
          className={cn("relative w-1/3", hovered === "olly" ? "z-30" : "z-0")}
        >
          <Image
            alt="olly"
            src={olly}
            className={cn(
              "cursor-pointer transition duration-400 hover:scale-150",
              hovered === "olly" ? "z-30" : "z-0",
            )}
            onMouseEnter={() => handleMouseEnter("olly")}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
          {(() => {
            const message = getMessageForPet("olly");
            return (
              message && (
                <div
                  className={cn(
                    "translate-y-50% pointer-events-none absolute -top-15 left-1/2 z-50 w-34 -translate-x-1/2 transition-all duration-300",
                    message.isExiting
                      ? "animate-out fade-out slide-out-to-bottom-2 zoom-out-95"
                      : "animate-in fade-in slide-in-from-bottom-2 zoom-in-95",
                  )}
                >
                  <div className="rounded-2xl bg-white px-4 py-2 text-center text-xs ring-4 ring-rose-200">
                    <span className="font-bold">올리</span>
                    <br /> 만져줘서 고마워!!!
                  </div>
                  <div className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-t-4 border-r-4 border-l-4 border-t-rose-200 border-r-transparent border-l-transparent" />
                </div>
              )
            );
          })()}
        </div>

        <div
          className={cn("relative w-1/3", hovered === "howoo" ? "z-30" : "z-0")}
        >
          <Image
            alt="howoo"
            src={howoo}
            className={cn(
              "scale-125 cursor-pointer transition duration-400 hover:scale-190",
              hovered === "howoo" ? "z-30" : "z-0",
            )}
            onMouseEnter={() => handleMouseEnter("howoo")}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
          {(() => {
            const message = getMessageForPet("howoo");
            return (
              message && (
                <div
                  className={cn(
                    "translate-y-50% pointer-events-none absolute -top-15 left-1/2 z-50 w-34 -translate-x-1/2 transition-all duration-300",
                    message.isExiting
                      ? "animate-out fade-out slide-out-to-bottom-2 zoom-out-95"
                      : "animate-in fade-in slide-in-from-bottom-2 zoom-in-95",
                  )}
                >
                  <div className="rounded-2xl bg-white px-4 py-2 text-center text-xs ring-4 ring-rose-200">
                    <span className="font-bold">호우</span>
                    <br />너 누구냥!!??
                  </div>
                  <div className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-t-4 border-r-4 border-l-4 border-t-rose-200 border-r-transparent border-l-transparent" />
                </div>
              )
            );
          })()}
        </div>

        <div
          className={cn(
            "relative w-1/3",
            hovered === "hongsam" ? "z-30" : "z-0",
          )}
        >
          <Image
            alt="hongsam"
            src={hongsam}
            className={cn(
              "scale-115 cursor-pointer transition duration-400 hover:scale-170",
              hovered === "hongsam" ? "z-30" : "z-0",
            )}
            onMouseEnter={() => handleMouseEnter("hongsam")}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
          {(() => {
            const message = getMessageForPet("hongsam");
            return (
              message && (
                <div
                  className={cn(
                    "translate-y-50% pointer-events-none absolute -top-15 left-1/2 z-50 w-34 -translate-x-1/2 transition-all duration-300",
                    message.isExiting
                      ? "animate-out fade-out slide-out-to-bottom-2 zoom-out-95"
                      : "animate-in fade-in slide-in-from-bottom-2 zoom-in-95",
                  )}
                >
                  <div className="rounded-2xl bg-white px-4 py-2 text-center text-xs ring-4 ring-rose-200">
                    <span className="font-bold">홍삼</span>
                    <br />
                    도망 도망~~~
                  </div>
                  <div className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-t-4 border-r-4 border-l-4 border-t-rose-200 border-r-transparent border-l-transparent" />
                </div>
              )
            );
          })()}
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
