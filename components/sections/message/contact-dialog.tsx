import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { WEDDING_INFO } from "@/constants/wedding";
import { MessageCircleIcon, PhoneIcon } from "lucide-react";

type Contact = {
  role: string;
  name: string;
  phone: string;
};

const groomContacts: Contact[] = [
  {
    role: "신랑",
    name: WEDDING_INFO.groom,
    phone: WEDDING_INFO.contact.groom.self,
  },
  {
    role: "신랑 부",
    name: WEDDING_INFO.groomFamily.father,
    phone: WEDDING_INFO.contact.groom.father,
  },
  {
    role: "신랑 모",
    name: WEDDING_INFO.groomFamily.mother,
    phone: WEDDING_INFO.contact.groom.mother,
  },
];

const brideContacts: Contact[] = [
  {
    role: "신부",
    name: WEDDING_INFO.bride,
    phone: WEDDING_INFO.contact.bride.self,
  },
  {
    role: "신부 부",
    name: WEDDING_INFO.brideFamily.father,
    phone: WEDDING_INFO.contact.bride.father,
  },
  {
    role: "신부 모",
    name: WEDDING_INFO.brideFamily.mother,
    phone: WEDDING_INFO.contact.bride.mother,
  },
];

export default function ContactDialog() {
  const renderContactCard = (c: Contact) => (
    <div
      key={c.role}
      className="bg-muted/40 hover:bg-muted/60 flex items-center justify-between rounded-xl border p-3 shadow-sm transition"
    >
      <div>
        <p className="text-sm font-medium">{c.role}</p>
        <p className="text-muted-foreground text-xs">
          {c.name} · {c.phone}
        </p>
      </div>

      <div className="flex gap-2">
        {/* 전화 버튼 */}
        <Button variant="outline" size="icon" asChild className="rounded-full">
          <a href={`tel:${c.phone}`}>
            <PhoneIcon className="h-4 w-4" />
          </a>
        </Button>

        {/* 문자 버튼 */}
        <Button variant="outline" size="icon" asChild className="rounded-full">
          <a href={`sms:${c.phone}`}>
            <MessageCircleIcon className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">
          <PhoneIcon />
          연락하기
        </Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="pb-10">
        <DialogHeader>
          <DialogTitle>연락하기</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-blue-500">신랑측</h3>
          {groomContacts.map(renderContactCard)}
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-rose-500">신부측</h3>
          {brideContacts.map(renderContactCard)}
        </div>
      </DialogContent>
    </Dialog>
  );
}
