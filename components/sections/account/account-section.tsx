import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";
import AccountDialog from "./account-dialog";

export default function AccountSection() {
  return (
    <SectionContainer id="account" className="space-y-10 bg-stone-50/80 px-8">
      <SectionTitle korTitle="마음 전하실 곳" engTitle="THANKS" />

      <p className="text-center text-gray-800">
        멀리서도 축하의 마음을 전하고 싶으신 분들을 위해 계좌번호를
        안내드립니다.
        <br /> 소중한 축하를 보내주셔서 감사드리며,
        <br /> 따뜻한 마음에 깊이 감사드립니다.
      </p>

      <div className="flex flex-col gap-4">
        <AccountDialog type="groom" />
        <AccountDialog type="bride" />
      </div>

      <div className="space-y-2 text-center text-sm text-gray-600">
        <p>축하의 마음만으로도 충분합니다</p>
        <p>참석해 주셔서 감사합니다 ♡</p>
      </div>
    </SectionContainer>
  );
}
