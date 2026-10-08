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
        "hover-card relative h-full border border-line bg-paper transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_40px_-28px_rgba(15,47,92,0.28)]",
        className,
      )}
    >
      {children}
    </div>
  )
}
