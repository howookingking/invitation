import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import ponytail from "@/public/ponytail.webp";

type Props = {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LocationEasterEggDialog({
  isDialogOpen,
  setIsDialogOpen,
}: Props) {
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>HINT</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-between gap-4">
          <div className="text-primary text-xl">축하말</div>
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 rounded-full bg-[#bfadde]" />:
            <Image alt="ponytail image" src={ponytail} width={50} unoptimized />
          </div>

          <span>AND</span>

          <div className="flex items-center gap-3">
            <div className="h-16 w-16 rounded-full bg-[#bfadde]" />:
            <div className="text-5xl">👓</div>
          </div>

          <span>AND</span>

          <div className="text-lg">이름 : 벽타는나무늘보</div>

          <Button size="sm" className="cursor-default">
            등록
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
