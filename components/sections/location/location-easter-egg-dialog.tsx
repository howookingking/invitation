import SectionTitle from "@/components/common/section-title";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
          <span className="text-primary">축하말</span>
          <div className="flex items-center gap-3">
            <div className="relative h-16 w-16 rounded-full bg-[#bfadde]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
                ⼥
              </div>
            </div>
          </div>

          <span>AND</span>

          <div className="flex items-center gap-3">
            <div className="relative h-16 w-16 rounded-full bg-[#bfadde]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[42px] font-bold">
                👓
              </div>
            </div>
          </div>

          <span>AND</span>

          <div className="text-lg">이름 : 벽타는나무늘보</div>

          <span>THEN</span>

          <Button size="sm" className="cursor-default">
            등록
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
