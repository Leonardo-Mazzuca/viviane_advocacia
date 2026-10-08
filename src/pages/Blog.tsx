import { useMemo, useState } from "react"
import { blogCategories, blogPosts } from "@/data/blogPosts"
import { blogSeo } from "@/data/site"
import { blogSchema } from "@/lib/schema"
import { Seo } from "@/components/seo/Seo"
import { JsonLd } from "@/components/seo/JsonLd"
import { Container } from "@/components/layout/Container"
import { SectionIntro } from "@/components/ui/section-intro"
import { ArticleCard } from "@/components/blog/ArticleCard"

export function Blog() {
  const [category, setCategory] = useState("Todas")
  const categories = useMemo(() => ["Todas", ...blogCategories], [])
  const visible = category === "Todas" ? blogPosts : blogPosts.filter((post) => post.category === category)
  const hasDrafts = blogPosts.some((post) => post.demonstrative)

  return (
    <main id="conteudo" tabIndex={-1} className="px-0 pt-28 pb-20 outline-none md:pt-32 md:pb-28">
      <Seo title={blogSeo.title} description={blogSeo.description} path="/blog" />
      <JsonLd data={blogSchema()} />
      <Container>
        <SectionIntro eyebrow="Conteúdos" title="Informação para proteger seu patrimônio." titleId="blog-titulo" level="h1">
          Conteúdos sobre Direito Imobiliário, regularização de imóveis, contratos, sucessões e planejamento patrimonial.
        </SectionIntro>
        {hasDrafts ? (
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            Os textos identificados como “Em preparação” são modelos editoriais e ainda não representam publicações oficiais.
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
          {categories.map((item) => {
            const pressed = category === item
            return (
              <button
                key={item}
                type="button"
                aria-pressed={pressed}
                onClick={() => setCategory(item)}
                className={
                  pressed
                    ? "min-h-11 border border-navy bg-navy px-4 text-sm text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
                    : "min-h-11 border border-line bg-paper px-4 text-sm text-graphite hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                }
              >
                {item}
              </button>
            )
          })}
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <li key={post.slug} className="min-w-0">
              <ArticleCard post={post} />
            </li>
          ))}
        </ul>
        {visible.length === 0 ? <p className="mt-8 text-sm text-muted">Nenhum conteúdo nesta categoria.</p> : null}
      </Container>
    </main>
  )
}
