import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import hintImage from "@/public/hint.png";
import { useEasterEggStore } from "@/store/use-easter-egg-store";
import Image from "next/image";

export default function GalleryEasterEggDialog({ index }: { index: number }) {
  const { setStep, step } = useEasterEggStore();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={() => setStep(2)}
          className={cn(
            index !== 10 || step < 1
              ? "hidden"
              : "absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 hover:bg-transparent hover:text-white",
          )}
          variant="ghost"
        />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>HINT</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-between gap-4">
          <div className="text-xl font-bold">오시는길</div>
          <Image
            alt="hint"
            src={hintImage}
            width={200}
            height={395}
            placeholder="blur"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
