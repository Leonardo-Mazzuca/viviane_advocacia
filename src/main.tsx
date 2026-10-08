import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { App } from "@/App"
import "@/styles/globals.css"
import "@fontsource/cormorant-garamond/latin-500.css"
import "@fontsource/cormorant-garamond/latin-600.css"
import "@fontsource/cormorant-garamond/latin-500-italic.css"
import "@fontsource/manrope/latin-400.css"
import "@fontsource/manrope/latin-500.css"
import "@fontsource/manrope/latin-600.css"

const root = document.getElementById("root")
if (!root) throw new Error("Elemento #root não encontrado")

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
