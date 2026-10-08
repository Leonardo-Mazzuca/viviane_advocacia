import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

export function ScrollManager() {
  const { pathname, hash } = useLocation()
  const first = useRef(true)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const behavior: ScrollBehavior = first.current || reduce ? "auto" : "smooth"
    first.current = false

    const frame = window.requestAnimationFrame(() => {
      if (!hash) {
        window.scrollTo({ top: 0, behavior })
        return
      }
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior, block: "start" })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
