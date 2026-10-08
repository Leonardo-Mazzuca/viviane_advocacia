import { Clock, Mail, MessageCircle, type LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { contact } from "@/data/site"
import { whatsappUrl } from "@/lib/whatsapp"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { buttonClass } from "@/components/ui/button-styles"
import { Eyebrow } from "@/components/ui/eyebrow"

function mark(Icon: LucideIcon) {
  return function Mark({ className }: { className?: string }) {
    return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />
  }
}

function InstagramMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

const rows: {
  label: string
  value: string
  href: string
  external: boolean
  icon: (props: { className?: string }) => ReactNode
}[] = [
  {
    label: "WhatsApp",
    value: contact.phoneDisplay,
    href: whatsappUrl,
    external: true,
    icon: mark(MessageCircle),
  },
  {
    label: "E-mail",
    value: contact.email,
    href: `mailto:${contact.email}`,
    external: false,
    icon: mark(Mail),
  },
  {
    label: "Instagram",
    value: contact.instagram,
    href: contact.instagramUrl,
    external: true,
    icon: InstagramMark,
  },
]

export function Contact() {
  return (
    <Section id="contato" labelId="contato-titulo" className="bg-sand">
      <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Contato</Eyebrow>
          <h2 id="contato-titulo" className="text-[2.4rem] leading-[1.1] text-ink sm:text-5xl">
            Vamos conversar?
          </h2>
          <p className="mt-5 text-lg text-graphite">{contact.coverage}</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted">
            <Clock className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            {contact.hours}
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "mt-8 w-full sm:w-auto")}>
            Falar pelo WhatsApp
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </div>
        <dl className="divide-y divide-line border-y border-line">
          {rows.map((row) => {
            const Icon = row.icon
            return (
              <div key={row.label} className="flex items-start gap-4 py-6">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-line text-navy">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <dt className="text-[11px] tracking-[0.18em] text-gold uppercase">{row.label}</dt>
                  <dd className="mt-1">
                    <a
                      href={row.href}
                      target={row.external ? "_blank" : undefined}
                      rel={row.external ? "noopener noreferrer" : undefined}
                      className="font-serif text-2xl break-words text-ink underline decoration-transparent underline-offset-4 hover:decoration-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                      {row.value}
                      {row.external ? <span className="sr-only"> (abre em nova aba)</span> : null}
                    </a>
                  </dd>
                </div>
              </div>
            )
          })}
        </dl>
      </Container>
    </Section>
  )
}
