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
import { useEasterEggStore } from "@/store/use-easter-egg-store";

export default function GalleryEasterEggDialog({ index }: { index: number }) {
  const { setStep, step } = useEasterEggStore();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={() => setStep(2)}
          className={cn(
            index !== 12 || step < 1
              ? "hidden"
              : "absolute top-1/2 left-1/2 h-20 w-20 -translate-x-[70%] -translate-y-[35%] hover:bg-transparent hover:text-white",
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
          <div className="text-primary text-xl">오시는길</div>
          <div className="text-lg">영등포</div>
          <div className="text-5xl">⏰</div>
          <div className="text-5xl">⬜️</div>
          <div className="text-lg">우리가 처음 만난 장소</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
