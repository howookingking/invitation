import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function generateUUID() {
  if (typeof self !== "undefined" && self.crypto?.randomUUID) {
    return self.crypto.randomUUID();
  }
  // Fallback UUID v4 generation
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function getOrCreateVisitorId() {
  const key = "visitor_id";

  let id = localStorage.getItem(key);
  if (!id) {
    id = generateUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInYears,
  isToday,
  parseISO,
} from "date-fns";

export function getRelativeTimeKorean(dateString: string) {
  try {
    const targetDate = parseISO(dateString);
    const now = new Date();

    // 분, 시간 차이 계산
    const minutesDiff = differenceInMinutes(now, targetDate);
    const hoursDiff = differenceInHours(now, targetDate);

    // 1분 이내인 경우
    if (minutesDiff >= 0 && minutesDiff < 1) {
      return "방금 전";
    }

    // 1시간 이내인 경우
    if (minutesDiff >= 1 && minutesDiff < 60) {
      return `${minutesDiff}분 전`;
    }

    // 24시간 이내인 경우
    if (hoursDiff >= 1 && hoursDiff < 24) {
      return `${hoursDiff}시간 전`;
    }

    // 오늘인 경우 (24시간 이내지만 같은 날인 경우)
    if (isToday(targetDate)) {
      return "오늘";
    }

    // 일, 월, 년 차이 계산
    const daysDiff = differenceInDays(now, targetDate);
    const monthsDiff = differenceInMonths(now, targetDate);
    const yearsDiff = differenceInYears(now, targetDate);

    // 1년 이상 차이나는 경우
    if (yearsDiff >= 1) {
      return `${yearsDiff}년 전`;
    }

    // 12개월 차이나는 경우 1년 전으로 표시
    if (monthsDiff >= 12) {
      return "1년 전";
    }

    // 1개월 이상 차이나는 경우
    if (monthsDiff >= 1) {
      return `${monthsDiff}개월 전`;
    }

    // 1일 이상 차이나는 경우
    if (daysDiff >= 1) {
      return `${daysDiff}일 전`;
    }

    // 위 모든 조건에 해당하지 않는 경우 (기본값)
    return "방금 전";
  } catch (error) {
    console.error("날짜 파싱 오류:", error);
    return "날짜 오류";
  }
}
