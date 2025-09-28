import { WEDDING_INFO } from "@/app/page";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import heroImage from "@/public/photos/hero1.jpeg";

export default function HeroSection() {
  return (
    <section
      id="main"
      className="min-h-screen flex flex-col relative overflow-hidden"
    >
      <div className="mt-10 z-50 gap-2 flex flex-col items-center justify-center">
        <p className="text-rose-600 text-sm tracking-wider">
          WEDDING INVITATION
        </p>

        <h1 className="text-4xl font-light text-gray-800 tracking-wide">
          {WEDDING_INFO.groom} & {WEDDING_INFO.bride}
        </h1>

        <div className="w-24 h-px bg-rose-300 mx-auto"></div>

        <div className="space-y-1 text-gray-600 flex flex-col items-center mt-2">
          <p className="text-lg">{WEDDING_INFO.weddingDate}</p>
          <p className="text-base">{WEDDING_INFO.weddingTime}</p>
          <p className="text-base">{WEDDING_INFO.venueAddress}</p>
          <p className="text-base">{WEDDING_INFO.venue}</p>
        </div>
      </div>

      {/* Floating Hearts Animation */}
      {/* <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <HeartIcon
            key={i}
            className={`absolute text-rose-500 animate-bounce opacity-20`}
            size={16 + (i % 3) * 8}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}

      

      </div> */}

      <Image
        src={heroImage}
        alt="hero image"
        className="absolute object-contain bottom-0"
      />

      <div className="text-center z-10 space-y-8 animate-fade-in mb-60">
        {/* <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
          <HeartIcon
            className="text-rose-500 mx-auto mb-3 animate-pulse"
            size={32}
          />
          <p className="text-gray-700 text-sm leading-relaxed">
            저희 두 사람이 사랑으로 하나되는
            <br />
            소중한 순간에 함께해 주시면
            <br />
            더없는 기쁨이겠습니다
          </p>
        </div> */}
      </div>
    </section>
  );
}
