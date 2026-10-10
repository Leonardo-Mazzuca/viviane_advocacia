import {
  FileSignature,
  Home,
  MapPinned,
  ScrollText,
  Users,
  Waypoints,
  type LucideIcon,
} from "lucide-react"
import { practiceAreas, type PracticeIcon } from "@/data/practiceAreas"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionIntro } from "@/components/ui/section-intro"
import { HoverCard } from "@/components/ui/hover-card"
import { StaggerItem, StaggerList } from "@/components/ui/stagger"
import { PracticeAreaIcon } from "@/components/practice-areas/PracticeAreaIcon"

const icons: Record<PracticeIcon, LucideIcon> = {
  building: Home,
  contract: FileSignature,
  inventory: ScrollText,
  family: Users,
  registry: MapPinned,
  planning: Waypoints,
}

export function PracticeAreas() {
  return (
    <Section id="areas" labelId="areas-titulo" className="bg-ivory">
      <Container>
        <SectionIntro eyebrow="Atuação" title="Áreas de atuação" titleId="areas-titulo">
          Assessoria jurídica especializada para proteger, regularizar e planejar seu patrimônio.
        </SectionIntro>
        <StaggerList as="ul" className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => {
            const Icon = icons[area.icon]
            return (
              <StaggerItem as="li" key={area.id} className="h-full min-w-0">
                <article className="h-full">
                  <HoverCard className="h-full overflow-hidden">
                    <div className="relative flex flex-col items-center border-b border-gold/25 bg-[linear-gradient(165deg,rgba(20,36,61,0.07)_0%,rgba(255,255,255,0.95)_42%,rgba(216,189,131,0.12)_100%)] px-6 py-9 sm:px-8 sm:py-10">
                      <p className="absolute top-4 right-4 font-serif text-lg tracking-wide text-gold sm:top-5 sm:right-5">
                        {area.number}
                      </p>
                      <PracticeAreaIcon icon={Icon} />
                      <span className="mt-5 h-px w-12 bg-gold/70" aria-hidden="true" />
                    </div>
                    <div className="relative z-[1] flex h-full flex-col p-7 sm:p-8">
                      <h3 className="text-[1.65rem] leading-tight text-navy">{area.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite">{area.description}</p>
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
