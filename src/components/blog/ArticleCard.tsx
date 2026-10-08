import { Link } from "react-router-dom"
import { formatPostDate, readingMinutes, type BlogPost } from "@/data/blogPosts"
import { HoverCard } from "@/components/ui/hover-card"

export function ArticleCard({ post }: { post: BlogPost }) {
  const minutes = readingMinutes(post)

  return (
    <article className="h-full min-w-0">
      <HoverCard className="h-full">
        <Link
          to={`/blog/${post.slug}`}
          className="relative z-[1] flex h-full flex-col p-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze sm:p-8"
        >
          <div className="flex items-center justify-between gap-3 text-[11px] tracking-[0.16em] text-bronze uppercase">
            <span>{post.category}</span>
            <span className="text-right tracking-normal text-muted normal-case">
              {post.publishedAt ? <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time> : "Em preparação"}
            </span>
          </div>
          <h3 className="mt-6 text-[1.65rem] leading-tight text-ink">{post.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.description}</p>
          <p className="mt-6 text-xs tracking-wide text-graphite">{minutes} min de leitura</p>
        </Link>
      </HoverCard>
    </article>
  )
}
