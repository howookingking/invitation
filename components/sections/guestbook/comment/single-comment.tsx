import CommentTimeIndicator from "./comment-time-indicator";
import ConfirmDeleteCommentDialog from "./confirm-delete-comment-dialog";
import DicebearAvatar from "./dicebear-avatar";
import MyCommentBadge from "./my-comment-indicator";

type Props = {
  commentId: string;
  contents: string;
  createdAt: string;
  name: string;
  visitorId: string;
};

export default function SingleComment({
  name,
  contents,
  createdAt,
  commentId,
  visitorId,
}: Props) {
  return (
    <li className="bg-card hover:bg-muted/30 relative h-full rounded-sm border p-4 transition-colors">
      <div className="flex h-full flex-col justify-between gap-2">
        <div className="space-y-2">
          {/* card header */}

          <div className="flex items-center gap-1">
            <DicebearAvatar />
            <p className="text-sm font-semibold">{name}</p>
          </div>

          <div>
            <ConfirmDeleteCommentDialog
              visitorId={visitorId}
              commentId={commentId}
            />
          </div>

          {/* contents */}
          <p className="text-sm text-gray-600">{contents}</p>
        </div>

        {/* footer */}
        <div className="flex items-center justify-between">
          <MyCommentBadge visitorId={visitorId} />
          <CommentTimeIndicator createdAt={createdAt} />
        </div>
      </div>
    </li>
  );
}
