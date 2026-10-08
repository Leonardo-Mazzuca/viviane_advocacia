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
      <Title id={titleId} className="text-[2.15rem] leading-[1.12] text-ink sm:text-5xl">
        {title}
      </Title>
      {children ? <div className="mt-5 max-w-xl text-base leading-relaxed text-graphite sm:text-lg">{children}</div> : null}
    </div>
  )
}
