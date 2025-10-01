import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";
import CreateCommentForm from "./comment/create-comment-form";
import VisitorComments from "./comment/visitor-comments";

export default async function GuestbookSection() {
  return (
    <SectionContainer id="guestbook" className="px-4 py-10 pb-4">
      <SectionTitle korTitle="축하말" engTitle="GUESTBOOK" className="pb-10" />

      <CreateCommentForm />

      <VisitorComments />
    </SectionContainer>
  );
}
