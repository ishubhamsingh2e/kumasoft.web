import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/blog"

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="flex-1">
      {/* Filter Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-border/50 pb-4">
        <div className="text-[13px] text-muted-foreground">Showing 1-{posts.length} of 12 results</div>
        <div className="flex flex-wrap gap-2">
          {["Categories", "Tags", "Authors"].map((filter) => (
            <Button
              key={filter}
              variant="outline"
              size="sm"
              className="h-9 rounded-md border-muted-foreground/10 bg-primary/80 px-4 text-xs font-medium text-white hover:bg-primary hover:text-white"
            >
              {filter}
              <svg
                className="ml-2 h-3 w-3 opacity-50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="group relative border-none bg-transparent shadow-none">
              {/* Image Container */}
              <div className="relative mb-4 aspect-[2/2] overflow-hidden rounded-2xl bg-muted">
                <img
                  src={post.image || "/placeholder.svg?height=600&width=800"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Category Tags Overlay */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {post.categories?.map((category) => (
                    <span
                      key={category}
                      className="rounded-lg bg-black/40 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="mb-2 flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                  <span>{post.readTime}</span>
                </div>
                <h2 className="line-clamp-2 font-sans text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h2>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-16 flex items-center justify-start gap-3">
        <Button variant="outline" size="icon" className="h-9 w-9 border-none bg-primary/50 font-bold text-primary">
          1
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:bg-primary/50">
          2
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:bg-primary/50">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  )
}
