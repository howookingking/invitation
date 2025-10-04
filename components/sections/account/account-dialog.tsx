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
  const emoji = type === "groom" ? "🤵🏻" : "👰🏻‍♀️";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          {emoji} {title} 측 계좌번호
        </Button>
      </DialogTrigger>

      <DialogContent className="pb-10">
        <DialogHeader>
          <DialogTitle>
            {emoji} {title} 측 계좌번호
          </DialogTitle>
          <DialogDescription />
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
