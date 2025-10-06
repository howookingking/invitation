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
import { GIFT_NUMBER } from "@/constants/easter-egg";
import useVisitorId from "@/hooks/use-visitor-id";
import {
  createEasterEggContact,
  fetchContactsCount,
} from "@/lib/supabase/services/easter-egg";
import { cn } from "@/lib/utils";
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

  const [isSeatTaken, setIsSeatTaken] = useState(false);

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
      return;
    }

    setIsSubmitting(false);

    toast.success("기프티콘은 순차적으로 발송됩니다!!");

    setIsEasterEggDialogOpen(false);

    setNameInput("");
    setPhoneInput("");
  };

  useEffect(() => {
    fetchContactsCount().then((count) => {
      setIsSeatTaken(count >= GIFT_NUMBER);
    });
  }, []);

  return (
    <Dialog
      open={isEasterEggDialogOpen}
      onOpenChange={setIsEasterEggDialogOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>축하합니다🎉🥳</DialogTitle>
          <DialogDescription>
            선착순으로 스타벅스 기프티콘을 드립니다!
          </DialogDescription>
        </DialogHeader>

        {isSeatTaken ? (
          <Alert>
            <InfoIcon />
            <AlertTitle>
              선착순 인원이 모두 채워졌습니다. 죄송합니다!!
            </AlertTitle>
          </Alert>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={cn("space-y-4", isSeatTaken && "hidden")}
          >
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
              <AlertTitle>개인정보 상품 전송 후 삭제</AlertTitle>
            </Alert>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">닫기</Button>
              </DialogClose>
              <Button type="submit" disabled={isSubmitting}>
                전송
                {isSubmitting && (
                  <LoaderCircleIcon className="ml-1 animate-spin" />
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
