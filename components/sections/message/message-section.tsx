import { WEDDING_INFO } from "@/app/page";
import { HeartIcon } from "lucide-react";
import Image from "next/image";

import InteractivePets from "./interactive-pets";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/common/section-container";

export default function MessageSection() {
  return (
    <SectionContainer id="message" className="gap-10 px-4">
      <h2 className="text-center text-2xl font-light text-gray-800">
        초대합니다
      </h2>

      <Card className="border-rose-100 bg-white shadow-lg">
        <p className="text-center text-sm leading-relaxed">
          평생을 함께할 반려자를 만나
          <br />
          새로운 인생을 시작하려 합니다.
        </p>

        <div className="flex items-center justify-center space-x-2 text-lg">
          <div className="text-center">
            <p className="font-medium">
              {WEDDING_INFO.groomParents.father} ·{" "}
              {WEDDING_INFO.groomParents.mother}
            </p>
            <p className="text-sm text-gray-500">의 아들</p>
            <p className="mt-2 text-xl font-medium text-rose-600">
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
            <p className="mt-2 text-xl font-medium text-rose-600">
              {WEDDING_INFO.bride}
            </p>
            <p className="text-xs text-gray-500">
              {WEDDING_INFO.brideParents.pet}의 언니
            </p>
          </div>
        </div>
      </Card>

      <InteractivePets />
    </SectionContainer>
  );
}
