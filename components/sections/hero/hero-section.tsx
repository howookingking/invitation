import SectionContainer from "@/components/common/section-container";
import { WEDDING_INFO } from "@/constants/wedding";
import heroTitle from "@/public/hero-title.gif";
import Image from "next/image";

export default function HeroSection() {
  return (
    <SectionContainer id="hero" className="h-lvh pt-0">
      <div className="absolute top-0 z-50 h-20 w-full bg-gradient-to-b from-stone-50/80 to-transparent" />

      <Image
        alt="hero title"
        src={heroTitle}
        className="absolute top-20 z-20"
      />

      <div className="absolute bottom-2 left-1/2 z-10 flex h-1/3 w-full -translate-x-1/2 flex-col items-center justify-center text-white">
        <h1 className="text-2xl tracking-wider">
          {WEDDING_INFO.groom} & {WEDDING_INFO.bride}
        </h1>

        <p className="mt-1">{WEDDING_INFO.weddingDate} 일요일</p>
        <p>{WEDDING_INFO.weddingTime}</p>
        <p>{WEDDING_INFO.venue}</p>
      </div>

      {/* <Image src={heroImage} alt="hero image" className="object-cover" fill /> */}

      <video
        src="/hero-video.webm"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      />

      {/* image bottom silhouette */}
      <div className="absolute -bottom-1 z-50 h-20 w-full bg-gradient-to-b from-transparent to-stone-50/80" />
    </SectionContainer>
  );
}
