import { Link } from "react-router-dom"
import { contact, professional } from "@/data/site"
import { footerLinks } from "@/data/navigation"
import { whatsappUrl } from "@/lib/whatsapp"
import { Container } from "@/components/layout/Container"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gold/20 bg-navy text-ivory">
      <Container className="py-16 pb-28 md:pb-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-3xl leading-tight">{professional.fullName}</p>
            <p className="mt-3 text-[11px] tracking-[0.22em] text-cream uppercase">{professional.role}</p>
            <p className="mt-4 text-sm text-cream/85">{professional.oab}</p>
          </div>
          <nav aria-label="Rodapé">
            <p className="text-[11px] tracking-[0.18em] text-cream uppercase">Mapa</p>
            <ul className="mt-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-cream/85 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-[11px] tracking-[0.18em] text-cream uppercase">Contato</p>
            <address className="mt-4 not-italic">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-sm text-cream/85 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {contact.phoneDisplay}
                <span className="sr-only">, WhatsApp, abre em nova aba</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex min-h-11 items-center text-sm break-all text-cream/85 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {contact.email}
              </a>
            </address>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.18em] text-cream uppercase">Instagram</p>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center text-sm text-cream/85 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {contact.instagram}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/85">{contact.coverage}</p>
          </div>
        </div>
        <div className="mt-14 border-t border-gold/15 pt-6 text-sm leading-relaxed text-cream/75">
          <p>© {year} {professional.fullName}. Todos os direitos reservados.</p>
          <p className="mt-2">As informações deste site têm caráter institucional e não representam consulta jurídica.</p>
        </div>
      </Container>
    </footer>
  )
}
