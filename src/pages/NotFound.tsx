import { Link } from "react-router-dom"
import { Seo } from "@/components/seo/Seo"
import { Container } from "@/components/layout/Container"
import { buttonClass } from "@/components/ui/button-styles"

export function NotFound() {
  return (
    <main id="conteudo" tabIndex={-1} className="pt-32 pb-24 outline-none">
      <Seo
        title="Página não encontrada | Viviane Tambellini"
        description="A página solicitada não foi encontrada no site de Viviane Melasso Tambellini."
        path="/404"
        noindex
        noCanonical
      />
      <Container className="max-w-xl">
        <p className="text-[11px] tracking-[0.18em] text-bronze uppercase">404</p>
        <h1 className="mt-4 text-4xl text-ink sm:text-5xl">Página não encontrada</h1>
        <p className="mt-4 text-graphite">O endereço pode ter sido digitado de forma incompleta ou a página não faz parte deste site.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className={buttonClass("primary", "w-full sm:w-auto")}>
            Voltar ao início
          </Link>
          <Link to="/#contato" className={buttonClass("secondary", "w-full sm:w-auto")}>
            Falar com a advogada
          </Link>
        </div>
      </Container>
    </main>
  )
}
