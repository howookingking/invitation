import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";
import { WEDDING_INFO } from "@/constants/wedding";
import { HeartIcon } from "lucide-react";
import ContactDialog from "./contact-dialog";
import InteractivePets from "./interactive-pets";

export default function MessageSection() {
  return (
    <SectionContainer id="message" className="gap-10 px-8">
      <SectionTitle korTitle="초대합니다" engTitle="INVITATION" />

      <p className="text-center leading-relaxed">
        나를 더 좋은 사람이 되고 싶게
        <br />
        만드는 한 사람을 만났습니다.
        <br />
        함께 한다는 것만으로도
        <br />
        미소 짓게 해주는 이 사람과
        <br />
        평생을 함께 하고 싶습니다.
        <br />그 시작의 자리에 함께 하시길 소망합니다.
      </p>

      <div className="flex items-center justify-center space-x-2 text-lg">
        <div className="text-center">
          <p className="font-medium">
            {WEDDING_INFO.groomFamily.father} ·{" "}
            {WEDDING_INFO.groomFamily.mother}
          </p>
          <p className="text-sm text-gray-500">의 아들</p>
          <p className="mt-2 text-xl font-medium text-rose-600">
            {WEDDING_INFO.groom}
          </p>
          <p className="text-xs text-gray-500">
            {WEDDING_INFO.groomFamily.pet}의 오빠
          </p>
        </div>

        <HeartIcon className="text-rose-500" size={20} />

        <div className="text-center">
          <p className="font-medium">
            {WEDDING_INFO.brideFamily.father} ·{" "}
            {WEDDING_INFO.brideFamily.mother}
          </p>
          <p className="text-sm text-gray-500">의 딸</p>
          <p className="mt-2 text-xl font-medium text-rose-600">
            {WEDDING_INFO.bride}
          </p>
          <p className="text-xs text-gray-500">
            {WEDDING_INFO.brideFamily.pet + ", 채현"}의 언니
          </p>
        </div>
      </div>

      <InteractivePets />

      <ContactDialog />
    </SectionContainer>
  );
}
