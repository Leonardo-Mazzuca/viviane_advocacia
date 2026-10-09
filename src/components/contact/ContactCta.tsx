import { MessageCircle } from "lucide-react"
import { whatsappUrl } from "@/lib/whatsapp"
import { Container } from "@/components/layout/Container"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { MovingBorderLink } from "@/components/ui/moving-border"

export function ContactCta() {
  return (
    <BackgroundGradient>
      <section aria-labelledby="cta-titulo" className="relative py-24 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <h2 id="cta-titulo" className="text-[2.4rem] leading-[1.1] text-ivory sm:text-5xl md:text-6xl">
              Tem uma dúvida sobre o seu imóvel?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#ddd6cc] sm:text-lg">
              Entre em contato e descubra qual pode ser o melhor caminho para regularizar e proteger o seu patrimônio.
            </p>
            <MovingBorderLink
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              WhatsApp agora
              <span className="sr-only"> (abre em nova aba)</span>
            </MovingBorderLink>
          </div>
        </Container>
      </section>
    </BackgroundGradient>
  )
}
