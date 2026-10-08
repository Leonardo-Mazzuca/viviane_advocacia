import { assets, professional, SITE_URL } from "@/data/site"

export type HeadPayload = {
  title: string
  description: string
  path: string
  noindex?: boolean
  noCanonical?: boolean
  ogType?: "website" | "article"
}

type MetaTag = {
  attr: "name" | "property"
  key: string
  content: string
}

type LinkTag = {
  rel: string
  href: string
}

export type HeadModel = {
  title: string
  metas: MetaTag[]
  links: LinkTag[]
}

export function absoluteUrl(path: string) {
  if (!SITE_URL) return ""
  return new URL(path, `${SITE_URL}/`).toString()
}

export function buildHeadModel(payload: HeadPayload): HeadModel {
  const url = payload.noCanonical ? "" : absoluteUrl(payload.path)
  const metas: MetaTag[] = [
    { attr: "name", key: "description", content: payload.description },
    { attr: "name", key: "author", content: professional.fullName },
    {
      attr: "name",
      key: "robots",
      content: payload.noindex ? "noindex, follow" : "index, follow",
    },
    { attr: "property", key: "og:title", content: payload.title },
    { attr: "property", key: "og:description", content: payload.description },
    { attr: "property", key: "og:type", content: payload.ogType ?? "website" },
    { attr: "property", key: "og:locale", content: "pt_BR" },
    { attr: "property", key: "og:site_name", content: professional.fullName },
    { attr: "name", key: "twitter:card", content: "summary_large_image" },
    { attr: "name", key: "twitter:title", content: payload.title },
    { attr: "name", key: "twitter:description", content: payload.description },
  ]

  if (url) {
    metas.push({ attr: "property", key: "og:url", content: url })
  }

  const shareImage = absoluteUrl(assets.portrait)
  if (shareImage) {
    metas.push({ attr: "property", key: "og:image", content: shareImage })
    metas.push({ attr: "name", key: "twitter:image", content: shareImage })
  }

  return {
    title: payload.title,
    metas,
    links: url ? [{ rel: "canonical", href: url }] : [],
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

export function renderHeadTags(payload: HeadPayload) {
  const model = buildHeadModel(payload)
  const title = `    <title>${escapeHtml(model.title)}</title>`
  const metas = model.metas
    .map(
      (meta) =>
        `    <meta data-seo="${meta.attr}:${meta.key}" ${meta.attr}="${meta.key}" content="${escapeHtml(meta.content)}" />`,
    )
    .join("\n")
  const links = model.links
    .map((link) => `    <link data-seo="link:${link.rel}" rel="${link.rel}" href="${escapeHtml(link.href)}" />`)
    .join("\n")
  return [title, metas, links].filter(Boolean).join("\n")
}

function upsertMeta(id: string, attr: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[data-seo="${id}"]`)
  if (!element) {
    element = document.createElement("meta")
    element.setAttribute("data-seo", id)
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }
  element.setAttribute("content", content)
}

function upsertLink(id: string, rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[data-seo="${id}"]`)
  if (!element) {
    element = document.createElement("link")
    element.setAttribute("data-seo", id)
    element.rel = rel
    document.head.appendChild(element)
  }
  element.href = href
}

export function applyHead(payload: HeadPayload) {
  const model = buildHeadModel(payload)
  document.title = model.title
  const seen = new Set<string>()

  for (const meta of model.metas) {
    const id = `${meta.attr}:${meta.key}`
    seen.add(id)
    upsertMeta(id, meta.attr, meta.key, meta.content)
  }

  for (const link of model.links) {
    const id = `link:${link.rel}`
    seen.add(id)
    upsertLink(id, link.rel, link.href)
  }

  document.head.querySelectorAll<HTMLElement>("[data-seo]").forEach((element) => {
    const id = element.getAttribute("data-seo")
    if (id && !seen.has(id)) element.remove()
  })
}
