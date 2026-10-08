import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { fileURLToPath, URL } from "node:url"

function resolveSiteUrl(env: Record<string, string>) {
  const fromEnv = env.VITE_SITE_URL?.replace(/\/$/, "")
  if (fromEnv) return fromEnv
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`
  return ""
}

export default defineConfig(({ isSsrBuild, mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  const siteUrl = resolveSiteUrl(env)

  return {
    plugins: [react(), tailwindcss()],
    define: {
      "import.meta.env.VITE_SITE_URL": JSON.stringify(siteUrl),
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      outDir: isSsrBuild ? "dist/server" : "dist",
      emptyOutDir: true,
    },
  }
})
