import { WEDDING_INFO } from "@/app/page";
import { HeartIcon } from "lucide-react";
import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";
import { Card } from "@/components/ui/card";
import InteractivePets from "./interactive-pets";

export default function MessageSection() {
  return (
    <SectionContainer id="message" className="gap-10 px-4">
      <SectionTitle korTitle="초대합니다" engTitle="INVITATION" />

      <Card className="border-rose-100 bg-white shadow-lg">
        <p className="text-center text-sm leading-relaxed">
          평생을 함께할 반려자를 만나
          <br />
          새로운 인생을 시작하려 합니다.
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
              {WEDDING_INFO.brideFamily.pet}의 언니
            </p>
          </div>
        </div>
      </Card>

      <InteractivePets />
    </SectionContainer>
  );
}
