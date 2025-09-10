"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Phone,
  Heart,
  Camera,
  MessageSquare,
  Clock,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const WeddingInvitation = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const weddingDate = new Date("2024-04-20T14:00:00");
  const today = new Date();
  const daysLeft = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));

  const sections = [
    { id: "intro", title: "인사말", icon: Heart },
    { id: "info", title: "예식정보", icon: Calendar },
    { id: "couple", title: "신랑신부", icon: Users },
    { id: "gallery", title: "갤러리", icon: Camera },
    { id: "location", title: "오시는 길", icon: MapPin },
    { id: "guestbook", title: "방명록", icon: MessageSquare },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* 네비게이션 */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b z-50 px-4 py-2">
        <div className="flex justify-center">
          <div className="flex space-x-1 bg-gray-100 rounded-full p-1">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    currentSection === index
                      ? "bg-pink-500 text-white shadow-lg"
                      : "text-gray-500 hover:bg-white hover:text-pink-500"
                  }`}
                >
                  <Icon size={16} />
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 인트로 섹션 */}
      <section
        id="intro"
        className="min-h-screen flex flex-col justify-center items-center px-6 pt-20"
      >
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* 메인 이미지 플레이스홀더 */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center shadow-xl">
            <div className="text-6xl">💒</div>
          </div>

          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              {daysLeft > 0 ? `D-${daysLeft}` : "결혼했어요! 💕"}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              김민수 & 이지은
            </h1>
            <p className="text-gray-600">함께하는 새로운 시작</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-sm mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="text-pink-500 mr-2" size={20} />
              <span className="font-semibold">2024년 4월 20일 토요일</span>
            </div>
            <div className="flex items-center justify-center mb-4">
              <Clock className="text-pink-500 mr-2" size={20} />
              <span>오후 2시</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="text-pink-500 mr-2" size={20} />
              <span>더 컨벤션 웨딩홀</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-8 leading-relaxed">
            저희 두 사람이 사랑으로 하나가 되는
            <br />
            소중한 순간에 함께해 주세요
          </p>
        </div>
      </section>

      {/* 예식 정보 */}
      <section id="info" className="py-20 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            예식 안내
          </h2>

          <Card className="mb-6 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Calendar className="text-pink-500 mr-3" size={24} />
                <div>
                  <h3 className="font-semibold">날짜</h3>
                  <p className="text-gray-600">2024년 4월 20일 토요일</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <Clock className="text-pink-500 mr-3" size={24} />
                <div>
                  <h3 className="font-semibold">시간</h3>
                  <p className="text-gray-600">오후 2시 (1시 30분 입장)</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-pink-500 mr-3" size={24} />
                <div>
                  <h3 className="font-semibold">장소</h3>
                  <p className="text-gray-600">
                    더 컨벤션 웨딩홀 3층 그랜드볼룸
                  </p>
                  <p className="text-sm text-gray-500">
                    서울시 강남구 테헤란로 123
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8">
              <Calendar className="mr-2" size={16} />
              캘린더에 추가
            </Button>
          </div>
        </div>
      </section>

      {/* 신랑신부 소개 */}
      <section id="couple" className="py-20 px-6 bg-white/50">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            신랑 & 신부
          </h2>

          <div className="space-y-6">
            {/* 신랑 */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-2xl">🤵</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      김민수
                    </h3>
                    <p className="text-gray-600">김철수 · 박영희의 장남</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Phone className="mr-2" size={16} />
                  연락하기
                </Button>
              </CardContent>
            </Card>

            {/* 하트 아이콘 */}
            <div className="text-center">
              <Heart
                className="text-pink-500 mx-auto"
                size={32}
                fill="currentColor"
              />
            </div>

            {/* 신부 */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                    <span className="text-2xl">👰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      이지은
                    </h3>
                    <p className="text-gray-600">이상호 · 김미영의 장녀</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Phone className="mr-2" size={16} />
                  연락하기
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* 양가 부모님 연락처 */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">
                  신랑측 혼주
                </h4>
                <p className="text-sm text-gray-600 mb-2">아버지 김철수</p>
                <p className="text-sm text-gray-600 mb-2">어머니 박영희</p>
                <Button variant="ghost" size="sm">
                  <Phone size={14} />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">
                  신부측 혼주
                </h4>
                <p className="text-sm text-gray-600 mb-2">아버지 이상호</p>
                <p className="text-sm text-gray-600 mb-2">어머니 김미영</p>
                <Button variant="ghost" size="sm">
                  <Phone size={14} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 갤러리 */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            갤러리
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center shadow-lg"
              >
                <Camera className="text-pink-400" size={32} />
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button variant="outline" className="rounded-full">
              더 많은 사진 보기
            </Button>
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section id="location" className="py-20 px-6 bg-white/50">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            오시는 길
          </h2>

          {/* 지도 플레이스홀더 */}
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-2 text-pink-500" size={48} />
              <p className="text-gray-600">지도가 표시됩니다</p>
            </div>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">더 컨벤션 웨딩홀</h3>
              <p className="text-gray-600 mb-4">서울시 강남구 테헤란로 123</p>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">지하철</span>
                  <span>강남역 2번 출구 도보 5분</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">버스</span>
                  <span>강남역 정류장 하차</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">주차</span>
                  <span>지하 1-3층 (3시간 무료)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="rounded-full">
              길찾기
            </Button>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
              전화걸기
            </Button>
          </div>
        </div>
      </section>

      {/* 방명록 */}
      <section id="guestbook" className="py-20 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            방명록
          </h2>

          <Card className="mb-6">
            <CardContent className="p-6">
              <p className="text-center text-gray-600 mb-4">
                축하 메시지를 남겨주세요 💝
              </p>
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-full">
                <MessageSquare className="mr-2" size={16} />
                축하 메시지 남기기
              </Button>
            </CardContent>
          </Card>

          {/* 방명록 목록 플레이스홀더 */}
          <div className="space-y-4">
            {Array.from({ length: 3 }, (_, i) => (
              <Card key={i} className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                      <span className="text-sm">👤</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-sm">
                          방문자 {i + 1}
                        </span>
                        <span className="text-xs text-gray-500">
                          2024.03.15
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">
                        축하합니다! 행복하세요~ 🎉
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button variant="outline" className="rounded-full">
              더 보기
            </Button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-50 py-12 px-6 text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <Heart
              className="text-pink-500 mx-auto mb-2"
              size={32}
              fill="currentColor"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              감사합니다
            </h3>
            <p className="text-gray-600 text-sm">
              소중한 분들과 함께하는
              <br />
              저희의 특별한 날이 되길 바랍니다
            </p>
          </div>

          <div className="text-2xl mb-4">김민수 💕 이지은</div>

          <p className="text-xs text-gray-500">© 2024 Our Wedding Invitation</p>
        </div>
      </footer>
    </div>
  );
};

export default WeddingInvitation;
