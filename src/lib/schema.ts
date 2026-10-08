import { assets, blogSeo, contact, homeSeo, professional, SITE_URL } from "@/data/site"
import { absoluteUrl } from "@/lib/head"
import type { BlogPost } from "@/data/blogPosts"

type Json = null | string | number | boolean | Json[] | { [key: string]: Json }

function withUrl(path: string) {
  return absoluteUrl(path) || undefined
}

export function homeSchema(): Json {
  const url = withUrl("/")
  const personId = url ? `${url}#viviane` : undefined

  const person: { [key: string]: Json } = {
    "@type": "Person",
    name: professional.fullName,
    jobTitle: "Advogada",
    email: contact.email,
    telephone: contact.phoneSchema,
    knowsLanguage: "pt-BR",
    knowsAbout: [
      "Direito Imobiliário",
      "Regularização de imóveis",
      "Contratos imobiliários",
      "Inventário e partilha",
      "Direito de Família",
      "Planejamento sucessório",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "OAB/SP 173.688",
        credentialCategory: "registro profissional",
        identifier: professional.oabNumber,
        recognizedBy: {
          "@type": "Organization",
          name: "Ordem dos Advogados do Brasil — Seção de São Paulo",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Pós-Graduação em Direito e Negócios Imobiliários",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "IBMEC / Damásio",
        },
      },
    ],
  }

  if (personId) person["@id"] = personId
  if (url) person.url = url
  const portrait = withUrl(assets.portrait)
  if (portrait) person.image = portrait

  const service: { [key: string]: Json } = {
    "@type": "LegalService",
    name: `${professional.fullName} — ${professional.role}`,
    email: contact.email,
    telephone: contact.phoneSchema,
    areaServed: { "@type": "Country", name: "Brasil" },
    serviceType: ["Direito Imobiliário", "Direito de Família", "Sucessões"],
    sameAs: [contact.instagramUrl],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    description: homeSeo.description,
  }

  if (url) service.url = url
  if (personId) service.provider = { "@id": personId }

  const website: { [key: string]: Json } = {
    "@type": "WebSite",
    name: professional.fullName,
    inLanguage: "pt-BR",
    description: homeSeo.description,
  }

  if (url) {
    website.url = url
    if (personId) website.publisher = { "@id": personId }
  }

  return {
    "@context": "https://schema.org",
    "@graph": [person, service, website],
  }
}

export function blogSchema(): Json {
  const url = withUrl("/blog")
  const data: { [key: string]: Json } = {
    "@type": "CollectionPage",
    name: blogSeo.title,
    description: blogSeo.description,
    inLanguage: "pt-BR",
    isPartOf: url ? { "@type": "WebSite", name: professional.fullName, url: withUrl("/") ?? "" } : professional.fullName,
  }
  if (url) data.url = url
  return { "@context": "https://schema.org", "@graph": [data] }
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json | null {
  if (!SITE_URL) return null
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function articleSchema(post: BlogPost): Json | null {
  if (!SITE_URL || !post.publishedAt) return null
  const url = absoluteUrl(`/blog/${post.slug}`)
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    inLanguage: "pt-BR",
    mainEntityOfPage: url,
    url,
    author: {
      "@type": "Person",
      name: professional.fullName,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Person",
      name: professional.fullName,
    },
  }
}
