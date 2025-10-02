"use client";

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

export const COMMENT_INPUT_MAX = 100;

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
      toast.warning("비번을 입력해주세요.");
      return;
    }
    if (commentInput.trim().length === 0) {
      commentInputRef.current?.focus();
      toast.warning("축하말을 입력해주세요.");
      return;
    }

    if (commentInput.trim().length > COMMENT_INPUT_MAX) {
      commentInputRef.current?.focus();
      toast.warning(`축하말은 ${COMMENT_INPUT_MAX}자 이하로 입력해주세요.`);
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
      toast.success("축하말이 등록되었습니다.");

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
        <div className="bg-muted/50 space-y-4 rounded-sm border p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative">
              <DicebearAvatar size={64} avatarOption={avatarOption} />

              <RotateCwIcon
                size={16}
                className="text-primary absolute -top-2 -right-2 cursor-pointer"
                onClick={() => setAvatarOption(generateAvatar())}
                strokeWidth={3}
              />
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
                    className="text-primary absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                    onClick={() => setNameInput(generateNickname())}
                    strokeWidth={3}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Label
                  htmlFor="password"
                  className="text-muted-foreground shrink-0"
                >
                  비번
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
