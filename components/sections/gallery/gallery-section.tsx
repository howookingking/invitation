import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";
import GalleryCarousel from "./gallery-carousel";

export default function GallerySection() {
  return (
    <SectionContainer id="gallery">
      <SectionTitle korTitle="갤러리" engTitle="GALLERY" className="pb-10" />

      <GalleryCarousel />
    </SectionContainer>
  );
}
