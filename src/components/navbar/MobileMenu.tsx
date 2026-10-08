import { useEffect, useRef, type KeyboardEvent } from "react"
import { Link } from "react-router-dom"
import { navLinks } from "@/data/navigation"
import { whatsappUrl } from "@/lib/whatsapp"
import { buttonClass } from "@/components/ui/button-styles"

export function MobileMenu({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const first = dialogRef.current?.querySelector<HTMLElement>("a, button")
    first?.focus()
  }, [open])

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault()
      onNavigate()
      return
    }
    if (event.key !== "Tab" || !dialogRef.current) return
    const items = [...dialogRef.current.querySelectorAll<HTMLElement>("a, button")]
    if (items.length === 0) return
    const first = items[0]
    const last = items[items.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last?.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first?.focus()
    }
  }

  if (!open) return null

  return (
    <div
      id="menu-mobile"
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      onKeyDown={onKeyDown}
      className="fixed inset-0 top-16 z-40 overflow-y-auto bg-ivory lg:hidden"
    >
      <nav className="mx-auto flex w-full max-w-6xl flex-col px-5 py-6 sm:px-8" aria-label="Mobile">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.href}
            className="border-b border-line py-4 text-[1.75rem] leading-tight text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
            onClick={onNavigate}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass("primary", "mt-8 w-full")}
        >
          Falar pelo WhatsApp
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      </nav>
    </div>
  )
}
