import { cn } from "@/lib/utils"

function FacadeDrawing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 420" className={className} fill="none" aria-hidden="true">
      <path d="M36 364 H284" stroke="currentColor" strokeWidth="0.8" />
      <path d="M78 364 V156 H242 V364" stroke="currentColor" strokeWidth="0.8" />
      <path d="M78 156 L160 84 L242 156" stroke="currentColor" strokeWidth="0.8" />
      <path d="M160 84 V68" stroke="currentColor" strokeWidth="0.6" />
      <path d="M98 156 V364" stroke="currentColor" strokeWidth="0.45" />
      <path d="M222 156 V364" stroke="currentColor" strokeWidth="0.45" />
      <rect x="112" y="186" width="34" height="48" stroke="currentColor" strokeWidth="0.7" />
      <rect x="174" y="186" width="34" height="48" stroke="currentColor" strokeWidth="0.7" />
      <rect x="112" y="256" width="34" height="48" stroke="currentColor" strokeWidth="0.7" />
      <rect x="174" y="256" width="34" height="48" stroke="currentColor" strokeWidth="0.7" />
      <path d="M146 364 V308 H174 V364" stroke="currentColor" strokeWidth="0.7" />
      <path d="M48 188 H78" stroke="currentColor" strokeWidth="0.45" />
      <path d="M242 188 H276" stroke="currentColor" strokeWidth="0.45" />
      <path d="M56 364 V214 H78" stroke="currentColor" strokeWidth="0.45" />
      <path d="M264 364 V214 H242" stroke="currentColor" strokeWidth="0.45" />
    </svg>
  )
}

function ArchDrawing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 420" className={className} fill="none" aria-hidden="true">
      <path d="M48 364 H272" stroke="currentColor" strokeWidth="0.8" />
      <path d="M86 364 V196 Q160 78 234 196 V364" stroke="currentColor" strokeWidth="0.8" />
      <path d="M112 364 V214 Q160 132 208 214 V364" stroke="currentColor" strokeWidth="0.6" />
      <path d="M148 364 V268 H172 V364" stroke="currentColor" strokeWidth="0.7" />
      <path d="M64 250 H86" stroke="currentColor" strokeWidth="0.45" />
      <path d="M234 250 H258" stroke="currentColor" strokeWidth="0.45" />
    </svg>
  )
}

export function PortraitFrame({
  imageSrc,
  alt,
  caption,
  drawing = "facade",
  tone = "navy",
  priority = false,
  objectPosition = "center top",
}: {
  imageSrc?: string
  alt: string
  caption: string
  drawing?: "facade" | "arch"
  tone?: "navy" | "sand" | "light"
  priority?: boolean
  objectPosition?: string
}) {
  const hasPhoto = Boolean(imageSrc)

  return (
    <figure className="w-full">
      <div
        className={cn(
          "relative shadow-[0_24px_48px_-32px_rgba(20,36,61,0.22)]",
          tone === "navy" && "bg-navy text-cream",
          tone === "sand" && "bg-sand text-navy/70",
          tone === "light" && "bg-paper text-navy",
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-3 border",
            tone === "light" ? "border-gold/40" : "border-current/25",
          )}
          aria-hidden="true"
        />
        <div className={cn("relative", hasPhoto ? "aspect-[4/5]" : "aspect-[4/3] max-h-[420px] lg:aspect-[4/5] lg:max-h-none")}>
          <div className="absolute inset-0">
            {hasPhoto ? (
              <img
                src={imageSrc}
                alt={alt}
                className="h-full w-full object-cover"
                style={{ objectPosition }}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={priority ? "high" : "auto"}
              />
            ) : (
              <div className="relative flex h-full items-center justify-center px-8">
                {drawing === "facade" ? (
                  <FacadeDrawing className="h-[68%] w-auto max-w-[76%]" />
                ) : (
                  <ArchDrawing className="h-[68%] w-auto max-w-[76%]" />
                )}
                <p className="absolute top-6 left-6 text-[10px] tracking-[0.22em] uppercase opacity-80">OAB/SP 173.688</p>
                <p className="absolute bottom-6 left-6 max-w-[70%] text-[10px] tracking-[0.18em] uppercase">{caption}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {!hasPhoto ? (
        <figcaption className="sr-only">
          {caption}. Espaço reservado para a fotografia profissional de Viviane Melasso Tambellini. Nenhuma imagem de outra pessoa é utilizada aqui.
        </figcaption>
      ) : null}
    </figure>
  )
}
