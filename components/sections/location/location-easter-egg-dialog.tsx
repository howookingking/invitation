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
          <div className="text-xl font-bold">축하말</div>
          <Image alt="ponytail image" src={ponytail} width={50} unoptimized />
          <div className="text-5xl">👓</div>
          <div className="text-xl font-bold">이름 : 벽타는나무늘보</div>
          <Button size="sm">등록</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
