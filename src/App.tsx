import { Route, Routes } from "react-router-dom"
import { NavProvider, useNav } from "@/components/navbar/nav-context"
import { Navbar } from "@/components/navbar/Navbar"
import { Footer } from "@/components/footer/Footer"
import { ScrollManager } from "@/components/layout/ScrollManager"
import { WhatsAppFloat } from "@/components/whatsapp/WhatsAppButton"
import { Home } from "@/pages/Home"
import { Blog } from "@/pages/Blog"
import { BlogPost } from "@/pages/BlogPost"
import { NotFound } from "@/pages/NotFound"

function Shell() {
  const { open } = useNav()

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:bg-navy focus:px-4 focus:py-3 focus:text-ivory"
      >
        Ir para o conteúdo
      </a>
      <ScrollManager />
      <Navbar />
      <div inert={open ? true : undefined}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  )
}

export function App() {
  return (
    <NavProvider>
      <Shell />
    </NavProvider>
  )
}
