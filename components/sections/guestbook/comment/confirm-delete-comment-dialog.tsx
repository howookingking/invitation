"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import useVisitorId from "@/hooks/use-visitor-id";
import {
  deleteComment,
  deleteCommentWithPassword,
} from "@/lib/supabase/services/comments";
import { cn } from "@/lib/utils";
import { LoaderCircleIcon, Trash2Icon, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";
import PasswordForm from "./password-form";

type Props = {
  visitorId: string;
  commentId: string;
};

export default function ConfirmDeleteCommentDialog({
  visitorId,
  commentId,
}: Props) {
  const { refresh } = useRouter();

  const localVisitorId = useVisitorId();
  const isAuthor = localVisitorId === visitorId;

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  const handleDeleteAuthorComment = async () => {
    setIsDeleting(true);

    await deleteComment(commentId);

    setIsDeleting(false);

    refresh();

    toast.success("축하말이 삭제되었습니다.");
    setIsDialogOpen(false);
  };

  const handleDeleteVisitorComment = async () => {
    if (passwordInput.trim().length === 0) {
      passwordInputRef.current?.focus();
      toast.warning("비밀번호를 입력해주세요.");
      return;
    }

    setIsDeleting(true);

    const messageWhenFailed = await deleteCommentWithPassword(
      commentId,
      passwordInput,
    );

    if (messageWhenFailed) {
      toast.error(messageWhenFailed);
      passwordInputRef.current?.focus();
      setIsDeleting(false);
      return;
    }

    setIsDeleting(false);

    refresh();
    toast.success("축하말이 삭제되었습니다.");

    setPasswordInput("");
    setIsDialogOpen(false);
  };

  const handleDeleteComment = async () => {
    isAuthor
      ? await handleDeleteAuthorComment()
      : await handleDeleteVisitorComment();
  };

  const handlOpenChange = (open: boolean) => {
    if (open) {
      setPasswordInput("");
    }
    setIsDialogOpen(open!);
  };

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={handlOpenChange}>
      <AlertDialogTrigger asChild className="absolute top-2 right-2">
        <XIcon
          size={12}
          className="hover:text-destructive cursor-pointer transition"
        />
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <Trash2Icon className="text-primary" size={20} /> 축하말을
            삭제하시겠습니까?
          </AlertDialogTitle>
          <AlertDialogDescription>
            이 작업은 실행 후 취소할 수 없습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {!isAuthor && (
          <PasswordForm
            password={passwordInput}
            onPasswordChange={handlePasswordChange}
            passwordInputRef={passwordInputRef}
          />
        )}

        <AlertDialogFooter>
          <AlertDialogCancel className="h-8 min-w-16 rounded-md px-3">
            취소
          </AlertDialogCancel>
          <Button
            className="min-w-16"
            size="sm"
            onClick={handleDeleteComment}
            disabled={isDeleting}
          >
            삭제
            <LoaderCircleIcon
              className={cn(isDeleting ? "animate-spin" : "hidden", "ml-1")}
            />
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
