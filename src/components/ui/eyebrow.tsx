import type { ReactNode } from "react"

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-bronze">
      <span className="h-px w-8 bg-champagne" aria-hidden="true" />
      {children}
    </p>
  )
}
