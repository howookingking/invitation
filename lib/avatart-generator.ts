import type { DicebearAvatarOptions } from "@/components/sections/guestbook/comment/dicebear-avatar";

const SEEDS = [
  "Mackenzie",
  "Kimberly",
  "Jameson",
  "Maria",
  "Jude",
  "Alexander",
  "Mason",
  "Andrea",
];
const SKIN_COLORS = ["f5d0c5", "ffcb7e"];
const HAIRS = [
  "balndess",
  "classic01",
  "classic02",
  "curly",
  "elvis",
  "long",
  "ponyTail",
  "slaughter",
  "stylish",
];

export function generateAvatar(): DicebearAvatarOptions {
  const avatarOption: DicebearAvatarOptions = {
    size: 64,
    radius: 50,
    backgroundColor: ["c0aede"],
    hair: [HAIRS[Math.floor(Math.random() * HAIRS.length)] as any],
    seed: SEEDS[Math.floor(Math.random() * SEEDS.length)],
    skinColor: [SKIN_COLORS[Math.floor(Math.random() * SKIN_COLORS.length)]],
  };

  return avatarOption;
}
