import fs from "fs"
import path from "path"
import matter from "gray-matter"
import MarkdownIt from "markdown-it"
import anchor from "markdown-it-anchor"
import attrs from "markdown-it-attrs"

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true, // Convert '\n' in paragraphs into <br>
})
  .use(anchor, {
    permalink: anchor.permalink.headerLink(),
    level: [1, 2, 3, 4],
  })
  .use(attrs)

const postsDirectory = path.join(process.cwd(), "content/posts")

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
  content: string
  htmlContent: string
  author?: string
  categories?: string[]
  image?: string
  readTime?: string
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Ensure directory exists
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString().split("T")[0],
        excerpt: data.excerpt || "",
        content,
        htmlContent: md.render(content),
        author: data.author,
        categories: data.categories || [],
        image: data.image,
        readTime: data.readTime || "4 min read",
      }
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    let fileContents: string

    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, "utf8")
    } else {
      const mdPath = path.join(postsDirectory, `${slug}.md`)
      if (fs.existsSync(mdPath)) {
        fileContents = fs.readFileSync(mdPath, "utf8")
      } else {
        return null
      }
    }

    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString().split("T")[0],
      excerpt: data.excerpt || "",
      content,
      htmlContent: md.render(content),
      author: data.author,
      categories: data.categories || [],
      image: data.image,
      readTime: data.readTime || "4 min read",
    }
  } catch (error) {
    return null
  }
}
