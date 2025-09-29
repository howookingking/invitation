export const WEDDING_INFO = {
  groom: "이정우",
  bride: "권유진",
  weddingDate: "2026년 1월 18일",
  weddingTime: "오전 11시 00분",
  venue: "더베르G 웨딩홀",
  venueAddress: "서울시 영등포구 국회대로 612 코레일유통사옥 2층",
  venuePhone: "02. 2088 .5272",
  venueDetail: "2층",
  brideFamily: {
    father: "권순안",
    mother: "홍은수",
    pet: "홍삼",
  },
  groomFamily: {
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
] as const;

export const MAPS = [
  {
    provider: "naver",
    label: "NAVER MAP",
    mainColor: "#04c75c",
    textColor: "#fff",
    url: "https://naver.me/FNIA9oNn",
  },
  {
    provider: "kakao",
    label: "KAKAO MAP",
    mainColor: " #FEE500",
    textColor: "#191919",
    url: "https://kko.kakao.com/jWLKS-zeh5",
  },
  {
    provider: "tmap",
    label: "T MAP",
    mainColor: " #FF0000",
    textColor: "#fff",
    url: "https://tmap.life/03f0cc19",
  },
];

export const GOOGLE_MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.23629152319!2d126.89965277668925!3d37.52592687204912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9ff442b60515%3A0xb3596cd28f58076d!2z642U67Kg66W0RyhUaGUgVmVyZGUgRyk!5e0!3m2!1sko!2skr!4v1759124450328!5m2!1sko!2skr";
