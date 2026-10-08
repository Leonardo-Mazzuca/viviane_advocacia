import { renderToString } from "react-dom/server"
import { MemoryRouter } from "react-router-dom"
import { App } from "@/App"
import { HeadContext } from "@/components/seo/head-context"
import { blogPosts, isIndexable } from "@/data/blogPosts"
import { SITE_URL } from "@/data/site"
import { renderHeadTags, type HeadPayload } from "@/lib/head"

export { SITE_URL }

export const routes = ["/", "/blog", ...blogPosts.map((post) => `/blog/${post.slug}`)]

export const sitemapEntries = [
  { path: "/", priority: "1.0" },
  { path: "/blog", priority: "0.8" },
  ...blogPosts.filter(isIndexable).map((post) => ({ path: `/blog/${post.slug}`, priority: "0.7" })),
]

export function render(url: string) {
  const bucket: { current: HeadPayload | null } = { current: null }
  const html = renderToString(
    <HeadContext.Provider value={bucket}>
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>
    </HeadContext.Provider>,
  )

  if (!bucket.current) {
    throw new Error(`Head ausente em ${url}`)
  }

  return { html, head: renderHeadTags(bucket.current) }
}
