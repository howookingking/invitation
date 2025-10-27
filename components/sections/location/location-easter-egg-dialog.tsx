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
          <SectionTitle engTitle="GUESTBOOK" korTitle="축하말" />
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#bfadde]">
              <div className="pb-1 text-4xl font-bold">⼥</div>
            </div>
          </div>

          <span>AND</span>

          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#bfadde]">
              <div className="pb-1 text-5xl leading-none">🤓</div>
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
