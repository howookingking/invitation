"use client";

import { Button } from "@/components/ui/button";
import { CopyIcon, CheckIcon } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

type Props = {
  label: string;
  name: string;
  bank: string;
  account: string;
};

export default function AccountItem({ label, name, bank, account }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(account);
      setCopied(true);

      toast.success("복사 완료", {
        description: `${name}님의 계좌번호가 복사되었습니다`,
      });

      // 1.5초 뒤 복사 완료 상태 해제
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("복사 실패", {
        description: "다시 시도해주세요",
      });
    }
  };

  return (
    <div className="flex items-center justify-between rounded-md border py-2 pr-2 pl-3">
      <div className="space-y-0.5">
        <p className="text-sm">{label}</p>
        <p className="text-xs text-gray-600">
          {name} · {bank} · {account}
        </p>
      </div>

      <Button
        onClick={handleCopy}
        variant="ghost"
        size="icon"
        className="relative cursor-pointer rounded-full"
      >
        {/* Copy 아이콘 */}
        <CopyIcon
          className={`absolute h-4 w-4 text-gray-600 transition-opacity duration-400 ${
            copied ? "opacity-0" : "opacity-100"
          }`}
          strokeWidth={1.5}
        />

        {/* Check 아이콘 */}
        <CheckIcon
          className={`absolute h-4 w-4 text-green-600 transition-opacity duration-400 ${
            copied ? "opacity-100" : "opacity-0"
          }`}
          strokeWidth={1.8}
        />
      </Button>
    </div>
  );
}
