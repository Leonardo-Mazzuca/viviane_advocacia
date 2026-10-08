type Json = null | string | number | boolean | Json[] | { [key: string]: Json }

export function JsonLd({ data }: { data: Json | null }) {
  if (!data) return null
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll("<", "\\u003c") }}
    />
  )
}
