import SectionContainer from "@/components/common/section-container";
import { WEDDING_INFO } from "@/constants/wedding";
import heroImage from "@/public/photos/hero1.jpeg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <SectionContainer id="hero" className="h-lvh">
      <div className="z-10 flex h-1/3 flex-col items-center justify-center gap-2 pt-40">
        <p className="text-lg tracking-wider text-rose-500">
          We Are Getting Married
        </p>

        <h1 className="border-primary/50 border-b pb-2 text-4xl tracking-wider text-gray-800">
          {WEDDING_INFO.groom} & {WEDDING_INFO.bride}
        </h1>

        <div className="mt-2 flex flex-col items-center gap-2 text-gray-600">
          <p className="text-lg">{WEDDING_INFO.weddingDate}</p>
          <p>{WEDDING_INFO.weddingTime}</p>
          <p className="tracking-tight">{WEDDING_INFO.venueAddress}</p>
          <p>{WEDDING_INFO.venue}</p>
        </div>
      </div>

      <div className="relative h-2/3 w-full">
        {/* image top silhouette */}
        <div className="absolute top-0 z-50 h-20 w-full bg-gradient-to-b from-white to-transparent" />

        <Image src={heroImage} alt="hero image" className="object-cover" fill />

        {/* image bottom silhouette */}
        <div className="absolute bottom-0 z-50 h-20 w-full bg-gradient-to-b from-transparent to-white" />
      </div>
    </SectionContainer>
  );
}
