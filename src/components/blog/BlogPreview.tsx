import { Link } from "react-router-dom"
import { blogPosts } from "@/data/blogPosts"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionIntro } from "@/components/ui/section-intro"
import { ArticleCard } from "@/components/blog/ArticleCard"
import { StaggerItem, StaggerList } from "@/components/ui/stagger"

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3)

  return (
    <Section id="conteudos" labelId="conteudos-titulo" className="bg-ivory">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro eyebrow="Conteúdos" title="Informação para proteger seu patrimônio." titleId="conteudos-titulo">
            Conteúdos sobre Direito Imobiliário, regularização de imóveis, contratos, sucessões e planejamento patrimonial.
          </SectionIntro>
          <Link
            to="/blog"
            className="inline-flex min-h-11 items-center text-sm text-navy underline decoration-gold-light/70 underline-offset-4 hover:decoration-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Ver todos os conteúdos
          </Link>
        </div>
        <StaggerList as="ul" className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem as="li" key={post.slug} className="h-full">
              <ArticleCard post={post} />
            </StaggerItem>
          ))}
        </StaggerList>
      </Container>
    </Section>
  )
}
