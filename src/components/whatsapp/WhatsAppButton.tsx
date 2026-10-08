import { MessageCircle } from "lucide-react"
import { whatsappUrl } from "@/lib/whatsapp"

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Viviane pelo WhatsApp, abre em nova aba"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy text-ivory shadow-[0_12px_30px_-16px_rgba(16,24,32,0.8)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream md:right-6 md:bottom-6"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
    </a>
  )
}
