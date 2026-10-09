import { Building2, FileSignature, Landmark, ScrollText, Users, Waypoints, type LucideIcon } from "lucide-react"
import { practiceAreas, type PracticeIcon } from "@/data/practiceAreas"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionIntro } from "@/components/ui/section-intro"
import { HoverCard } from "@/components/ui/hover-card"
import { StaggerItem, StaggerList } from "@/components/ui/stagger"

const icons: Record<PracticeIcon, LucideIcon> = {
  building: Building2,
  contract: FileSignature,
  inventory: ScrollText,
  family: Users,
  registry: Landmark,
  planning: Waypoints,
}

export function PracticeAreas() {
  return (
    <Section id="areas" labelId="areas-titulo" className="bg-ivory">
      <Container>
        <SectionIntro eyebrow="Atuação" title="Áreas de atuação" titleId="areas-titulo">
          Assessoria jurídica especializada para proteger, regularizar e planejar seu patrimônio.
        </SectionIntro>
        <StaggerList as="ul" className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => {
            const Icon = icons[area.icon]
            return (
              <StaggerItem as="li" key={area.id} className="h-full min-w-0">
                <article className="h-full">
                  <HoverCard className="h-full">
                    <div className="relative z-[1] flex h-full flex-col p-7 sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <p className="font-serif text-xl text-gold">{area.number}</p>
                        <span className="relative flex h-12 w-12 items-center justify-center border border-gold/35 bg-paper text-navy shadow-sm">
                          <Icon className="h-5 w-5" strokeWidth={1.35} aria-hidden="true" />
                          <span className="absolute -right-px -bottom-px h-3 w-3 border-r border-b border-gold/70" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-[1.65rem] leading-tight text-navy">{area.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-graphite">{area.description}</p>
                    </div>
                  </HoverCard>
                </article>
              </StaggerItem>
            )
          })}
        </StaggerList>
      </Container>
    </Section>
  )
}
