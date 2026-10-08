import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function BackgroundGradient({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-navy text-ivory", className)}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-[-30%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(212,183,106,0.2),transparent_64%)]" />
        <div className="absolute right-[-12%] bottom-[-40%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(26,77,133,0.35),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(238,220,173,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(238,220,173,0.08)_1px,transparent_1px)] bg-[size:84px_84px] opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}
