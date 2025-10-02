import { COMMENT_INPUT_MAX } from "./create-comment-form";

export default function CommentLengthIndicator({ length }: { length: number }) {
  return (
    <>
      {length === 0 ? (
        <p className="text-muted-foreground text-xs">
          최대 {COMMENT_INPUT_MAX}자까지 입력 가능합니다
        </p>
      ) : length <= COMMENT_INPUT_MAX ? (
        <p className="text-muted-foreground text-xs">
          {COMMENT_INPUT_MAX - length}자 남음
        </p>
      ) : (
        <p className="text-destructive text-xs">
          {COMMENT_INPUT_MAX}자 이상 입력할 수 없습니다
        </p>
      )}
    </>
  );
}
