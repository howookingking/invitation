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
import { MessageSquareIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

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

export default function ContactDialog({ type }: { type: "groom" | "bride" }) {
  const title = type === "groom" ? "🤵🏻 신랑" : "👰🏻‍♀️ 신부";
  const contacts = type === "groom" ? groomContacts : brideContacts;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          {title} 측 연락하기
        </Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="pb-10">
        <DialogHeader>
          <DialogTitle>{title} 측 연락하기</DialogTitle>
          <DialogDescription />
        </DialogHeader>

        <div className="space-y-2">
          {contacts.map((c) => (
            <div
              key={c.role}
              className="flex items-center justify-between rounded-md border py-2 pr-2 pl-3"
            >
              <div className="space-y-0.5">
                <p className="text-sm">{c.role}</p>
                <p className="text-xs text-gray-600">
                  {c.name} · {c.phone}
                </p>
              </div>

              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <Link href={`tel:${c.phone}`}>
                    <PhoneIcon
                      className="h-4 w-4 text-gray-600"
                      strokeWidth={1.5}
                    />
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <Link href={`sms:${c.phone}`}>
                    <MessageSquareIcon
                      className="h-4 w-4 text-gray-600"
                      strokeWidth={1.5}
                    />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
