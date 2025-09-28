"use client";

import GallerySection from "@/components/sections/gallery/gallery-section";
import HeroSection from "@/components/sections/hero/hero-section";
import MessageSection from "@/components/sections/message/message-section";
import WeddingInfoSection from "@/components/sections/wedding-info/wedding-info-section";
import { useEffect, useState } from "react";

export const WEDDING_INFO = {
  bride: "권유진",
  groom: "이정우",
  weddingDate: "2026년 1월 18일",
  weddingTime: "오전 11시 00분",
  venue: " The Verde G",
  venueAddress: "서울시 영등포구 국회대로 612",
  venueDetail: "2층",
  brideParents: {
    father: "권순안",
    mother: "홍은수",
    pet: "홍삼",
  },
  groomParents: {
    father: "이윤재",
    mother: "이은영",
    pet: "올리, 호우",
  },
  contact: {
    groom: "010-5651-4187",
    bride: "010-9755-2517",
  },
  accountInfo: {
    bride: "신한은행 110-123-456789",
    groom: "국민은행 987-654-321012",
  },
} as const;

export const SECTIONS = [
  "hero",
  "message",
  "info",
  "location",
  "gallery",
  "account",
];

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

      {/* <div className="w-full h-40 bg-rose-300 absolute bottom-0 left-0 bg-[url('/photos/hero-crop.jpg')] bg-fixed bg-center bg-cover opacity-50" /> */}

      {/* <WeddingInfoSection /> */}
      {/* Wedding Info Section */}

      {/* Location Section */}
      {/* <section
        id="location"
        className="min-h-screen flex flex-col justify-center px-6 py-16"
      >
        <div className="max-w-md mx-auto space-y-8">
          <h2 className="text-2xl font-light text-center text-gray-800">
            오시는 길
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100">
              <h3 className="font-medium text-gray-800 mb-4">
                {WEDDING_INFO.venue}
              </h3>
              <p className="text-gray-600 mb-2">{WEDDING_INFO.venueAddress}</p>
              <p className="text-sm text-gray-500 mb-4">
                {WEDDING_INFO.venueDetail}
              </p>

              <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center mb-4">
                <p className="text-gray-500">지도가 여기에 표시됩니다</p>
              </div>

              <button className="w-full bg-rose-500 text-white py-3 rounded-xl hover:bg-rose-600 transition-colors">
                길찾기
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100">
              <h4 className="font-medium text-gray-800 mb-3">교통안내</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-medium">지하철:</span> 2호선
                  을지로입구역 7번 출구
                </p>
                <p>
                  <span className="font-medium">버스:</span> 151, 162, 262, 463
                </p>
                <p>
                  <span className="font-medium">주차:</span> 호텔 내 주차장
                  이용가능
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      {/* <GallerySection /> */}

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
