import type { ReactNode } from "react"
import { Eyebrow } from "@/components/ui/eyebrow"

export function SectionIntro({
  eyebrow,
  title,
  titleId,
  level = "h2",
  children,
}: {
  eyebrow?: string
  title: string
  titleId: string
  level?: "h1" | "h2"
  children?: ReactNode
}) {
  const Title = level
  return (
    <div className="max-w-2xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Title
        id={titleId}
        className="text-[2.25rem] leading-[1.1] font-semibold tracking-[-0.02em] text-navy sm:text-[2.75rem] lg:text-[3rem]"
      >
        {title}
      </Title>
      <span aria-hidden="true" className="mt-5 block h-0.5 w-14 bg-gold sm:w-16" />
      {children ? <div className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{children}</div> : null}
    </div>
  )
}
