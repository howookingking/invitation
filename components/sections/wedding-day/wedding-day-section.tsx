"use client";

import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";
import { WEDDING_INFO } from "@/constants/wedding";
import { HeartIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function WeddingDaySection() {
  // 상수 설정 (ISO 형식으로 변경)
  const WEDDING_DATE = "2026-01-18"; // YYYY-MM-DD
  const WEDDING_TIME = "11:00"; // 24시간 형식

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 날짜 파싱 함수
  const parseWeddingDateTime = () => {
    const [year, month, day] = WEDDING_DATE.split("-").map(Number);
    const [hours, minutes] = WEDDING_TIME.split(":").map(Number);
    return new Date(year, month - 1, day, hours, minutes, 0);
  };

  // 날짜 포맷팅 함수 (한국어)
  const formatDateKorean = () => {
    const [year, month, day] = WEDDING_DATE.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = dayNames[date.getDay()];
    return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일 ${dayOfWeek}요일`;
  };

  // 시간 포맷팅 함수 (한국어)
  const formatTimeKorean = () => {
    const [hours, minutes] = WEDDING_TIME.split(":").map(Number);
    const period = hours < 12 ? "오전" : "오후";
    const displayHours = hours <= 12 ? hours : hours - 12;
    return `${period} ${displayHours}시`;
  };

  // 날짜 포맷팅 함수 (영어)
  const formatDateEnglish = () => {
    const [year, month, day] = WEDDING_DATE.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return `${dayNames[date.getDay()]}, ${monthNames[date.getMonth()]} ${parseInt(day)}, ${year}`;
  };

  // 시간 포맷팅 함수 (영어)
  const formatTimeEnglish = () => {
    const [hours, minutes] = WEDDING_TIME.split(":").map(Number);
    const period = hours < 12 ? "AM" : "PM";
    const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
    return `${period} ${displayHours}:${minutes.toString().padStart(2, "0")}`;
  };

  // 카운트다운 계산
  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDateTime = parseWeddingDateTime();
      const now = new Date();
      const difference = weddingDateTime.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const generateCalendar = () => {
    const year = 2026;
    const month = 1;
    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();

    const calendar = [];
    let week = new Array(7).fill(null);

    for (let day = 1; day <= daysInMonth; day++) {
      const dayOfWeek = (firstDay + day - 1) % 7;
      week[dayOfWeek] = day;

      if (dayOfWeek === 6 || day === daysInMonth) {
        calendar.push([...week]);
        week = new Array(7).fill(null);
      }
    }

    return calendar;
  };

  const weddingDateTime = parseWeddingDateTime();
  const today = new Date();

  // 결혼식 날짜와 오늘의 차이 (일 단위, 음수면 이미 지난 것)
  const daysDiff = Math.floor(
    (today.setHours(0, 0, 0, 0) - weddingDateTime.setHours(0, 0, 0, 0)) /
      (1000 * 60 * 60 * 24),
  );

  const calendar = generateCalendar();
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <SectionContainer id="wedding-day" className="px-8 pb-10">
      {/* 헤더 */}
      <div className="space-y-10 text-center">
        <SectionTitle engTitle="WEDDING DAY" korTitle="결혼식 날짜" />

        <div className="space-y-2">
          <p className="text-lg text-gray-800">
            {formatDateKorean()} | {formatTimeKorean()}
          </p>

          <p className="text-base font-light text-gray-400">
            {formatDateEnglish()} | {formatTimeEnglish()}
          </p>
        </div>
      </div>

      {/* 달력 */}
      <div className="my-4 mb-12 border-y pt-4 pb-2">
        <div className="mb-4 grid grid-cols-7 gap-2">
          {dayNames.map((day, idx) => (
            <div
              key={idx}
              className={`text-center text-sm font-light ${
                idx === 0
                  ? "text-rose-300"
                  : idx === 6
                    ? "text-gray-400"
                    : "text-gray-600"
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {calendar.map((week, weekIdx) => (
            <div key={weekIdx} className="grid grid-cols-7 gap-2">
              {week.map((day, dayIdx) => (
                <div
                  key={dayIdx}
                  className={`flex aspect-square items-center justify-center text-base ${
                    !day
                      ? ""
                      : day === 18
                        ? "rounded-full bg-rose-400 font-medium text-white"
                        : dayIdx === 0
                          ? "font-light text-rose-300"
                          : dayIdx === 6
                            ? "font-light text-gray-400"
                            : "font-light text-gray-800"
                  } `}
                >
                  {day || ""}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 카운트다운 */}
      <div className="mb-12 grid grid-cols-4 gap-4">
        <div className="text-center">
          <div className="mb-2 text-4xl font-light text-gray-800">
            {timeLeft.days}
          </div>
          <div className="text-sm tracking-wider text-gray-400">DAYS</div>
        </div>
        <div className="text-center">
          <div className="mb-2 text-4xl font-light text-gray-800">
            {timeLeft.hours}
          </div>
          <div className="text-sm tracking-wider text-gray-400">HOURS</div>
        </div>
        <div className="text-center">
          <div className="mb-2 text-4xl font-light text-gray-800">
            {timeLeft.minutes}
          </div>
          <div className="text-sm tracking-wider text-gray-400">MINUTES</div>
        </div>
        <div className="text-center">
          <div className="mb-2 text-4xl font-light text-gray-800">
            {timeLeft.seconds}
          </div>
          <div className="text-sm tracking-wider text-gray-400">SECONDS</div>
        </div>
      </div>

      {/* 하단 메시지 */}
      <div className="flex justify-center text-center">
        {daysDiff === 0 ? (
          <p className="text-base text-gray-600">
            오늘은
            <span className="font-medium text-[#b89b8a]"> 결혼식 </span>
            입니다. 💐
          </p>
        ) : daysDiff < 0 ? (
          <p className="text-gray-600">
            {WEDDING_INFO.groom.slice(1)}{" "}
            <HeartIcon
              size={14}
              className="inline-block fill-rose-400 pb-1 text-rose-400"
            />{" "}
            {WEDDING_INFO.bride.slice(1)} 결혼식이{" "}
            <span className="text-primary mr-0.5 text-lg font-semibold">
              {Math.abs(daysDiff)}
            </span>
            일 남았습니다.
          </p>
        ) : (
          <p className="space-x-2 text-base text-gray-600">
            {WEDDING_INFO.groom.slice(1)}
            <span className="text-rose-400">♥</span>
            {WEDDING_INFO.bride.slice(1)} 결혼식이
            <span className="mx-1 font-medium text-[#b89b8a]">{daysDiff}</span>
            일 지났습니다.
          </p>
        )}
      </div>
    </SectionContainer>
  );
}
