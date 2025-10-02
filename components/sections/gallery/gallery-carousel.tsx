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
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
      <CarouselContent>
        {Array.from({ length: 21 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="border-0 p-0 shadow-none">
              <CardContent className="relative flex h-[660px] max-w-[430px] items-center justify-center">
                <Image
                  src={`/photos/gallery/${index + 1}.jpg`}
                  alt="gallery"
                  className="object-contain"
                  fill
                  sizes="width: 430px"
                  priority={index < 6}
                  draggable={false}
                  // TODO: blurDataURL
                />
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
