import { portraits, professional } from "@/data/site"
import { whatsappUrl } from "@/lib/whatsapp"
import { Container } from "@/components/layout/Container"
import { Spotlight } from "@/components/ui/spotlight"
import { TextReveal } from "@/components/ui/text-reveal"
import { Eyebrow } from "@/components/ui/eyebrow"
import { PortraitFrame } from "@/components/ui/portrait-frame"
import { buttonClass } from "@/components/ui/button-styles"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { CoverageHighlight } from "@/components/ui/coverage-highlight"

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-nome"
      className="relative overflow-hidden scroll-mt-24 bg-paper pt-28 pb-16 lg:flex lg:min-h-[100svh] lg:items-center lg:pt-32 lg:pb-20"
    >
      <Spotlight />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-10%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(20,36,61,0.04),transparent_70%)]"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Eyebrow>Direito Imobiliário · Família · Sucessões</Eyebrow>
          <h1
            id="inicio-nome"
            className="max-w-3xl font-serif text-[1.85rem] leading-[1.08] font-semibold tracking-[0.03em] text-navy uppercase sm:text-[2.35rem] lg:text-[2.75rem]"
          >
            {professional.fullName}
          </h1>
          <span aria-hidden="true" className="mt-5 block h-px w-14 bg-gold sm:w-20" />
          <p className="mt-4 text-[11px] font-medium tracking-[0.2em] text-gold uppercase">{professional.oab}</p>
          <TextReveal
            id="inicio-titulo"
            as="h2"
            text="Segurança jurídica para o seu patrimônio imobiliário."
            className="mt-8 max-w-3xl text-[1.75rem] leading-[1.1] font-semibold tracking-[-0.02em] text-navy sm:text-4xl lg:text-[2.95rem]"
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Da análise de riscos à regularização imobiliária, ofereço assessoria jurídica especializada para proteger seu patrimônio e orientar cada etapa do processo com segurança e clareza.
          </p>
          <CoverageHighlight className="mt-8 max-w-2xl" />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={buttonClass("whatsapp", "w-full sm:w-auto")}>
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              Falar com a advogada
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <a href="#areas" className={buttonClass("secondary", "w-full sm:w-auto")}>
              Conhecer áreas de atuação
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <PortraitFrame
            imageSrc={portraits.hero || undefined}
            alt={`${professional.fullName}, advogada especializada em Direito Imobiliário`}
            caption=""
            drawing="facade"
            tone="light"
            priority
            objectPosition="center 18%"
          />
        </div>
      </Container>
    </section>
  )
}
