"use client";

import { Badge } from "@/components/ui/badge";
import useVisitorId from "@/hooks/use-visitor-id";

export default function MyCommentBadge({ visitorId }: { visitorId: string }) {
  const localVisitorId = useVisitorId();
  const isAuthor = localVisitorId === visitorId;

  if (!isAuthor) {
    return <div />;
  }

  return <Badge>내댓글</Badge>;
}
