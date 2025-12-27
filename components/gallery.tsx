"use client"

import { useState } from "react"
import { TemplateCard } from "./gallery-card"
import { cn } from "@/lib/utils"
import { div } from "motion/react-client"

const CATEGORIES = [
  { id: "all", name: "All", count: 35 },
  { id: "agency", name: "Agency", count: 20 },
  { id: "app", name: "App", count: 0 },
  { id: "blog", name: "Blog", count: 0 },
  { id: "corporate", name: "Corporate", count: 0 },
  { id: "event", name: "Event", count: 0 },
  { id: "maintenance", name: "Maintenance", count: 0 },
  { id: "portfolio", name: "Portfolio", count: 20 },
  { id: "product", name: "Product", count: 0 },
  { id: "service", name: "Service", count: 0 },
  { id: "shop", name: "Shop", count: 0 },
]

const TEMPLATES = [
  {
    id: 1,
    title: "Architectural Studio",
    tags: ["Design", "Interior", "Studio"],
    image: "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/Demo34_Home.webp",
    category: "agency",
  },
  {
    id: 2,
    title: "Design Studio",
    tags: ["Design", "Interior", "Studio"],
    image: "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/Demo34_Home.webp",
    category: "agency",
  },
  {
    id: 3,
    title: "Digital Agency",
    tags: ["Creative", "Design", "Digital"],
    image: "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/Demo34_Home.webp",
    category: "agency",
  },
  {
    id: 4,
    title: "Creative Agency",
    tags: ["Design", "Digital", "Studio"],
    image: "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/Demo34_Home.webp",
    category: "agency",
  },
  {
    id: 5,
    title: "Showcase Interactive",
    tags: ["Design", "Showcase", "Studio"],
    image: "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/Demo34_Home.webp",
    category: "portfolio",
  },
  {
    id: 6,
    title: "Corporate",
    tags: ["Business", "Media", "Service"],
    image: "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/Demo34_Home.webp",
    category: "corporate",
  },
]

export function TemplateGallery() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredTemplates = TEMPLATES.filter(
    (template) => activeCategory === "all" || template.category === activeCategory,
  )

  return (
    <section className="bg-[#f9f9fa]">
      <section className="py-20 container mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-2xl leading-[1.1]">
          Customize pre-designed templates effortlessly.
        </h2>
        <p className="text-lg text-muted-foreground max-w-sm font-medium leading-relaxed">
          Whether you need a portfolio site, an online store, or a personal blog use and mix up highly customizable and
          responsive demo templates to get started.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        <span className="text-sm font-bold text-muted-foreground mr-2">Filter by</span>
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1.5",
              activeCategory === category.id ? "bg-black text-white" : "bg-black/5 text-black hover:bg-black/10",
            )}
          >
            {category.name}
            {category.count > 0 && (
              <span
                className={cn("text-[10px] opacity-60", activeCategory === category.id ? "text-white" : "text-black")}
              >
                {category.count.toString().padStart(2, "0")}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {filteredTemplates.map((template) => (
          <TemplateCard key={template.id} title={template.title} tags={template.tags} image={template.image} />
        ))}
      </div>
    </section>
    </section>
  )
}
