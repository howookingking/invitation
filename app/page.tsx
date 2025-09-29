import AccountSection from "@/components/sections/account/account-section";
import GallerySection from "@/components/sections/gallery/gallery-section";
import HeroSection from "@/components/sections/hero/hero-section";
import LocationSection from "@/components/sections/location/location-section";
import MessageSection from "@/components/sections/message/message-section";
import WeddingInfoSection from "@/components/sections/wedding-info/wedding-info-section";

export default function Home() {
  // const copyToClipboard = async (text, type) => {
  //   try {
  //     await navigator.clipboard.writeText(text);
  //     setCopied(type);
  //     setTimeout(() => setCopied(""), 2000);
  //   } catch (err) {
  //     console.error("복사 실패:", err);
  //   }
  // };

  return (
    <>
      {SECTIONS.map((section) => (
        <div key={section.id}>{section.component}</div>
      ))}
    </>
  );
}

export const SECTIONS = [
  {
    id: "hero",
    component: <HeroSection />,
  },
  {
    id: "message",
    component: <MessageSection />,
  },
  {
    id: "info",
    component: <WeddingInfoSection />,
  },
  {
    id: "location",
    component: <LocationSection />,
  },
  {
    id: "gallery",
    component: <GallerySection />,
  },
  {
    id: "account",
    component: <AccountSection />,
  },
] as const;
