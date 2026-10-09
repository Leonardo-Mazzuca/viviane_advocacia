import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function BackgroundGradient({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-navy text-ivory", className)}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-[-30%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(231,215,188,0.16),transparent_64%)]" />
        <div className="absolute right-[-12%] bottom-[-40%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(247,244,239,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,244,239,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(247,244,239,0.045)_1px,transparent_1px)] bg-[size:84px_84px] opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}
