import { Globe, MapPin } from "lucide-react"
import { serviceCoverage } from "@/data/site"
import { cn } from "@/lib/utils"

type CoverageHighlightProps = {
  className?: string
  /** compact: barra de credenciais; default: card completo */
  variant?: "default" | "compact"
}

export function CoverageHighlight({ className, variant = "default" }: CoverageHighlightProps) {
  if (variant === "compact") {
    return (
      <p className={cn("text-sm leading-relaxed text-muted", className)}>
        <span className="font-medium text-navy">{serviceCoverage.officeTitle}</span>
        {" · "}
        <span className="text-graphite">{serviceCoverage.onlineTitle.toLowerCase()}</span>
      </p>
    )
  }

  return (
    <aside
      className={cn(
        "rounded-sm border border-gold/40 bg-ivory px-5 py-5 shadow-[0_12px_32px_-24px_rgba(20,36,61,0.2)] sm:px-6 sm:py-6",
        className,
      )}
      aria-label="Local de atuação e atendimento"
    >
      <p className="text-[11px] font-medium tracking-[0.2em] text-gold uppercase">Onde atuo</p>
      <ul className="mt-4 grid gap-5 sm:grid-cols-2 sm:gap-6">
        <li className="min-w-0">
          <p className="flex items-start gap-2.5 font-serif text-[1.35rem] leading-snug font-semibold text-navy sm:text-[1.45rem]">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
            {serviceCoverage.officeTitle}
          </p>
          <p className="mt-2 pl-[1.875rem] text-sm leading-relaxed text-muted">{serviceCoverage.officeDetail}</p>
        </li>
        <li className="min-w-0 sm:border-l sm:border-gold/25 sm:pl-6">
          <p className="flex items-start gap-2.5 font-serif text-[1.35rem] leading-snug font-semibold text-navy sm:text-[1.45rem]">
            <Globe className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
            {serviceCoverage.onlineTitle}
          </p>
          <p className="mt-2 pl-[1.875rem] text-sm leading-relaxed text-muted">{serviceCoverage.onlineDetail}</p>
        </li>
      </ul>
    </aside>
  )
}
