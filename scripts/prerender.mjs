import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

const root = process.cwd()
const dist = path.join(root, "dist")
const templatePath = path.join(dist, "index.html")
const template = fs.readFileSync(templatePath, "utf8")
const serverEntry = path.join(dist, "server", "entry-server.js")
const { render, routes, sitemapEntries, SITE_URL } = await import(pathToFileURL(serverEntry).href)

const marker = /<!--app-head-->[\s\S]*?<!--\/app-head-->/

function writePage(route, file) {
  const { html, head } = render(route)
  if (!marker.test(template)) {
    throw new Error("Marcador app-head não encontrado no index.html")
  }
  const page = template
    .replace(marker, `<!--app-head-->\n${head}\n    <!--/app-head-->`)
    .replace("<!--app-html-->", html)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, page)
  console.log(`prerender ${route} -> ${path.relative(root, file)}`)
}

for (const route of routes) {
  const file = route === "/" ? path.join(dist, "index.html") : path.join(dist, route.slice(1), "index.html")
  writePage(route, file)
}

writePage("/pagina-nao-encontrada", path.join(dist, "404.html"))

let robots = "User-agent: *\nAllow: /\n"
if (SITE_URL) {
  const body = sitemapEntries
    .map((entry) => {
      const loc = new URL(entry.path, `${SITE_URL}/`).toString()
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`
    })
    .join("\n")
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
  fs.writeFileSync(path.join(dist, "sitemap.xml"), xml)
  robots += `\nSitemap: ${SITE_URL}/sitemap.xml\n`
  console.log(`sitemap ${SITE_URL}/sitemap.xml`)
} else {
  console.log("VITE_SITE_URL vazio: canonical e sitemap não foram gerados.")
}

fs.writeFileSync(path.join(dist, "robots.txt"), robots)
