import { getAllPosts } from "@/lib/blog"
import { BlogGrid } from "@/components/blog-grid"
import { BlogSidebar } from "@/components/blog-sidebar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Blog - Share your stories",
  description: "Share your stories and news with everyone.",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
   <>
    <div className="pt-36  bg-[url('/background1-c.jpg')]  bg-slate-100">
      {/* Header */}
      <header className="py-16 container mx-auto ">
        <div >
          <h1 className="mb-3 font-sans text-6xl font-bold tracking-tight text-background md:text-8xl">Blog</h1>
          <p className="mb-8 text-lg font-medium text-muted-foreground">Share your stories and news with everyone.</p>
          <Button
            size="lg"
            className="h-12 rounded-lg bg-black px-8 text-sm font-bold text-white hover:bg-black/80 dark:bg-white dark:text-black"
          >
            Get Started
          </Button>
        </div>
      </header>
      

     
    </div>
     {/* Main Content */}
      <div className=" pb-24 container mx-auto pt-8">
        <div className="mb-10 flex items-center gap-2 text-[13px] font-medium text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="opacity-40">›</span>
          <span className="text-foreground">Blog</span>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Sidebar */}
          <BlogSidebar posts={posts} />

          {/* Blog Grid */}
          <div className="flex-1">
            <BlogGrid posts={posts} />
          </div>
        </div>
      </div></>
  )
}
