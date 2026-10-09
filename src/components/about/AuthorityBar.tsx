import { serviceCoverage } from "@/data/site"
import { Container } from "@/components/layout/Container"

const facts = [
  { label: "Experiência jurídica", value: "26+ anos" },
  { label: "OAB/SP", value: "173.688" },
  { label: "Atuação", value: "Direito Imobiliário" },
  { label: "Escritório", value: "São Paulo (SP)", detail: "Atendimento presencial" },
  { label: "Online", value: "Todo o Brasil", detail: "Consultas à distância" },
]

export function AuthorityBar() {
  return (
    <section aria-label="Credenciais" className="border-y border-gold/20 bg-ivory">
      <Container className="py-8 md:py-10">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
          {facts.map((fact) => (
            <li key={fact.label} className="min-w-0">
              <p className="text-[11px] tracking-[0.18em] text-gold uppercase">{fact.label}</p>
              <p className="mt-2 font-serif text-[1.45rem] leading-tight text-navy sm:text-[1.65rem]">{fact.value}</p>
              {"detail" in fact && fact.detail ? (
                <p className="mt-1 text-xs leading-relaxed text-muted">{fact.detail}</p>
              ) : null}
            </li>
          ))}
        </ul>
        <p className="sr-only">
          {serviceCoverage.officeTitle}. {serviceCoverage.onlineTitle}.
        </p>
      </Container>
    </section>
  )
}
