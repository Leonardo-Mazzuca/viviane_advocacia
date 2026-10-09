import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, MessageCircle, X } from "lucide-react"
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
        "fixed inset-x-0 top-0 z-50 h-16 border-t border-champagne/80 border-b transition-colors duration-300",
        scrolled ? "border-b-line bg-ivory/92 backdrop-blur-md" : "border-b-transparent bg-transparent",
      )}
    >
      <Container className="flex h-full items-center justify-between gap-3">
        <Link
          to="/#inicio"
          className="min-w-0 leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
          aria-label="Viviane Tambellini — início"
        >
          <span className="block truncate font-serif text-[1.15rem] text-ink sm:text-[1.35rem]">{professional.shortName}</span>
          <span className="mt-1 block text-[10px] tracking-[0.28em] text-muted uppercase">{professional.role}</span>
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
                  "text-[13px] whitespace-nowrap text-graphite transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze",
                  active && "text-ink",
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
            className="inline-flex h-11 w-11 items-center justify-center text-navy lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
            aria-label="Falar pelo WhatsApp, abre em nova aba"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("primary", "hidden px-4 text-sm lg:inline-flex")}
          >
            <span className="xl:hidden">WhatsApp</span>
            <span className="hidden xl:inline">Falar pelo WhatsApp</span>
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-navy lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
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
