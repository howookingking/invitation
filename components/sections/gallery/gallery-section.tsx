import SectionContainer from "@/components/common/section-container";
import GalleryCarousel from "./gallery-carousel";
import SectionTitle from "@/components/common/section-title";

export default function GallerySection() {
  return (
    <SectionContainer id="gallery">
      <SectionTitle korTitle="갤러리" engTitle="GALLERY" />

      <GalleryCarousel />
    </SectionContainer>
  );
}
