import type { MouseEvent, ReactNode } from "react"
import { cn } from "@/lib/utils"

export function HoverCard({ children, className }: { children: ReactNode; className?: string }) {
  function onMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`)
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className={cn(
        "hover-card group/card relative h-full rounded-sm border border-line bg-paper shadow-[0_14px_40px_-28px_rgba(20,36,61,0.18)] transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_22px_44px_-26px_rgba(20,36,61,0.22)]",
        className,
      )}
    >
      {children}
    </div>
  )
}
