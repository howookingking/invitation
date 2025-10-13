import { Alert, AlertTitle } from "@/components/ui/alert";
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
import useVisitorId from "@/hooks/use-visitor-id";
import { createEasterEggContact } from "@/lib/supabase/services/easter-egg";
import { InfoIcon, LoaderCircleIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

type Props = {
  isEasterEggDialogOpen: boolean;
  setIsEasterEggDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function GuestbookEasterEggDialog({
  isEasterEggDialogOpen,
  setIsEasterEggDialogOpen,
}: Props) {
  const visitorId = useVisitorId();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const [contactCount, setContactCount] = useState(0);

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (nameInput.trim().length === 0) {
      nameInputRef.current?.focus();
      toast.warning("이름을 입력해주세요.");
      return;
    }

    if (phoneInput.length === 0) {
      phoneInputRef.current?.focus();
      toast.warning("전화번호를 입력해주세요.");
      return;
    }

    setIsSubmitting(true);

    const result = await createEasterEggContact(
      nameInput,
      phoneInput,
      visitorId!,
    );

    if (result) {
      toast.error(result);
      setIsSubmitting(false);
      setIsEasterEggDialogOpen(false);
      return;
    }

    setIsSubmitting(false);

    toast.success("추첨을 통해 스타벅스 기프티콘을 발송합니다!!");

    setIsEasterEggDialogOpen(false);

    setNameInput("");
    setPhoneInput("");
  };

  useEffect(() => {
    if (isEasterEggDialogOpen) {
      setNameInput("");
      setPhoneInput("");
    }
  }, [isEasterEggDialogOpen]);

  return (
    <Dialog
      open={isEasterEggDialogOpen}
      onOpenChange={setIsEasterEggDialogOpen}
    >
      <DialogContent className="translate-y-[-90%]">
        <DialogHeader>
          <DialogTitle>축하합니다🎉🥳</DialogTitle>
          <DialogDescription>
            추첨을 통해 스타벅스 기프티콘을 드립니다!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <Input
              id="name"
              name="name"
              placeholder="이름"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              ref={nameInputRef}
            />
            <Input
              id="phone"
              name="phone"
              placeholder="전화번호"
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
              ref={phoneInputRef}
            />
          </div>

          <Alert>
            <InfoIcon />
            <AlertTitle>상품 전송 후 개인정보 삭제</AlertTitle>
          </Alert>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" size="sm">
                닫기
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting} size="sm">
              전송
              {isSubmitting && (
                <LoaderCircleIcon className="ml-1 animate-spin" />
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
