import { Link, useParams } from "react-router-dom"
import { getPostBySlug, isIndexable, readingMinutes, relatedPosts } from "@/data/blogPosts"
import { professional } from "@/data/site"
import { articleSchema, breadcrumbSchema } from "@/lib/schema"
import { whatsappUrl } from "@/lib/whatsapp"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { Seo } from "@/components/seo/Seo"
import { JsonLd } from "@/components/seo/JsonLd"
import { Container } from "@/components/layout/Container"
import { Disclaimer } from "@/components/blog/Disclaimer"
import { ArticleBody } from "@/components/blog/ArticleBody"
import { ArticleCard } from "@/components/blog/ArticleCard"
import { buttonClass } from "@/components/ui/button-styles"
import { NotFound } from "@/pages/NotFound"

export function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) return <NotFound />

  const minutes = readingMinutes(post)
  const indexable = isIndexable(post)
  const related = relatedPosts(post.slug)
  const crumbs = breadcrumbSchema([
    { name: "Início", path: "/" },
    { name: "Conteúdos", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ])

  return (
    <main id="conteudo" tabIndex={-1} className="pt-28 pb-20 outline-none md:pt-32 md:pb-28">
      <Seo
        title={`${post.title} | Viviane Tambellini`}
        description={post.description}
        path={`/blog/${post.slug}`}
        noindex={!indexable}
        ogType="article"
      />
      <JsonLd data={crumbs} />
      {indexable ? <JsonLd data={articleSchema(post)} /> : null}
      <Container>
        <article className="mx-auto max-w-2xl">
          <nav aria-label="Trilha" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="underline decoration-gold-light/70 underline-offset-4 hover:text-navy">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/blog" className="underline decoration-gold-light/70 underline-offset-4 hover:text-navy">
                  Conteúdos
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-graphite">
                {post.title}
              </li>
            </ol>
          </nav>
          <p className="mt-8 text-[11px] tracking-[0.18em] text-gold uppercase">{post.category}</p>
          <h1 className="mt-4 text-[2.35rem] leading-[1.1] font-semibold tracking-[-0.02em] text-navy sm:text-[2.75rem] lg:text-[3rem]">
            {post.title}
          </h1>
          <span aria-hidden="true" className="mt-5 block h-0.5 w-14 bg-gold sm:w-16" />
          <p className="mt-4 text-sm text-muted">
            {professional.fullName}
            <span aria-hidden="true"> · </span>
            {minutes} min de leitura
            <span aria-hidden="true"> · </span>
            {post.publishedAt ? post.publishedAt : "Em preparação"}
          </p>
          <div className="mt-8">
            {post.demonstrative ? <Disclaimer /> : null}
          </div>
          <div className="mt-8">
            <ArticleBody blocks={post.blocks} />
          </div>
          <aside className="mt-12 border-t border-line pt-8">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-navy sm:text-4xl">Quer analisar o seu caso?</h2>
            <p className="mt-3 text-graphite">O caminho adequado depende dos documentos e da situação concreta.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={buttonClass("whatsapp", "mt-6 w-full sm:w-auto")}>
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              Falar com a advogada
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </aside>
        </article>
        {related.length > 0 ? (
          <section aria-labelledby="relacionados-titulo" className="mx-auto mt-20 max-w-6xl">
            <h2 id="relacionados-titulo" className="text-3xl text-navy">
              Outros conteúdos
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <ArticleCard post={item} />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </Container>
    </main>
  )
}
