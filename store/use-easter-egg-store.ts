import { create } from "zustand";

// step1 : 올리, 호우, 홍삼
// step2 : 갤러리
// step3 : 오시는 길
// step4 : 축하말

type EasterEggStore = {
  step: number;
  setStep: (step: number) => void;
};

export const useEasterEggStore = create<EasterEggStore>((set) => ({
  step: 0,
  setStep: (step: number) => set({ step }),
}));
