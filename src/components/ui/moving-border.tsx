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
    <a {...props} className={cn("relative inline-flex overflow-hidden bg-champagne/50 p-px", className)}>
      {active ? (
        <span className="pointer-events-none absolute inset-0" aria-hidden="true">
          <MovingBorder duration={8000}>
            <span className="block h-14 w-14 bg-[radial-gradient(circle,#f3e6cf,transparent_62%)]" />
          </MovingBorder>
        </span>
      ) : null}
      <span className="relative inline-flex min-h-12 w-full items-center justify-center gap-2 bg-ivory px-7 text-xs font-semibold tracking-[0.16em] text-navy uppercase transition-colors duration-300 hover:bg-sand sm:w-auto">
        {children}
      </span>
    </a>
  )
}
