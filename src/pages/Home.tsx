import { homeSeo } from "@/data/site"
import { homeSchema } from "@/lib/schema"
import { Seo } from "@/components/seo/Seo"
import { JsonLd } from "@/components/seo/JsonLd"
import { Hero } from "@/components/hero/Hero"
import { AuthorityBar } from "@/components/about/AuthorityBar"
import { About } from "@/components/about/About"
import { PracticeAreas } from "@/components/practice-areas/PracticeAreas"
import { Differentials } from "@/components/experience/Differentials"
import { Process } from "@/components/process/Process"
import { ContactCta } from "@/components/contact/ContactCta"
import { BlogPreview } from "@/components/blog/BlogPreview"
import { Contact } from "@/components/contact/Contact"

export function Home() {
  return (
    <main id="conteudo" tabIndex={-1} className="outline-none">
      <Seo title={homeSeo.title} description={homeSeo.description} path="/" />
      <JsonLd data={homeSchema()} />
      <Hero />
      <AuthorityBar />
      <About />
      <PracticeAreas />
      <Differentials />
      <Process />
      <ContactCta />
      <BlogPreview />
      <Contact />
    </main>
  )
}
