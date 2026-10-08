import { motion, useReducedMotion } from "motion/react"

const ease = [0.22, 1, 0.36, 1] as const

type TextRevealProps = {
  text: string
  className?: string
  id?: string
}

export function TextReveal({ text, className, id }: TextRevealProps) {
  if (typeof window === "undefined") {
    return (
      <h1 id={id} className={className}>
        {text}
      </h1>
    )
  }

  return <AnimatedHeadline text={text} className={className} id={id} />
}

function AnimatedHeadline({ text, className, id }: TextRevealProps) {
  const reduce = useReducedMotion()
  if (reduce) {
    return (
      <h1 id={id} className={className}>
        {text}
      </h1>
    )
  }

  const words = text.split(" ")
  return (
    <h1 id={id} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          initial={{ opacity: 0.4, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.045 * index, ease }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </h1>
  )
}
