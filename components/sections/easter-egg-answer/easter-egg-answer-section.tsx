"use client";

import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";
import { useState } from "react";

const STEPS = [
  {
    step: 1,
    title: "반려동물 클릭 순서",
    hint: "숨어있는 고양이의 힌트: 호올홍홍올호",
    answer: "호우 → 올리 → 홍삼 → 홍삼 → 올리 → 호우 순서로 클릭!",
    detail:
      '각 반려동물이 다음 단계의 힌트를 알려줘요.\n올리: 갤러리 | 호우: "13" | 홍삼: "💐"',
  },
  {
    step: 2,
    title: "갤러리",
    hint: "호우가 알려준 숫자 13, 홍삼이가 알려준 💐",
    answer: "갤러리의 13번째 사진에 꽃을 클릭!",
    detail: '오시는 길 👉 "영등포" + "타임" + "스퀘어"',
  },
  {
    step: 3,
    title: "오시는 길",
    hint: "영등포에서 처음 만난 장소",
    answer: "지도에 새로 나타난 영등포 타임 스퀘어 마커를 클릭!",
    detail:
      "마커를 클릭하면 마지막 힌트가 등장해요.\n축하말에서 ⼥(여자 머리) + 👓(안경) 아바타 + 이름: 벽타는나무늘보",
  },
  {
    step: 4,
    title: "축하말",
    hint: "아바타와 이름 조합",
    answer:
      '아바타를 여자 머리 + 안경으로 설정하고,\n이름을 "벽타는나무늘보"로 입력 후 등록!',
    detail: "🎉 축하합니다! 스타벅스 기프티콘 추첨에 응모 완료!",
  },
];

export default function EasterEggAnswerSection() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  return (
    <SectionContainer id="easter-egg-answer" className="gap-6 px-6 pb-10">
      <SectionTitle korTitle="퀴즈 정답" engTitle="QUIZ ANSWER" />

      <div className="flex flex-col gap-3">
        {STEPS.map(({ step, title, hint, answer, detail }) => {
          const isOpen = openStep === step;

          return (
            <div
              key={step}
              onClick={() => setOpenStep(isOpen ? null : step)}
              className="cursor-pointer overflow-hidden rounded-md border border-rose-100 bg-white shadow-sm transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="bg-primary/10 text-primary flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
                    {step}
                  </span>
                  <span className="text-sm font-medium text-gray-800">
                    {title}
                  </span>
                </div>
                <span
                  className={`text-primary text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </div>

              {/* Body */}
              <div
                className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-3 px-4 pb-4">
                    <div className="rounded-sm bg-rose-50/60 p-3">
                      <p className="text-xs text-gray-500">💡 힌트</p>
                      <p className="mt-1 text-sm text-gray-700">{hint}</p>
                    </div>

                    <div className="rounded-sm bg-green-50/60 p-3">
                      <p className="text-xs text-gray-500">✅ 정답</p>
                      <p className="mt-1 text-sm font-medium whitespace-pre-line text-gray-800">
                        {answer}
                      </p>
                    </div>

                    <div className="rounded-sm bg-blue-50/60 p-3">
                      <p className="text-xs text-gray-500">📝 설명</p>
                      <p className="mt-1 text-sm whitespace-pre-line text-gray-600">
                        {detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
