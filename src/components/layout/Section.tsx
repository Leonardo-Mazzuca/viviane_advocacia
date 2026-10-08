import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Section({
  id,
  labelId,
  className,
  children,
}: {
  id?: string
  labelId?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={labelId} className={cn("scroll-mt-24 py-20 md:py-28", className)}>
      {children}
    </section>
  )
}
