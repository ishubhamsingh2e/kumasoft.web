import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
      <h1 className="mb-4 text-4xl font-bold text-foreground">404 - Post Not Found</h1>
      <p className="mb-8 text-muted-foreground">The blog post you're looking for doesn't exist.</p>
      <Button asChild>
        <Link href="/blog">Back to Blog</Link>
      </Button>
    </div>
  )
}
