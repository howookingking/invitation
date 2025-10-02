import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircleIcon } from "lucide-react";
import { RefObject } from "react";

type Props = {
  password: string;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passwordInputRef: RefObject<HTMLInputElement | null>;
};

export default function PasswordForm({
  password,
  onPasswordChange,
  passwordInputRef,
}: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Label htmlFor="password" className="text-muted-foreground shrink-0">
          비번
        </Label>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={onPasswordChange}
          ref={passwordInputRef}
        />
      </div>

      <Alert>
        <AlertCircleIcon />
        <AlertTitle>비번을 잊어버린 경우</AlertTitle>
        <AlertDescription className="flex items-center">
          신랑에게 연락주세요~
        </AlertDescription>
      </Alert>
    </div>
  );
}
