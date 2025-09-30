import AccountSection from "@/components/sections/account/account-section";
import Footer from "@/components/sections/footer/footer";
import GallerySection from "@/components/sections/gallery/gallery-section";
import GuestbookSection from "@/components/sections/guestbook/guestbook-section";
import HeroSection from "@/components/sections/hero/hero-section";
import LocationSection from "@/components/sections/location/location-section";
import MessageSection from "@/components/sections/message/message-section";
import WeddingInfoSection from "@/components/sections/wedding-info/wedding-info-section";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      {SECTIONS.map((section) => (
        <div key={section.id}>{section.component}</div>
      ))}
      <Footer />
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
  {
    id: "guestbook",
    component: <GuestbookSection />,
  },
] as const;
