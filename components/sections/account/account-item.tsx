"use client";

import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

type Props = {
  label: string;
  name: string;
  bank: string;
  account: string;
};

export default function AccountItem({ label, name, bank, account }: Props) {
  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(account);
      toast.success("복사 완료", {
        description: `${name}님의 계좌번호가 복사되었습니다`,
      });
    } catch {
      toast.error("복사 실패", {
        description: "다시 시도해주세요",
      });
    }
  };

  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <span className="text-primary font-bold">{label}</span>
        <Button
          onClick={handleCopy}
          variant="outline"
          size="sm"
          className="cursor-pointer"
        >
          <CopyIcon className="mr-1" />
          복사
        </Button>
      </div>
      <div className="space-y-1 text-sm">
        <div className="flex gap-2">
          <span className="text-muted-foreground w-12">예금주</span>
          <span>{name}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-muted-foreground w-12">은행</span>
          <span>{bank}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-muted-foreground w-12">계좌</span>
          <span className="font-mono">{account}</span>
        </div>
      </div>
    </div>
  );
}
