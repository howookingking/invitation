"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useIsMac from "@/hooks/use-is-mac";
import useIsMobile from "@/hooks/use-is-mobile";
import { generateAvatar } from "@/lib/avatart-generator";
import generateNickname from "@/lib/nickname-generator";
import { createComment } from "@/lib/supabase/services/comments";
import { getOrCreateVisitorId } from "@/lib/utils";
import { LoaderCircle, RotateCwIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";
import CommentLengthIndicator from "./comment-length-indicator";
import DicebearAvatar, { type DicebearAvatarOptions } from "./dicebear-avatar";

export default function CreateCommentForm() {
  const { refresh } = useRouter();

  const isMobile = useIsMobile();
  const isMac = useIsMac();

  const getShortcutText = () => {
    if (isMobile) return null;
    return isMac ? "⌘⏎" : "Ctrl⏎";
  };

  const [isCreating, setIsCreating] = useState(false);
  const [nameInput, setNameInput] = useState(generateNickname());
  const [passwordInput, setPasswordInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [avatarOption, setAvatarOption] =
    useState<DicebearAvatarOptions>(generateAvatar());

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const commentInputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (nameInput.trim().length === 0) {
      nameInputRef.current?.focus();
      toast.warning("이름을 입력해주세요.");
      return;
    }
    if (passwordInput.length === 0) {
      passwordInputRef.current?.focus();
      toast.warning("비밀번호를 입력해주세요.");
      return;
    }
    if (commentInput.trim().length === 0) {
      commentInputRef.current?.focus();
      toast.warning("댓글을 입력해주세요.");
      return;
    }

    setIsCreating(true);

    try {
      const visitorId = getOrCreateVisitorId();

      await createComment(
        nameInput.trim(),
        passwordInput,
        commentInput.trim(),
        visitorId,
        avatarOption,
      );

      setPasswordInput("");
      setCommentInput("");
      toast.success("댓글이 등록되었습니다.");

      refresh();
    } finally {
      setIsCreating(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      <form className="pb-4" onSubmit={handleSubmit}>
        <div className="text-muted-foreground mb-1 text-xs">
          * 동일기기 동일브라우저 사용시
          <Badge className="mx-1">내댓글</Badge>이 표시됩니다
        </div>

        <div className="bg-muted/50 space-y-4 rounded-sm border p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative">
              <DicebearAvatar size={64} avatarOption={avatarOption} />

              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setAvatarOption(generateAvatar())}
                className="text-primary/80 hover:text-primary absolute top-4 left-3 h-10 w-10 cursor-pointer rounded-full bg-transparent hover:scale-150 hover:animate-spin hover:bg-transparent"
              >
                <RotateCwIcon strokeWidth={3} />
              </Button>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="name"
                  className="text-muted-foreground shrink-0"
                >
                  이름
                </Label>
                <div className="relative">
                  <Input
                    autoComplete="username"
                    ref={nameInputRef}
                    className="max-w-[160px]"
                    type="text"
                    id="name"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                  />
                  <RotateCwIcon
                    size={16}
                    className="text-primary/80 hover:text-primary absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer transition hover:scale-120 hover:animate-spin"
                    onClick={() => setNameInput(generateNickname())}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Label
                  htmlFor="password"
                  className="text-muted-foreground shrink-0"
                >
                  비밀번호
                </Label>
                <Input
                  autoComplete="current-password"
                  ref={passwordInputRef}
                  className="max-w-[160px]"
                  type="password"
                  id="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
              </div>
            </div>
          </div>

          <Textarea
            ref={commentInputRef}
            id="comment"
            placeholder="신랑 신부에게 축하의 메시지를 남겨주세요!"
            className="min-h-[100px] resize-none text-sm placeholder:text-sm"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <div className="flex items-center justify-between">
            <CommentLengthIndicator length={commentInput.length} />

            <Button size="sm" type="submit" disabled={isCreating}>
              등록 {getShortcutText()}{" "}
              {isCreating && <LoaderCircle className="ml-1 animate-spin" />}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
