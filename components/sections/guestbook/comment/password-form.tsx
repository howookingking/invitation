import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
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
    <div className="space-y-2">
      <Input
        id="password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChange}
        ref={passwordInputRef}
        placeholder="비밀번호"
      />

      <Alert>
        <AlertCircleIcon />
        <AlertTitle>비밀번호를 잊어버린 경우</AlertTitle>
        <AlertDescription className="flex items-center">
          신랑에게 연락주세요~
        </AlertDescription>
      </Alert>
    </div>
  );
}
