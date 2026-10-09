import { cn } from "@/lib/utils"

export function buttonClass(variant: "primary" | "secondary" | "whatsapp" = "primary", className?: string) {
  return cn(
    "inline-flex min-h-12 items-center justify-center gap-2.5 px-6 text-center text-[0.95rem] font-medium transition-[colors,transform,box-shadow] duration-300",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
    variant === "whatsapp"
      ? "bg-gold font-semibold text-navy shadow-[0_12px_32px_-12px_rgba(184,149,80,0.75)] ring-1 ring-gold-light/40 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_16px_36px_-12px_rgba(184,149,80,0.85)]"
      : variant === "primary"
        ? "bg-navy text-white hover:bg-slate"
        : "border border-navy/20 bg-transparent text-navy hover:border-gold hover:bg-ivory",
    className,
  )
}
