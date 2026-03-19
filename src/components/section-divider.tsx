import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "max-w-6",
  md: "max-w-8",
  lg: "max-w-16",
};

interface SectionDividerProps {
  size?: keyof typeof sizeClasses;
  className?: string;
}

export default function SectionDivider({ size = "md", className }: SectionDividerProps) {
  return <hr className={cn("h-0 border-t-[6px] border-orange-secondary", sizeClasses[size], className)} />;
}
