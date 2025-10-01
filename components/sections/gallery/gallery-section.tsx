import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";
import GalleryCarousel from "./gallery-carousel";

export default function GallerySection() {
  return (
    <SectionContainer id="gallery" className="py-10">
      <SectionTitle korTitle="갤러리" engTitle="GALLERY" />

      <GalleryCarousel />
    </SectionContainer>
  );
}
