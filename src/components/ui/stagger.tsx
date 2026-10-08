import type { ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

const ease = [0.22, 1, 0.36, 1] as const

const child = {
  hidden: { opacity: 1, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

export function StaggerList({
  as = "div",
  className,
  children,
}: {
  as?: "ul" | "ol" | "div"
  className?: string
  children: ReactNode
}) {
  const reduce = useReducedMotion()
  const Comp = as === "ol" ? motion.ol : as === "ul" ? motion.ul : motion.div

  return (
    <Comp
      className={className}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : 0.07 } },
      }}
    >
      {children}
    </Comp>
  )
}

export function StaggerItem({
  as = "div",
  className,
  children,
}: {
  as?: "li" | "div"
  className?: string
  children: ReactNode
}) {
  const Comp = as === "li" ? motion.li : motion.div
  return (
    <Comp className={className} variants={child}>
      {children}
    </Comp>
  )
}
