import type { DicebearAvatarOptions } from "@/components/sections/guestbook/comment/dicebear-avatar";
import { Database } from "../database.types";
import { createClient } from "../server";

type Comment = Database["public"]["Tables"]["invitation_comments"]["Row"];

export type CommentWithoutPassword = Omit<Comment, "password">;

export async function fetchComments() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("invitation_comments")
    // all fields except password
    .select(
      `
        comment_id,
        name,
        contents,
        visitor_id,
        created_at,
        avatar_option
      `,
    )
    .order("created_at", { ascending: false })
    .overrideTypes<CommentWithoutPassword[]>();

  if (error) {
    console.error("Error while fetching comments:", error);
    throw new Error(error.message);
  }

  return data;
}

export async function createComment(
  nameInput: string,
  passwordInput: string,
  commentInput: string,
  visitorId: string,
  avatarOption: DicebearAvatarOptions,
) {
  const supabase = await createClient();

  const { error } = await supabase.from("invitation_comments").insert({
    contents: commentInput,
    name: nameInput,
    password: passwordInput,
    visitor_id: visitorId,
    avatar_option: avatarOption,
  });

  if (error) {
    console.error("Error creating comment:", error);
    throw new Error(error.message);
  }
}

export async function deleteComment(commentId: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("invitation_comments")
    .delete()
    .match({ comment_id: commentId });

  if (error) {
    console.error("Error deleting comment:", error);
    throw new Error(error.message);
  }
}

export async function deleteCommentWithPassword(
  commentId: string,
  password: string,
) {
  const supabase = await createClient();

  const { data: comment, error: fetchError } = await supabase
    .from("invitation_comments")
    .select("password")
    .match({ comment_id: commentId })
    .single();

  if (fetchError) {
    console.error("Error fetching comment:", fetchError);
    throw new Error("Comment not found");
  }

  if (comment.password !== password) {
    return "비밀번호가 일치하지 않습니다.";
  }

  const { error } = await supabase
    .from("invitation_comments")
    .delete()
    .match({ comment_id: commentId });

  if (error) {
    console.error("Error deleting comment:", error);
    throw new Error(error.message);
  }
}
