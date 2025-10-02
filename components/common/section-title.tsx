import { cn } from "@/lib/utils";

type Props = {
  korTitle: string;
  engTitle: string;
  className?: string;
};

export default function SectionTitle({ engTitle, korTitle, className }: Props) {
  return (
    <div className={cn("text-center", className)}>
      <h2 className="text-primary/50 text-xs tracking-widest">{engTitle}</h2>
      <h3 className="text-primary text-xl">{korTitle}</h3>
    </div>
  );
}
