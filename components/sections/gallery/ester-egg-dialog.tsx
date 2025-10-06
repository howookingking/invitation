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

export default function EasterEggDialog({ index }: { index: number }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            index !== 10
              ? "hidden"
              : "absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 hover:bg-transparent hover:text-white",
          )}
          variant="ghost"
        />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>HINT</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-between gap-4 font-bold">
          <div className="text-xl">축하메세지</div>
          <div className="text-5xl">🐴</div>
          <div className="text-5xl">👓</div>
          <div className="text-xl">벽타는나무늘보</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
