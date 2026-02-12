"use client";

import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";

const YOUTUBE_VIDEO_ID = "gvX-rIXxGzU";

export default function AfterWeddingVideoSection() {
  return (
    <SectionContainer id="after-wedding-video" className="gap-6 px-0 pb-0">
      <SectionTitle korTitle="결혼식 풍경" engTitle="Wedding scene" />
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingBottom: "56.25%" }}
      >
        <iframe
          className="absolute top-0 left-0 h-full w-full"
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}`}
          title="After Wedding Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {/* Transparent cover to prevent stopping the video */}
        <div className="absolute top-0 left-0 z-10 h-full w-full" />
      </div>
    </SectionContainer>
  );
}
