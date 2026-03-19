import { cn } from "@/lib/utils";

interface PillProps {
  label: string;
  variant?: "filled" | "outline";
  size?: "sm" | "md";
  casing?: "uppercase" | "lowercase" | "capitalize" | "normal";
  className?: string;
}

export default function Pill({ label, variant = "outline", size = "md", casing = "normal", className }: PillProps) {
  return (
    <span
      className={cn(
        "rounded-full font-bold tracking-wide",
        {
          "bg-orange-secondary text-dark-primary": variant === "filled",
          "border border-gray-light text-gray-light font-medium": variant === "outline",
          "px-2 py-0.5 text-xs": size === "sm",
          "px-3 py-1 text-xs": size === "md",
          "uppercase": casing === "uppercase",
          "lowercase": casing === "lowercase",
          "capitalize": casing === "capitalize",
        },
        className,
      )}
    >
      {label}
    </span>
  );
}
