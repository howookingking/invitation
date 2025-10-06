import { cn } from "@/lib/utils";

type Props = {
  korPetName: string;
  isCorrect: boolean;
  message: string;
  answer: string;
  shouldShow: boolean;
};

export default function SpeechBallooon({
  korPetName: petName,
  isCorrect,
  message,
  answer,
  shouldShow,
}: Props) {
  return (
    <div
      className={cn(
        isCorrect ? "w-20" : "w-32",
        "translate-y-50% pointer-events-none absolute -top-15 left-1/2 z-50 -translate-x-1/2 transition-all duration-300",
        shouldShow ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="flex flex-col items-center gap-1 rounded-sm bg-white p-2 text-xs text-gray-800 ring-4 ring-rose-200">
        {isCorrect ? (
          <span className={cn(petName === "홍삼" ? "text-2xl" : "text-base")}>
            {answer}
          </span>
        ) : (
          <>
            <span className="text-sm font-bold">{petName}</span>
            <span className="text-xs text-gray-600">{message}</span>
          </>
        )}
      </div>

      <div className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-t-4 border-r-4 border-l-4 border-t-rose-200 border-r-transparent border-l-transparent" />
    </div>
  );
}
