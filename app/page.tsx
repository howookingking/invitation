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
      <HeroSection />

      <MessageSection />

      <WeddingInfoSection />

      <LocationSection />

      <GallerySection />

      {/* Location Section */}

      {/* Account Info Section */}
      {/* <section
        id="account"
        className="min-h-screen flex flex-col justify-center px-6 py-16"
      >
        <div className="max-w-md mx-auto space-y-8">
          <h2 className="text-2xl font-light text-center text-gray-800">
            마음 전하실 곳
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800">신랑측</h3>
                <span className="text-sm text-blue-600">
                  {WEDDING_INFO.groom}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">
                  {WEDDING_INFO.accountInfo.groom}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800">신부측</h3>
                <span className="text-sm text-pink-600">
                  {WEDDING_INFO.bride}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">
                  {WEDDING_INFO.accountInfo.bride}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm space-y-2">
            <p>축하의 마음만으로도 충분합니다</p>
            <p>참석해 주셔서 감사합니다 ♡</p>
          </div>
        </div>
      </section> */}
    </>
  );
}
