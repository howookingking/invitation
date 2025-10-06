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
const SKIN_COLORS = ["e6b899", "f5d0c5", "ffcb7e", "d29c7c"];
const HAIRS = ["balndess", "classic01", "curly", "elvis", "long", "ponyTail"];
const HAIR_COLORS = [
  "000000", // Black
  "1b0b47", // Dark Purple
  "47280b", // Dark Brown
  "ad3a20", // Auburn Brown
  "7a4a1c", // Chestnut Brown
];

export function generateAvatar(): DicebearAvatarOptions {
  const avatarOption: DicebearAvatarOptions = {
    size: 64,
    radius: 50,
    glassesProbability: 50,
    backgroundColor: ["c0aede"],
    hair: [HAIRS[Math.floor(Math.random() * HAIRS.length)] as any],
    hairColor: [HAIR_COLORS[Math.floor(Math.random() * HAIR_COLORS.length)]],
    seed: SEEDS[Math.floor(Math.random() * SEEDS.length)],
    skinColor: [SKIN_COLORS[Math.floor(Math.random() * SKIN_COLORS.length)]],
  };

  return avatarOption;
}
