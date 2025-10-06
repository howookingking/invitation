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

        <div className="trackin flex flex-col items-center justify-between gap-4">
          <div className="text-xl font-bold">축하말</div>
          <div className="text-xl font-bold">PONY</div>
          <div className="text-5xl">👓</div>
          <div className="text-xl font-bold">이름 : 벽타는나무늘보</div>
          <Button size="sm">등록</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
