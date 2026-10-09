import { Link } from "react-router-dom"
import { contact, professional, serviceCoverage } from "@/data/site"
import { footerLinks } from "@/data/navigation"
import { whatsappUrl } from "@/lib/whatsapp"
import { Container } from "@/components/layout/Container"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gold/25 bg-navy text-white">
      <Container className="py-16 pb-28 md:pb-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-3xl leading-tight text-white">{professional.fullName}</p>
            <p className="mt-3 text-[11px] tracking-[0.22em] text-gold-light uppercase">{professional.role}</p>
            <p className="mt-4 text-sm text-white/80">{professional.oab}</p>
          </div>
          <nav aria-label="Rodapé">
            <p className="text-[11px] tracking-[0.18em] text-gold-light uppercase">Mapa</p>
            <ul className="mt-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-white/80 transition-colors hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-[11px] tracking-[0.18em] text-gold-light uppercase">Contato</p>
            <address className="mt-4 not-italic">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-sm text-white/80 hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {contact.phoneDisplay}
                <span className="sr-only">, WhatsApp, abre em nova aba</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex min-h-11 items-center text-sm break-all text-white/80 hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {contact.email}
              </a>
            </address>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.18em] text-gold-light uppercase">Instagram</p>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center text-sm text-white/80 hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {contact.instagram}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
              <span className="block font-medium text-white">{serviceCoverage.officeTitle}</span>
              <span className="mt-1 block">{serviceCoverage.onlineTitle}.</span>
            </p>
          </div>
        </div>
        <div className="mt-14 border-t border-gold/20 pt-6 text-sm leading-relaxed text-white/70">
          <p>
            © {year} {professional.fullName}. Todos os direitos reservados.
          </p>
          <p className="mt-2">As informações deste site têm caráter institucional e não representam consulta jurídica.</p>
        </div>
      </Container>
    </footer>
  )
}
