import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ACCOUNT_INFO } from "@/constants/wedding";
import AccountItem from "./account-item";

export default function AccountDialog({ type }: { type: "groom" | "bride" }) {
  const accounts = ACCOUNT_INFO[type];
  const title = type === "groom" ? "신랑" : "신부";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-bold">{title} 측 계좌번호</Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{title} 측 계좌번호</DialogTitle>
          <DialogDescription>마음을 전해주셔서 감사합니다</DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          <AccountItem
            label={title}
            name={accounts.self.name}
            bank={accounts.self.bank}
            account={accounts.self.account}
          />
          <AccountItem
            label={`${title} 부`}
            name={accounts.father.name}
            bank={accounts.father.bank}
            account={accounts.father.account}
          />
          <AccountItem
            label={`${title} 모`}
            name={accounts.mother.name}
            bank={accounts.mother.bank}
            account={accounts.mother.account}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
