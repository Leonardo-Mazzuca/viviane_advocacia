import { motion, useReducedMotion } from "motion/react"

const ease = [0.22, 1, 0.36, 1] as const

type TextRevealProps = {
  text: string
  className?: string
  id?: string
  as?: "h1" | "h2" | "h3"
}

export function TextReveal({ text, className, id, as = "h1" }: TextRevealProps) {
  if (typeof window === "undefined") {
    const Tag = as
    return (
      <Tag id={id} className={className}>
        {text}
      </Tag>
    )
  }

  return <AnimatedHeadline text={text} className={className} id={id} as={as} />
}

function AnimatedHeadline({ text, className, id, as = "h1" }: TextRevealProps) {
  const reduce = useReducedMotion()
  const Tag = as

  if (reduce) {
    return (
      <Tag id={id} className={className}>
        {text}
      </Tag>
    )
  }

  const words = text.split(" ")
  return (
    <Tag id={id} className={className}>
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
    </Tag>
  )
}
