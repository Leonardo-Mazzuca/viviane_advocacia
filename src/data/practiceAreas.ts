export type PracticeIcon =
  | "building"
  | "contract"
  | "inventory"
  | "family"
  | "registry"
  | "planning"

export type PracticeArea = {
  id: string
  number: string
  title: string
  description: string
  icon: PracticeIcon
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "aquisicao",
    number: "01",
    title: "Aquisição de Imóveis",
    description:
      "Assessoria jurídica na aquisição de imóveis, com análise documental e identificação de possíveis riscos antes da concretização do negócio.",
    icon: "building",
  },
  {
    id: "contratos",
    number: "02",
    title: "Contratos e Locações",
    description:
      "Elaboração e revisão de contratos, especialmente relacionados a operações imobiliárias e locações.",
    icon: "contract",
  },
  {
    id: "inventarios",
    number: "03",
    title: "Inventários e Partilhas",
    description:
      "Assessoria jurídica em inventários e partilhas, buscando segurança e organização na transmissão do patrimônio.",
    icon: "inventory",
  },
  {
    id: "familia",
    number: "04",
    title: "Direito de Família",
    description:
      "Divórcios, reconhecimento e dissolução de união estável e elaboração de pactos antenupciais.",
    icon: "family",
  },
  {
    id: "regularizacao",
    number: "05",
    title: "Regularização de Imóveis",
    description:
      "Abertura de matrículas, registros de escrituras e formais de partilha, usucapião, adjudicação compulsória e outras medidas necessárias à regularização imobiliária.",
    icon: "registry",
  },
  {
    id: "planejamento",
    number: "06",
    title: "Planejamento Sucessório e Matrimonial",
    description:
      "Planejamento jurídico para organização patrimonial e sucessória, considerando as particularidades de cada família.",
    icon: "planning",
  },
]
