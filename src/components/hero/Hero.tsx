import { portraits, professional } from "@/data/site"
import { whatsappUrl } from "@/lib/whatsapp"
import { Container } from "@/components/layout/Container"
import { Spotlight } from "@/components/ui/spotlight"
import { TextReveal } from "@/components/ui/text-reveal"
import { Eyebrow } from "@/components/ui/eyebrow"
import { PortraitFrame } from "@/components/ui/portrait-frame"
import { buttonClass } from "@/components/ui/button-styles"

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="relative overflow-hidden scroll-mt-24 pt-28 pb-16 lg:flex lg:min-h-[100svh] lg:items-center lg:pt-32 lg:pb-20">
      <Spotlight />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-10%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(16,24,32,0.05),transparent_70%)]"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Eyebrow>Direito Imobiliário · Família · Sucessões</Eyebrow>
          <TextReveal
            id="inicio-titulo"
            text="Segurança jurídica para o seu patrimônio imobiliário."
            className="max-w-3xl text-[2.125rem] leading-[1.08] text-ink sm:text-5xl lg:text-[4.15rem]"
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-graphite sm:text-lg">
            Da análise de riscos à regularização imobiliária, ofereço assessoria jurídica especializada para proteger seu patrimônio e orientar cada etapa do processo com segurança e clareza.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "w-full sm:w-auto")}>
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
            tone="navy"
            priority
            objectPosition="center 18%"
          />
        </div>
      </Container>
    </section>
  )
}
