import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type PracticeAreaIconProps = {
  icon: LucideIcon
  className?: string
}

export function PracticeAreaIcon({ icon: Icon, className }: PracticeAreaIconProps) {
  return (
    <div className={cn("relative inline-flex", className)} aria-hidden="true">
      <span className="absolute -inset-2 rounded-full bg-gold/15 blur-md transition duration-500 group-hover/card:scale-110 group-hover/card:bg-gold/25" />
      <span className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-sm bg-navy shadow-[0_14px_32px_-14px_rgba(13,25,43,0.55)] ring-1 ring-gold/45 transition duration-300 group-hover/card:-translate-y-1 group-hover/card:ring-gold group-hover/card:shadow-[0_18px_36px_-12px_rgba(184,149,80,0.45)] sm:h-[4.75rem] sm:w-[4.75rem]">
        <span className="absolute inset-[3px] rounded-[2px] border border-gold/20" />
        <Icon
          className="relative h-8 w-8 text-gold-light transition duration-300 group-hover/card:scale-105 group-hover/card:text-white sm:h-[2.125rem] sm:w-[2.125rem]"
          strokeWidth={1.35}
        />
      </span>
      <span className="absolute -right-1.5 -bottom-1.5 h-5 w-5 border-r-2 border-b-2 border-gold" />
    </div>
  )
}
