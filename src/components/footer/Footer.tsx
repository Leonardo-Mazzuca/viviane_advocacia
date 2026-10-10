import { Link } from "react-router-dom"
import { contact, professional, serviceCoverage } from "@/data/site"
import { footerLinks } from "@/data/navigation"
import { whatsappUrl } from "@/lib/whatsapp"
import { Container } from "@/components/layout/Container"
import { InstagramIcon } from "@/components/ui/instagram-icon"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"

const socialLinkClass =
  "inline-flex min-h-11 items-center gap-2.5 text-sm text-graphite transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ivory text-graphite">
      <Container className="py-10 pb-28 md:py-12 md:pb-20">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="w-full text-center lg:max-w-sm lg:text-left">
            <p className="font-serif text-2xl leading-tight font-semibold text-navy sm:text-[1.75rem]">{professional.fullName}</p>
            <p className="mt-1 text-[11px] tracking-[0.2em] text-gold uppercase">{professional.role}</p>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              © {year} {professional.shortName}. {professional.oab}. {serviceCoverage.officeTitle}.
            </p>
          </div>

          <nav aria-label="Rodapé" className="w-full lg:flex-1 lg:px-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center lg:w-auto lg:flex-col lg:items-end lg:gap-3">
            <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
              <InstagramIcon className="h-[1.125rem] w-[1.125rem] shrink-0 text-navy" />
              {contact.instagram}
              <span className="sr-only"> (Instagram, abre em nova aba)</span>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
              <WhatsAppIcon className="h-[1.125rem] w-[1.125rem] shrink-0 text-navy" />
              {contact.phoneDisplay}
              <span className="sr-only"> (WhatsApp, abre em nova aba)</span>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-center text-xs leading-relaxed text-muted lg:text-left">
          <p>As informações deste site têm caráter institucional e não representam consulta jurídica.</p>
          <p className="mt-2">
            <a
              href={`mailto:${contact.email}`}
              className="underline decoration-gold-light/60 underline-offset-2 hover:text-navy hover:decoration-gold"
            >
              {contact.email}
            </a>
            {" · "}
            {serviceCoverage.onlineTitle}.
          </p>
        </div>
      </Container>
    </footer>
  )
}
