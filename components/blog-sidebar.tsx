import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/blog"

export function BlogSidebar({ posts }: { posts: BlogPost[] }) {
  const staffPicks = posts.slice(0, 3)
  const topics = [
    "Blog",
    "Creative",
    "Data Science",
    "Politics",
    "Portfolio",
    "Startup",
    "Technology",
    "Theme",
    "WordPress",
  ]

  return (
    <aside className="hidden w-80 shrink-0 lg:block ">
      {/* Author Card */}
      <Card className="mb-4 border-none  p-6 shadow-none">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-inner">
          C
        </div>
        <h3 className="mb-2 font-sans text-base font-bold text-foreground">Colabrio</h3>
        <p className="mb-2 text-md leading-relaxed text-muted-foreground">
          ??? Digital Content Creator | ✨ UI/UX Designer | Work closely with developers ? to ensure the final product
          meets both aesthetic and technical ? requirements.
        </p>
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 rounded-full border-muted-foreground/20 bg-transparent"
          >
            <span className="sr-only">Threads</span>
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M14.82 2.413c-.664 0-1.196.525-1.196 1.17s.532 1.17 1.196 1.17c.664 0 1.196-.525 1.196-1.17s-.532-1.17-1.196-1.17zM2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" />
            </svg>
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 rounded-full border-muted-foreground/20 bg-transparent"
          >
            <span className="sr-only">X</span>
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Button>
        </div>
      </Card>

      {/* Staff Picks */}
      <div className="mb-8 px-2">
        <div className="mb-5 flex items-center gap-2">
          <span className="text-md">⚡</span>
          <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-foreground">Staff Picks</h3>
        </div>
        <div className="space-y-6">
          {staffPicks.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="mb-1 text-md font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">by {post.author || "Colabrio"}</span>
                <span className="mx-1.5">•</span>
                {post.date}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recommended Topics */}
      <div className="mb-8 px-2">
        <h3 className="mb-5 font-grift text-md font-bold uppercase tracking-wider text-foreground">
          Recommended Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <Button
              key={topic}
              variant="outline"
              size="sm"
              className="h-8 rounded-md font-normal px-3 text-sm border-none hover:bg-secondary"
            >
              {topic}
            </Button>
          ))}
        </div>
      </div>

      {/* Customization CTA */}
      <Card className="relative overflow-hidden border-none bg-primary p-6 text-white shadow-xl">
        <div className="relative z-10">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <h3 className="font-sans text-sm font-bold leading-snug">Looking For Customization?</h3>
            <Link href="#" className="ml-auto">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/20">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </Link>
          </div>
          <p className="text-[11px] leading-relaxed text-indigo-100">
            Hire us! We are WordPress specialists dedicated to bringing your ideas to life.
          </p>
        </div>
        {/* Background Decorative Pattern */}
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/5" />
      </Card>
    </aside>
  )
}
