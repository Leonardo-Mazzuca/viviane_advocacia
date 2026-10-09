import { useEffect, useRef, useState, type AnchorHTMLAttributes, type ReactNode } from "react"
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "motion/react"
import { cn } from "@/lib/utils"

type MovingBorderProps = {
  children: ReactNode
  duration?: number
  rx?: string
  ry?: string
}

function MovingBorder({ children, duration = 8000, rx = "0", ry = "0" }: MovingBorderProps) {
  const pathRef = useRef<SVGRectElement>(null)
  const progress = useMotionValue(0)

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength()
    if (!length) return
    progress.set((time * (length / duration)) % length)
  })

  const x = useTransform(progress, (value) => pathRef.current?.getPointAtLength(value).x ?? 0)
  const y = useTransform(progress, (value) => pathRef.current?.getPointAtLength(value).y ?? 0)
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute h-full w-full" aria-hidden="true">
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div className="absolute top-0 left-0 inline-block" style={{ transform }}>
        {children}
      </motion.div>
    </>
  )
}

type MovingBorderLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  className?: string
}

export function MovingBorderLink({ children, className, ...props }: MovingBorderLinkProps) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(true)
  }, [])

  return (
    <a {...props} className={cn("relative inline-flex overflow-hidden bg-gold/60 p-px", className)}>
      {active ? (
        <span className="pointer-events-none absolute inset-0" aria-hidden="true">
          <MovingBorder duration={8000}>
            <span className="block h-14 w-14 bg-[radial-gradient(circle,#d8bd83,transparent_62%)]" />
          </MovingBorder>
        </span>
      ) : null}
      <span className="relative inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2.5 bg-gold px-8 text-sm font-semibold tracking-[0.06em] text-navy uppercase shadow-[0_12px_32px_-12px_rgba(184,149,80,0.7)] transition-[colors,transform] duration-300 hover:-translate-y-0.5 hover:bg-gold-light sm:w-auto">
        {children}
      </span>
    </a>
  )
}
