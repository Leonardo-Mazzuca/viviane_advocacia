import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { professional } from "@/data/site"
import { navLinks } from "@/data/navigation"
import { whatsappUrl } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"
import { buttonClass } from "@/components/ui/button-styles"
import { Container } from "@/components/layout/Container"
import { useNav } from "@/components/navbar/nav-context"
import { MobileMenu } from "@/components/navbar/MobileMenu"

export function Navbar() {
  const { open, setOpen } = useNav()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [current, setCurrent] = useState("inicio")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (pathname !== "/") return
    const ids = navLinks.map((link) => link.id)

    const onScroll = () => {
      const marker = window.scrollY + 120
      let next: (typeof ids)[number] = "inicio"
      for (const id of ids) {
        const element = document.getElementById(id)
        if (element && element.offsetTop <= marker) next = id
      }
      setCurrent(next)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [setOpen])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [setOpen])

  const activeId = pathname.startsWith("/blog") ? "conteudos" : pathname === "/" ? current : ""

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 border-t border-gold/35 border-b transition-colors duration-300",
        scrolled ? "border-b-line bg-paper/95 shadow-[0_8px_30px_-24px_rgba(20,36,61,0.18)] backdrop-blur-md" : "border-b-transparent bg-paper/80 backdrop-blur-sm",
      )}
    >
      <Container className="flex h-full items-center justify-between gap-3">
        <Link
          to="/#inicio"
          className="min-w-0 leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          aria-label="Viviane Tambellini — início"
        >
          <span className="block truncate font-serif text-[1.15rem] text-navy sm:text-[1.35rem]">{professional.shortName}</span>
          <span className="mt-1 block text-[10px] tracking-[0.28em] text-gold uppercase">{professional.role}</span>
        </Link>

        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex" aria-label="Principal">
          {navLinks.map((link) => {
            const active = activeId === link.id
            return (
              <Link
                key={link.id}
                to={link.href}
                aria-current={active ? "location" : undefined}
                className={cn(
                  "text-[13px] whitespace-nowrap text-muted transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
                  active && "font-medium text-navy",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-navy shadow-[0_8px_20px_-8px_rgba(184,149,80,0.8)] ring-1 ring-gold-light/50 lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            aria-label="Falar pelo WhatsApp, abre em nova aba"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("whatsapp", "hidden px-4 text-sm lg:inline-flex")}
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span className="xl:hidden">WhatsApp</span>
            <span className="hidden xl:inline">Falar pelo WhatsApp</span>
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-navy lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>
      <MobileMenu open={open} onNavigate={() => setOpen(false)} />
    </header>
  )
}
