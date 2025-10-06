import { create } from "zustand";

type EasterEggStore = {
  step: number;
  setStep: (step: number) => void;
};

export const useEasterEggStore = create<EasterEggStore>((set) => ({
  step: 0,
  setStep: (step: number) => set({ step }),
}));
