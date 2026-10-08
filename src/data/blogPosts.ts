/**
 * CONTEÚDO DEMONSTRATIVO
 * ---------------------------------------------------------------------------
 * Os textos deste arquivo são modelos editoriais para estrutura, layout e SEO.
 * Não são publicações oficiais de Viviane Melasso Tambellini e não devem ser
 * apresentados como orientação jurídica dela.
 *
 * Quando os textos reais forem fornecidos:
 * 1. Substitua `description` e `blocks`.
 * 2. Defina `demonstrative: false`.
 * 3. Defina `published: true`.
 * 4. Informe `publishedAt` no formato ISO (YYYY-MM-DD).
 *
 * Somente posts com `published: true` e `demonstrative: false` entram no
 * sitemap e deixam de receber noindex.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }

export type BlogPost = {
  slug: string
  title: string
  description: string
  category: string
  publishedAt: string | null
  demonstrative: boolean
  published: boolean
  blocks: BlogBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "o-que-verificar-antes-de-comprar-um-imovel",
    title: "O que verificar antes de comprar um imóvel?",
    description:
      "Antes de comprar um imóvel, a matrícula, a titularidade de quem vende e eventuais ônus ajudam a enxergar riscos que não aparecem na visita ao bem.",
    category: "Aquisição de imóveis",
    publishedAt: null,
    demonstrative: true,
    published: false,
    blocks: [
      {
        type: "p",
        text: "A visita ao imóvel mostra conservação, luz e vizinhança. A segurança da compra, porém, depende do que está — ou não está — no registro e nos documentos de quem pretende vender.",
      },
      {
        type: "h2",
        text: "O que a matrícula costuma revelar",
      },
      {
        type: "p",
        text: "A matrícula atualizada é o ponto de partida da análise. Nela se observa quem figura como proprietário, como o imóvel está descrito e se existem registros que limitam a disponibilidade do bem.",
      },
      {
        type: "ul",
        items: [
          "Titularidade de quem se apresenta como vendedor",
          "Descrição do imóvel e confrontação com a realidade negociada",
          "Ônus, gravames ou restrições que precisem ser compreendidos antes da assinatura",
          "Coerência entre certidões, documentos pessoais e o negócio proposto",
        ],
      },
      {
        type: "h2",
        text: "Por que a leitura vem antes da concretização",
      },
      {
        type: "p",
        text: "Débitos de IPTU, condomínio e a forma de pagamento também merecem conferência, porque nem todo risco aparece na matrícula. O objetivo da assessoria é identificar esses pontos enquanto ainda é possível ajustar o caminho do negócio.",
      },
      {
        type: "p",
        text: "Não existe lista única capaz de esgotar toda compra. A leitura adequada depende dos documentos e das circunstâncias de cada operação.",
      },
    ],
  },
  {
    slug: "quando-um-imovel-precisa-ser-regularizado",
    title: "Quando um imóvel precisa ser regularizado?",
    description:
      "Há imóveis ocupados há anos que ainda não refletem, no registro, a realidade da propriedade. A regularização aproxima esses dois planos.",
    category: "Regularização",
    publishedAt: null,
    demonstrative: true,
    published: false,
    blocks: [
      {
        type: "p",
        text: "Um imóvel pode estar ocupado, construído e até negociado sem que o cartório conte a mesma história. Regularizar é o trabalho de aproximar a realidade do bem da sua situação registral.",
      },
      {
        type: "h2",
        text: "Situações que costumam pedir atenção",
      },
      {
        type: "ul",
        items: [
          "Imóvel sem matrícula individualizada",
          "Escritura assinada e ainda não levada a registro",
          "Formal de partilha pendente de registro",
          "Construção ou alteração que não foi averbada",
          "Divergência entre quem ocupa o bem e quem figura no registro",
        ],
      },
      {
        type: "h2",
        text: "O caminho depende do desencontro",
      },
      {
        type: "p",
        text: "Abertura de matrícula, registro, averbação, usucapião ou adjudicação compulsória não são sinônimos. Cada uma responde a um tipo de desencontro entre a posse, o título e o registro.",
      },
      {
        type: "p",
        text: "Por isso a primeira etapa é compreender o que o imóvel é hoje, no fato e no papel, antes de indicar uma medida.",
      },
    ],
  },
  {
    slug: "o-que-e-adjudicacao-compulsoria",
    title: "O que é adjudicação compulsória?",
    description:
      "A adjudicação compulsória é uma medida para quem tem direito à escritura e não consegue obtê-la de forma voluntária. A viabilidade depende de cada caso.",
    category: "Regularização",
    publishedAt: null,
    demonstrative: true,
    published: false,
    blocks: [
      {
        type: "p",
        text: "Há compras em que o preço foi pago, ou o direito à aquisição está documentado, e mesmo assim a escritura não sai. A adjudicação compulsória existe para suprir essa outorga quando a via voluntária não se completa.",
      },
      {
        type: "h2",
        text: "O que a medida procura resolver",
      },
      {
        type: "p",
        text: "O objetivo prático é permitir que o direito à aquisição produza efeito no registro, diante da recusa, da omissão ou da impossibilidade de quem deveria outorgar a escritura.",
      },
      {
        type: "p",
        text: "A via judicial é a forma clássica. Em hipóteses específicas, a legislação de registros públicos também prevê um caminho extrajudicial. Nem toda negociação incompleta se enquadra: é preciso haver título e uma situação registral compatível com o pedido.",
      },
      {
        type: "h2",
        text: "O que a análise observa",
      },
      {
        type: "ul",
        items: [
          "Existência de documento que demonstre o direito à aquisição",
          "Identificação do imóvel e de quem deveria outorgar a escritura",
          "Situação atual da matrícula",
          "Viabilidade do caminho judicial ou extrajudicial naquele caso",
        ],
      },
      {
        type: "p",
        text: "Sem esses elementos, o nome do instituto não indica, por si, que a medida seja cabível.",
      },
    ],
  },
  {
    slug: "usucapiao-quando-pode-ser-utilizado",
    title: "Usucapião: quando pode ser utilizado?",
    description:
      "Usucapião é uma forma de aquisição pela posse, quando os requisitos legais estão presentes. Não é automática e varia conforme a situação.",
    category: "Regularização",
    publishedAt: null,
    demonstrative: true,
    published: false,
    blocks: [
      {
        type: "p",
        text: "Usucapião é uma forma de aquisição da propriedade pela posse qualificada. O tempo de ocupação, sozinho, não responde se o direito existe: a lei exige requisitos que mudam conforme a modalidade.",
      },
      {
        type: "h2",
        text: "Quando a conversa costuma começar",
      },
      {
        type: "p",
        text: "A pergunta aparece com frequência quando alguém ocupa um imóvel há anos, construiu, pagou impostos e, ainda assim, não tem o nome na matrícula — ou a matrícula nem existe de forma individualizada.",
      },
      {
        type: "ul",
        items: [
          "Como a posse foi exercida e por quanto tempo",
          "Se há oposição de terceiros ou disputa sobre o bem",
          "Qual modalidade, em tese, dialoga com aquela história",
          "Se o caminho será judicial ou extrajudicial",
        ],
      },
      {
        type: "h2",
        text: "Um cuidado importante",
      },
      {
        type: "p",
        text: "As modalidades têm requisitos próprios. Tratar prazos e metragens como se fossem uma regra única leva a pedidos inadequados. A análise do caso concreto vem antes de qualquer protocolo.",
      },
    ],
  },
  {
    slug: "como-funciona-o-planejamento-sucessorio",
    title: "Como funciona o planejamento sucessório?",
    description:
      "Planejamento sucessório é a organização jurídica da transmissão do patrimônio, feita a partir da família concreta — e não de um modelo único.",
    category: "Sucessões",
    publishedAt: null,
    demonstrative: true,
    published: false,
    blocks: [
      {
        type: "p",
        text: "Planejar a sucessão é decidir, com antecedência e dentro da lei, como o patrimônio deve ser organizado para o futuro da família. Não é um produto padronizado: o desenho muda com as pessoas, os bens e os regimes de bens.",
      },
      {
        type: "h2",
        text: "O que se observa",
      },
      {
        type: "ul",
        items: [
          "Composição da família e regime de bens",
          "Imóveis, sua regularidade e a forma como estão titulados",
          "Desejos já manifestados e pontos que ainda precisam de conversa",
          "Instrumentos jurídicos compatíveis com aquela realidade, como testamento, doação ou pacto",
        ],
      },
      {
        type: "h2",
        text: "Relação com inventário e partilha",
      },
      {
        type: "p",
        text: "Quando não houve organização prévia, ou quando ela precisa ser concluída, inventário e partilha continuam sendo o caminho para transmitir o patrimônio com segurança. O planejamento não apaga essa etapa; pode torná-la mais clara.",
      },
      {
        type: "p",
        text: "Cada família pede uma leitura própria. O que serviu a um patrimônio não se transfere automaticamente a outro.",
      },
    ],
  },
  {
    slug: "cuidados-juridicos-antes-de-assinar-um-contrato-de-locacao",
    title: "Cuidados jurídicos antes de assinar um contrato de locação",
    description:
      "Um contrato de locação define prazo, valor, garantias e encargos. Ler com atenção antes de assinar evita surpresas na vigência da locação.",
    category: "Contratos",
    publishedAt: null,
    demonstrative: true,
    published: false,
    blocks: [
      {
        type: "p",
        text: "O contrato de locação é o documento que organiza a relação entre quem cede o uso do imóvel e quem passa a ocupá-lo. A pressa na assinatura costuma deixar para depois cláusulas que vão valer por meses ou anos.",
      },
      {
        type: "h2",
        text: "Pontos que merecem leitura calma",
      },
      {
        type: "ul",
        items: [
          "Qualificação das partes e poderes de quem assina",
          "Descrição do imóvel, compatível com o que será ocupado",
          "Prazo, valor, reajuste e data de vencimento",
          "Encargos, garantias e regras sobre benfeitorias",
          "Condições de vistoria, multa e devolução",
        ],
      },
      {
        type: "h2",
        text: "Revisão não é desconfiança gratuita",
      },
      {
        type: "p",
        text: "A Lei do Inquilinato é o marco geral das locações urbanas, mas o contrato concreta as obrigações daquela relação. Ajustar uma cláusula ambígua antes da assinatura é mais simples do que discuti-la no meio da vigência.",
      },
      {
        type: "p",
        text: "A revisão útil é a que parte do imóvel, das pessoas e do uso pretendido — não de um modelo genérico.",
      },
    ],
  },
]

export function isIndexable(post: BlogPost) {
  return post.published && !post.demonstrative
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function postPlainText(post: BlogPost) {
  return post.blocks
    .map((block) => (block.type === "ul" ? block.items.join(" ") : block.text))
    .join(" ")
}

export function readingMinutes(post: BlogPost) {
  const words = postPlainText(post).trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 180))
}

export function formatPostDate(iso: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`))
}

export function relatedPosts(slug: string, limit = 2) {
  const current = getPostBySlug(slug)
  if (!current) return []
  const sameCategory = blogPosts.filter((post) => post.slug !== slug && post.category === current.category)
  const others = blogPosts.filter((post) => post.slug !== slug && post.category !== current.category)
  return [...sameCategory, ...others].slice(0, limit)
}

export const blogCategories = [...new Set(blogPosts.map((post) => post.category))]
