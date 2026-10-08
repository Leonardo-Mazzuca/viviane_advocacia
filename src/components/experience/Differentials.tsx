import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { BentoCell } from "@/components/ui/bento-grid"
import { StaggerItem, StaggerList } from "@/components/ui/stagger"

const pillars = [
  {
    number: "01",
    title: "Experiência",
    text: "Mais de 26 anos de atuação jurídica.",
  },
  {
    number: "02",
    title: "Estratégia",
    text: "Análise cuidadosa para identificar riscos e caminhos possíveis.",
  },
  {
    number: "03",
    title: "Proximidade",
    text: "Atendimento próximo e comunicação clara durante todo o processo.",
  },
]

export function Differentials() {
  return (
    <Section id="experiencia" labelId="experiencia-titulo">
      <Container>
        <StaggerList className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <StaggerItem className="md:col-span-3">
            <BentoCell className="border-navy bg-navy p-10 text-ivory md:p-14">
              <h2 id="experiencia-titulo" className="max-w-3xl text-[2.15rem] leading-[1.12] text-ivory sm:text-5xl">
                Mais do que resolver problemas jurídicos.{" "}
                <span className="mt-2 block text-cream italic sm:mt-3">Prevenir riscos.</span>
              </h2>
            </BentoCell>
          </StaggerItem>
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <BentoCell className="h-full">
                <p className="text-[11px] tracking-[0.18em] text-bronze uppercase">{pillar.number}</p>
                <h3 className="mt-4 text-3xl text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.text}</p>
              </BentoCell>
            </StaggerItem>
          ))}
        </StaggerList>
      </Container>
    </Section>
  )
}
