"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CommentWithoutPassword } from "@/lib/supabase/services/comments";
import SingleComment from "./single-comment";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AccordionComments({
  remainingComments,
}: {
  remainingComments: CommentWithoutPassword[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion type="single" onValueChange={() => setIsOpen(!isOpen)}>
      <AccordionItem value="comments-accordion">
        <AccordionTrigger
          className={cn(
            "cursor-pointer justify-center text-center",
            isOpen && "hidden",
          )}
        >
          {remainingComments.length}개의 이전 축하말 더보기
        </AccordionTrigger>

        <AccordionContent className="pb-0">
          <ul className="mt-2 grid grid-cols-2 gap-2 pb-0">
            {remainingComments.map((comment) => (
              <SingleComment
                key={comment.comment_id}
                commentId={comment.comment_id}
                contents={comment.contents}
                createdAt={comment.created_at}
                name={comment.name}
                visitorId={comment.visitor_id}
              />
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
