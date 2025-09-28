import { WEDDING_INFO } from "@/app/page";
import SectionContainer from "@/components/common/section-container";
import { Separator } from "@/components/ui/separator";
import heroImage from "@/public/photos/hero1.jpeg";
import { HeartIcon } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <SectionContainer id="hero">
      <div className="flex h-1/3 flex-col items-center justify-center gap-2">
        <p className="text-lg tracking-wider text-rose-600">
          WEDDING INVITATION
        </p>

        <h1 className="text-4xl font-light tracking-wide text-gray-800">
          {WEDDING_INFO.groom} & {WEDDING_INFO.bride}
        </h1>

        <div className="h-px w-40 bg-rose-300" />

        <div className="mt-2 flex flex-col items-center space-y-1 text-gray-600">
          <p className="text-lg">{WEDDING_INFO.weddingDate}</p>
          <p className="text-base">{WEDDING_INFO.weddingTime}</p>
          <p className="text-base">{WEDDING_INFO.venueAddress}</p>
          <p className="text-base">{WEDDING_INFO.venue}</p>
        </div>
      </div>

      <div className="relative z-10 h-2/3 w-full">
        <div className="absolute top-0 z-50 h-20 w-full bg-gradient-to-b from-white to-transparent" />

        <Image src={heroImage} alt="hero image" className="object-cover" fill />

        <div className="absolute bottom-0 z-50 h-20 w-full bg-gradient-to-b from-transparent to-white" />
      </div>
    </SectionContainer>
  );
}
