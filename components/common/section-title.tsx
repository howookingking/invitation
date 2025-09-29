import { cn } from "@/lib/utils";

type Props = {
  korTitle: string;
  engTitle: string;
  className?: string;
};

export default function SectionTitle({ engTitle, korTitle, className }: Props) {
  return (
    <div className={cn("text-center", className)}>
      <h2 className="text-xs tracking-widest text-rose-300">{engTitle}</h2>
      <h3 className="text-xl text-rose-600">{korTitle}</h3>
    </div>
  );
}
