import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionIntro } from "@/components/ui/section-intro"
import { StaggerItem, StaggerList } from "@/components/ui/stagger"

const steps = [
  {
    number: "01",
    title: "Primeiro contato",
    text: "Você apresenta sua dúvida ou situação.",
  },
  {
    number: "02",
    title: "Análise",
    text: "A situação é analisada de forma individualizada.",
  },
  {
    number: "03",
    title: "Estratégia",
    text: "São identificados os caminhos jurídicos possíveis.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    text: "Você recebe orientação e acompanhamento durante as etapas necessárias.",
  },
]

export function Process() {
  return (
    <Section labelId="processo-titulo" className="bg-ivory">
      <Container>
        <SectionIntro eyebrow="Atendimento" title="Como podemos ajudar" titleId="processo-titulo" />
        <div className="relative mt-14 md:mt-16">
          <span aria-hidden="true" className="pointer-events-none absolute top-[22px] right-0 left-0 hidden h-px bg-line md:block" />
          <StaggerList as="ol" className="grid gap-0 md:grid-cols-4 md:gap-8">
            {steps.map((step, index) => (
              <StaggerItem as="li" key={step.number} className="relative flex gap-5 pb-10 md:block md:pb-0">
                <div className="flex flex-col items-center md:items-start">
                  <span className="relative z-[1] flex h-11 w-11 items-center justify-center border border-gold/35 bg-paper font-serif text-lg text-navy">
                    {step.number}
                  </span>
                  {index < steps.length - 1 ? <span className="w-px flex-1 bg-line md:hidden" aria-hidden="true" /> : null}
                </div>
                <div className="pt-1 md:mt-6 md:pt-0">
                  <h3 className="text-2xl text-navy">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </Container>
    </Section>
  )
}
