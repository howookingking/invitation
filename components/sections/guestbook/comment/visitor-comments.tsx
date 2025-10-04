import { fetchComments } from "@/lib/supabase/services/comments";
import AccordionComments from "./accordion-comments";
import type { DicebearAvatarOptions } from "./dicebear-avatar";
import SingleComment from "./single-comment";

const INITIAL_DISPLAY_COUNT = 6;

export default async function VisitorComments() {
  const comments = await fetchComments();

  if (comments.length === 0) {
    return (
      <p className="text-muted-foreground my-20 text-center">
        첫 번째 축하말을 남겨보세요!
      </p>
    );
  }

  const latestComments = comments.slice(0, INITIAL_DISPLAY_COUNT);
  const remainingComments = comments.slice(INITIAL_DISPLAY_COUNT);

  return (
    <>
      <ul className="grid grid-cols-2 gap-2">
        {latestComments.map((comment) => (
          <SingleComment
            key={comment.comment_id}
            commentId={comment.comment_id}
            contents={comment.contents}
            createdAt={comment.created_at}
            name={comment.name}
            visitorId={comment.visitor_id}
            avatarOption={comment.avatar_option as DicebearAvatarOptions}
          />
        ))}
      </ul>

      {remainingComments.length > 0 && (
        <AccordionComments remainingComments={remainingComments} />
      )}
    </>
  );
}
