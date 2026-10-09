import { cn } from "@/lib/utils"

export function buttonClass(variant: "primary" | "secondary" = "primary", className?: string) {
  return cn(
    "inline-flex min-h-12 items-center justify-center gap-2 px-6 text-center text-[0.95rem] font-medium transition-colors duration-300",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze",
    variant === "primary"
      ? "bg-navy text-ivory hover:bg-slate"
      : "border border-navy/15 bg-transparent text-navy hover:border-bronze hover:bg-paper",
    className,
  )
}
