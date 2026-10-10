import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { ExperiencePhoto } from "@/components/experience/ExperiencePhoto"
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
    <Section id="experiencia" labelId="experiencia-titulo" className="bg-paper py-0 md:py-0">
      <div className="bg-navy-deep py-16 text-white md:py-20">
        <Container>
          <h2 id="experiencia-titulo" className="max-w-4xl text-[1.95rem] leading-[1.12] font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
            Mais do que resolver problemas,{" "}
            <span className="text-gold-light">solucioná-los de maneira rápida, eficiente e econômica.</span>{" "}
            <span className="mt-3 block font-normal text-white/95 sm:mt-4">Prevenir riscos e prejuízos.</span>
          </h2>
        </Container>
      </div>
      <ExperiencePhoto />
      <Container className="py-16 md:py-20">
        <StaggerList className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <article className="h-full rounded-sm border border-line bg-paper p-8 shadow-[0_14px_40px_-28px_rgba(20,36,61,0.16)]">
                <p className="text-[11px] tracking-[0.18em] text-gold uppercase">{pillar.number}</p>
                <h3 className="mt-4 text-3xl text-navy">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.text}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerList>
      </Container>
    </Section>
  )
}
