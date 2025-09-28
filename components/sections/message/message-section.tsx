import { WEDDING_INFO } from "@/app/page";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import olly from "@/public/photos/olly.png";
import howoo from "@/public/photos/howoo.png";
import hongsam from "@/public/photos/hongsam.png";
import InteractivePets from "./interactive-pets";

export default function MessageSection() {
  return (
    <section
      id="message"
      className="relative min-h-screen flex flex-col justify-center px-6"
    >
      <div className="max-w-md mx-auto text-center space-y-8">
        <h2 className="text-2xl font-light text-gray-800">초대합니다</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-rose-100">
            <div className="space-y-6 text-gray-700">
              <p className="text-sm leading-relaxed">
                평생을 함께할 반려자를 만나
                <br />
                새로운 인생을 시작하려 합니다.
              </p>

              <div className="flex justify-center items-center space-x-4 text-lg">
                <div className="text-center">
                  <p className="font-medium">
                    {WEDDING_INFO.groomParents.father} ·{" "}
                    {WEDDING_INFO.groomParents.mother}
                  </p>
                  <p className="text-sm text-gray-500">의 아들</p>
                  <p className="text-rose-600 font-medium text-xl mt-2">
                    {WEDDING_INFO.groom}
                  </p>
                  <p className="text-xs text-gray-500">
                    {WEDDING_INFO.groomParents.pet}의 오빠
                  </p>
                </div>

                <HeartIcon className="text-rose-500" size={20} />

                <div className="text-center">
                  <p className="font-medium">
                    {WEDDING_INFO.brideParents.father} ·{" "}
                    {WEDDING_INFO.brideParents.mother}
                  </p>
                  <p className="text-sm text-gray-500">의 딸</p>
                  <p className="text-rose-600 font-medium text-xl mt-2">
                    {WEDDING_INFO.bride}
                  </p>
                  <p className="text-xs text-gray-500">
                    {WEDDING_INFO.brideParents.pet}의 언니
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center ">
          <Image
            alt="olly"
            src={olly}
            className="w-1/3 hover:scale-200 transition shrin"
          />

          <Image
            alt="howoo"
            src={howoo}
            className="w-1/3 hover:scale-200 transition scale-120"
          />
          <Image
            alt="hongsam"
            src={hongsam}
            className="w-1/3 hover:scale-200 transition"
          />
        </div>
      </div>
      {/* <InteractivePets /> */}

      {/* <div className="w-full h-40 bg-rose-300 absolute bottom-0 left-0 bg-[url('/photos/hero-crop.jpg')] bg-fixed bg-center bg-cover opacity-50" /> */}
    </section>
  );
}
