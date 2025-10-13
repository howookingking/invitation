import CommentTimeIndicator from "./comment-time-indicator";
import ConfirmDeleteCommentDialog from "./confirm-delete-comment-dialog";
import DicebearAvatar, { type DicebearAvatarOptions } from "./dicebear-avatar";
import MyCommentBadge from "./my-comment-indicator";

type Props = {
  commentId: string;
  contents: string;
  createdAt: string;
  name: string;
  visitorId: string;
  avatarOption: DicebearAvatarOptions;
  isPinned?: boolean;
};

export default function SingleComment({
  name,
  contents,
  createdAt,
  commentId,
  visitorId,
  avatarOption,
  isPinned,
}: Props) {
  return (
    <li className="relative rounded-sm border p-3">
      {isPinned && (
        <p className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl select-none">
          📍
        </p>
      )}

      <div className="flex h-full flex-col justify-between gap-2">
        <div className="space-y-2">
          {/* card header */}

          <div className="flex items-center gap-1">
            <DicebearAvatar avatarOption={avatarOption} />
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
