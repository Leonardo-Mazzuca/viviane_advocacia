import { Container } from "@/components/layout/Container"

const facts = [
  { label: "Experiência jurídica", value: "26+ anos" },
  { label: "OAB/SP", value: "173.688" },
  { label: "Atuação", value: "Direito Imobiliário" },
  { label: "Atendimento", value: "Em todo o Brasil" },
]

export function AuthorityBar() {
  return (
    <section aria-label="Credenciais" className="border-y border-gold/25 bg-paper">
      <Container className="py-8 md:py-10">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {facts.map((fact) => (
            <li key={fact.label} className="min-w-0">
              <p className="text-[11px] tracking-[0.18em] text-gold uppercase">{fact.label}</p>
              <p className="mt-2 font-serif text-[1.55rem] leading-tight text-ink sm:text-[1.85rem]">{fact.value}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
