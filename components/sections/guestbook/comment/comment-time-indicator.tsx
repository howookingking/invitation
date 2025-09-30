import { getRelativeTimeKorean } from "@/lib/utils";
import { ClockIcon } from "lucide-react";

type Props = {
  createdAt: string;
};

export default function CommentTimeIndicator({ createdAt }: Props) {
  return (
    <p className="text-muted-foreground flex items-center gap-1 text-xs">
      <ClockIcon size={12} />
      <span>{getRelativeTimeKorean(createdAt)}</span>
    </p>
  );
}
