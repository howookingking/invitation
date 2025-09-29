import { Button } from "@/components/ui/button";
import { MAPS } from "@/constants/wedding";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function OtherMapProviders() {
  return (
    <div className="flex">
      {MAPS.map(({ label, mainColor, provider, url, textColor }) => (
        <Button
          key={provider}
          asChild
          style={{ backgroundColor: mainColor }}
          className={cn(
            "w-1/3 rounded-none font-extrabold transition hover:opacity-80",
            provider === "tmap" &&
              "bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-blue-500",
          )}
          //   className="rounded-lg px-6 py-3 text-white"
        >
          <Link
            href={url}
            style={{ color: textColor }}
            target="_blank"
            className="font-bold"
          >
            {label}
          </Link>
        </Button>
      ))}
    </div>
  );
}
