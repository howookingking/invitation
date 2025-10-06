import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Props = {
  isEasterEggDialogOpen: boolean;
  setIsEasterEggDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function GuestbookEasterEggDialog({
  isEasterEggDialogOpen,
  setIsEasterEggDialogOpen,
}: Props) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("db 통신 로직");
  };

  return (
    <Dialog
      open={isEasterEggDialogOpen}
      onOpenChange={setIsEasterEggDialogOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>축하합니다🎉🥳</DialogTitle>
          <DialogDescription>
            선착순 00명에게 스타벅스 상품권을 드립니다!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <Input id="name" name="name" placeholder="이름" />
            <Input id="phone" name="phone" placeholder="전화번호" />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">닫기</Button>
            </DialogClose>
            <Button type="submit">전송</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
