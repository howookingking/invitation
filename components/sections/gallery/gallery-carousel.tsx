"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import p1 from "@/public/photos/gallery/1.jpg";
import p10 from "@/public/photos/gallery/10.jpg";
import p11 from "@/public/photos/gallery/11.jpg";
import p12 from "@/public/photos/gallery/12.jpg";
import p13 from "@/public/photos/gallery/13.jpg";
import p14 from "@/public/photos/gallery/14.jpg";
import p15 from "@/public/photos/gallery/15.jpg";
import p16 from "@/public/photos/gallery/16.jpg";
import p2 from "@/public/photos/gallery/2.jpg";
import p3 from "@/public/photos/gallery/3.jpg";
import p4 from "@/public/photos/gallery/4.jpg";
import p5 from "@/public/photos/gallery/5.jpg";
import p6 from "@/public/photos/gallery/6.jpg";
import p7 from "@/public/photos/gallery/7.jpg";
import p8 from "@/public/photos/gallery/8.jpg";
import p9 from "@/public/photos/gallery/9.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import EasterEggDialog from "./ester-egg-dialog";

export default function GalleryCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel opts={{ loop: true }} setApi={setApi}>
      <CarouselContent>
        {PHOTOS.map((photo, index) => (
          <CarouselItem key={photo.alt}>
            <Card className="border-0 p-0 shadow-none">
              <CardContent className="relative flex h-[650px] max-w-[430px] items-center justify-center">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  className="pointer-events-none object-contain select-none"
                  fill
                  sizes="430px"
                  priority={index < 6}
                  draggable={false}
                  placeholder="blur"
                />
                <EasterEggDialog index={index} />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        className="left-2 cursor-pointer transition hover:bg-transparent hover:text-white"
        variant="ghost"
      />
      <CarouselNext
        className="right-2 cursor-pointer transition hover:bg-transparent hover:text-white"
        variant="ghost"
      />

      <div className="absolute right-2 bottom-4 rounded-4xl bg-black/50 px-2 py-1 font-mono text-xs font-bold text-white">
        {current} / {count}
      </div>
    </Carousel>
  );
}

const PHOTOS = [
  {
    src: p1,
    alt: "1",
  },
  {
    src: p2,
    alt: "2",
  },
  {
    src: p3,
    alt: "3",
  },
  {
    src: p4,
    alt: "4",
  },
  {
    src: p5,
    alt: "5",
  },
  {
    src: p6,
    alt: "6",
  },
  {
    src: p7,
    alt: "7",
  },
  {
    src: p8,
    alt: "8",
  },
  {
    src: p9,
    alt: "9",
  },
  {
    src: p10,
    alt: "10",
  },
  {
    src: p11,
    alt: "11",
  },
  {
    src: p12,
    alt: "12",
  },
  {
    src: p13,
    alt: "13",
  },
  {
    src: p14,
    alt: "14",
  },
  {
    src: p15,
    alt: "15",
  },
  {
    src: p16,
    alt: "16",
  },
];
