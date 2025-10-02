"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { miniavs } from "@dicebear/collection";
import { createAvatar, Options } from "@dicebear/core";
import Image from "next/image";
import { useEffect, useState } from "react";

export type DicebearAvatarOptions = Partial<miniavs.Options & Options>;

type Props = {
  avatarOption: DicebearAvatarOptions;
  size?: number;
};

export default function DicebearAvatar({ avatarOption, size = 36 }: Props) {
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  useEffect(() => {
    const uri = createAvatar(miniavs, avatarOption).toDataUri();
    setAvatarUri(uri);
  }, [avatarOption]);

  if (!avatarUri) {
    return (
      <Skeleton
        className="rounded-full"
        style={{
          height: size,
          width: size,
        }}
      />
    );
  }

  return (
    <Image
      unoptimized
      src={avatarUri}
      alt="Avatar"
      className="pointer-events-none rounded-full select-none"
      width={size}
      height={size}
    />
  );
}
