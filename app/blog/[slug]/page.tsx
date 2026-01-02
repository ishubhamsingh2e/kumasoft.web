import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"


export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params
  const post = await getPostBySlug("figma-aspect-ratios")

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt || post.title,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } =  await params
  console.log("Slug:", slug); // Debugging line
  const post = await getPostBySlug(slug)

  if (!post) {
    
    notFound()
  }

  return (
    <div className="min-h-screen bg-background pt-36 container mx-auto">
      {/* Header */}
      <header className="border-b border-border py-4">
        <div >
          <Button variant="ghost" size="sm" className="bg-[#F05A29] text-white" asChild >
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto  py-12">
        {/* Meta Info */}
        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <span>{post.readTime}</span>
          {post.author && (
            <>
              <span>•</span>
              <span>by {post.author}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h1 className="mb-6 text-balance font-sans text-4xl font-bold text-foreground md:text-5xl">{post.title}</h1>

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <span key={category} className="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                {category}
              </span>
            ))}
          </div>
        )}

        {/* Featured Image */}
        {post.image && (
          <div className="mb-12 overflow-hidden rounded-lg">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-auto w-full object-cover" />
          </div>
        )}
         <div
  className="prose prose-lg dark:prose-invert max-w-none"
  dangerouslySetInnerHTML={{ __html: post.htmlContent }}
  />
      </article>
    </div>
  )
}
