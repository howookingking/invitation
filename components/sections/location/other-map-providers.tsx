import { Button } from "@/components/ui/button";
import { MAPS } from "@/constants/wedding";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function OtherMapProviders() {
  return (
    <div className="absolute top-4 left-4 z-10 flex gap-3">
      {MAPS.map(({ label, mainColor, provider, url, textColor }) => (
        <Button
          key={provider}
          asChild
          style={{ backgroundColor: mainColor }}
          className={cn(
            "h-12 w-12 rounded-full text-xl font-bold shadow-2xl transition hover:opacity-80",
            provider === "tmap" &&
              "bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-blue-500",
          )}
        >
          <Link
            href={url}
            style={{ color: textColor }}
            target="_blank"
            className=""
          >
            {label}
          </Link>
        </Button>
      ))}
    </div>
  );
}
