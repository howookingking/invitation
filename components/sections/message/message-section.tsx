import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";
import { WEDDING_INFO } from "@/constants/wedding";
import { HeartIcon } from "lucide-react";
import ContactDialog from "./contact-dialog";
import InteractivePets from "./interactive-pets";

export default function MessageSection() {
  return (
    <SectionContainer
      id="message"
      className="gap-10 overflow-hidden bg-stone-50/80 px-8 pb-10"
    >
      <SectionTitle korTitle="초대합니다" engTitle="INVITATION" />

      <div className="flex justify-center">
        <p className="text leading-relaxed break-keep text-gray-600">
          <span className="mr-0.5 font-bold text-black">이</span>
          제 우리의 이야기가 시작됩니다
          <br />
          <span className="mr-0.5 font-bold text-black">정</span>
          성을 담아 초대하오니
          <br />
          <span className="mr-0.5 font-bold text-black">우</span>
          리를 축복해 주세요
          <br />
          <br />
          <span className="mr-0.5 font-bold text-black">권</span>
          하고 싶은 기쁨을 나누며
          <br />
          <span className="mr-0.5 font-bold text-black">유</span>
          쾌한 웃음이 가득할 자리에
          <br />
          <span className="mr-0.5 font-bold text-black">진</span>
          심으로 함께해 주세요
        </p>
      </div>

      <div className="flex items-center justify-center space-x-2 text-lg">
        <div className="text-center">
          <p className="font-medium text-gray-800">
            {WEDDING_INFO.groomFamily.father} ·{" "}
            {WEDDING_INFO.groomFamily.mother}
          </p>
          <p className="text-sm text-gray-600">의 아들</p>
          <p className="text-primary mt-2 text-xl font-medium">
            {WEDDING_INFO.groom.slice(1)}
          </p>
          <p className="mt-1 text-xs text-gray-600">
            {WEDDING_INFO.groomFamily.pet}의 오빠
          </p>
        </div>

        <HeartIcon className="text-primary" size={20} fill="currentColor" />

        <div className="text-center">
          <p className="font-medium text-gray-800">
            {WEDDING_INFO.brideFamily.father} ·{" "}
            {WEDDING_INFO.brideFamily.mother}
          </p>
          <p className="text-sm text-gray-600">의 딸</p>
          <p className="text-primary mt-2 text-xl font-medium">
            {WEDDING_INFO.bride.slice(1)}
          </p>
          <p className="mt-1 text-xs text-gray-600">
            {WEDDING_INFO.brideFamily.pet + ", 채현"}의 언니
          </p>
        </div>
      </div>

      <InteractivePets />

      <div className="flex flex-col gap-4">
        <ContactDialog type="groom" />
        <ContactDialog type="bride" />
      </div>
    </SectionContainer>
  );
}
