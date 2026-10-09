import { portraits, professional } from "@/data/site"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionIntro } from "@/components/ui/section-intro"
import { PortraitFrame } from "@/components/ui/portrait-frame"

const credentials = [
  {
    title: "Pós-Graduação em Direito e Negócios Imobiliários",
    detail: "IBMEC / Damásio",
  },
  {
    title: "Direito Imobiliário Extrajudicial",
    detail: "Cursos especializados, incluindo Registros de Imóveis Descomplicado (RID) — Professor Marcos Salomão.",
  },
]

export function About() {
  return (
    <Section id="sobre" labelId="sobre-titulo" className="bg-paper">
      <Container className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionIntro
            eyebrow="Sobre"
            titleId="sobre-titulo"
            title="Experiência para decisões que envolvem patrimônio, família e futuro."
          >
            <p>
              Viviane Melasso Tambellini atua há mais de 26 anos na área jurídica, com experiência voltada especialmente às questões relacionadas ao patrimônio imobiliário, planejamento familiar e sucessório.
            </p>
            <p className="mt-4">
              Sua atuação combina experiência prática, especialização e atenção aos detalhes necessários para conduzir questões jurídicas com segurança e clareza.
            </p>
          </SectionIntro>
          <p className="mt-6 text-sm tracking-wide text-graphite">{professional.oab}</p>
          <div className="mt-10">
            <h3 className="text-2xl text-navy">Formação e especializações</h3>
            <ul className="mt-6 space-y-6 border-l border-gold/45 pl-6">
              {credentials.map((item) => (
                <li key={item.title}>
                  <p className="font-serif text-2xl leading-snug text-navy">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <PortraitFrame
            imageSrc={portraits.about || undefined}
            alt={`Retrato profissional de ${professional.fullName}`}
            caption=""
            drawing="arch"
            tone="light"
            objectPosition="center 22%"
          />
        </div>
      </Container>
    </Section>
  )
}
