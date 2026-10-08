export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, "")

export const professional = {
  fullName: "Viviane Melasso Tambellini",
  shortName: "Viviane Tambellini",
  role: "Advocacia",
  oab: "OAB/SP 173.688",
  oabNumber: "173.688",
  experience: "Mais de 26 anos",
} as const

export const contact = {
  phoneDisplay: "(11) 93235-9244",
  phoneE164: "5511932359244",
  phoneTel: "+5511932359244",
  phoneSchema: "+55-11-93235-9244",
  email: "vivimelasso@gmail.com",
  instagram: "@advogadavivitambellini",
  instagramUrl: "https://www.instagram.com/advogadavivitambellini/",
  hours: "Segunda a sexta-feira, das 9h às 18h.",
  coverage: "Atendimento online em todo o Brasil.",
} as const

/** Fotografia em public/imgs/ (origem: pasta imgs na raiz do projeto). */
export const assets = {
  portrait: "/imgs/viviane.jpeg",
} as const

export const portraits = {
  hero: assets.portrait,
  about: assets.portrait,
} as const

export const homeSeo = {
  title: "Viviane Tambellini | Advogada em Direito Imobiliário",
  description:
    "Advogada em São Paulo (OAB/SP 173.688) especializada em Direito Imobiliário, regularização de imóveis, contratos, inventário e planejamento sucessório.",
} as const

export const blogSeo = {
  title: "Conteúdos | Viviane Tambellini",
  description:
    "Conteúdos sobre Direito Imobiliário, regularização de imóveis, contratos, sucessões e planejamento patrimonial.",
} as const
