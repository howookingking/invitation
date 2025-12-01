import DotLottie from "@/components/common/dot-lottie";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 px-8 py-8 text-xs">
      <div className="space-y-3 text-center">
        <p className="leading-5 break-keep text-gray-600">
          이 청첩장은 소중한 분들을 초대하기 위해
          <br /> 신랑•신부가 직접 제작하였습니다.
        </p>

        <p className="leading-5 break-keep text-gray-600">
          청첩장 안에 작은 퍼즐을 준비했습니다.
          <br />
          퍼즐을 푸신 분들께는 감사의 마음을 담아
          <br />
          추첨을 통해 소정의 선물을 드립니다.
          <br />
          <div className="-gap-0 -mt-10 flex items-end justify-center">
            HINT :<span className="-mr-3 ml-2 font-bold">검은 고양이</span>
            <DotLottie
              fileName="cat-hiding"
              style={{
                width: 64,
                height: 64,
                display: "inline-block",
                marginBottom: 4,
              }}
            />
            <span className="-ml-3 font-bold">가 친구들을 불러</span>
          </div>
        </p>
        <div className="mt-4 border-t pt-3">
          <p className="font-medium text-gray-600">Created by Jungwoo</p>
          <p className="mt-1 text-gray-400">© 2025. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
