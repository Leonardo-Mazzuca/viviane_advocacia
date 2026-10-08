import { useContext, useEffect } from "react"
import { applyHead, type HeadPayload } from "@/lib/head"
import { HeadContext } from "@/components/seo/head-context"

export function Seo(props: HeadPayload) {
  const bucket = useContext(HeadContext)
  if (bucket) bucket.current = props

  const { title, description, path, noindex, noCanonical, ogType } = props
  useEffect(() => {
    applyHead({ title, description, path, noindex, noCanonical, ogType })
  }, [title, description, path, noindex, noCanonical, ogType])

  return null
}
