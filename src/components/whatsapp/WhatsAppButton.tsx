import { whatsappUrl } from "@/lib/whatsapp"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Viviane pelo WhatsApp, abre em nova aba"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 inline-flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-gold text-navy shadow-[0_14px_36px_-10px_rgba(184,149,80,0.85)] ring-2 ring-white/90 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:bg-gold-light hover:shadow-[0_18px_40px_-10px_rgba(184,149,80,0.95)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy md:right-6 md:bottom-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
