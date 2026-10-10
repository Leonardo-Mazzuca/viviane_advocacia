import { assets, professional } from "@/data/site"
import { Container } from "@/components/layout/Container"

export function ExperiencePhoto() {
  const alt = `${professional.fullName} no escritório, analisando documentos e contratos jurídicos.`

  return (
    <div className="border-y border-gold/20 bg-ivory">
      <Container className="py-10 md:py-14">
        <figure className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-sm border border-gold/35 bg-paper p-2 shadow-[0_20px_50px_-28px_rgba(20,36,61,0.28)] sm:p-3">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-3 left-3 z-[1] h-8 w-8 border-t-2 border-l-2 border-gold/70 sm:top-4 sm:left-4 sm:h-10 sm:w-10"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-3 bottom-3 z-[1] h-8 w-8 border-r-2 border-b-2 border-gold/70 sm:right-4 sm:bottom-4 sm:h-10 sm:w-10"
            />
            <img
              src={assets.office}
              alt={alt}
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover object-[center_35%] sm:aspect-[16/10]"
            />
          </div>
          <figcaption className="mt-4 text-center text-sm leading-relaxed text-muted">
            Atuação dedicada na análise de contratos, documentos e estratégias jurídicas.
          </figcaption>
        </figure>
      </Container>
    </div>
  )
}
