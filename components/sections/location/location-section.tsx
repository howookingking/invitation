import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";
import GoogleMap from "./google-map";
import OtherMapProviders from "./other-map-providers";
import TransportationInfo from "./transportation-info";

export default function LocationSection() {
  return (
    <SectionContainer id="location" className="py-10">
      <SectionTitle korTitle="오시는길" engTitle="LOCATION" className="pb-10" />

      <GoogleMap />
      <OtherMapProviders />

      <TransportationInfo />
    </SectionContainer>
  );
}
