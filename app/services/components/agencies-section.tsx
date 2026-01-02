"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeInOut" },
}

export function SectionHeader({ preTitle, title }: { preTitle?: string; title: string }) {
  return (
    <motion.div {...fadeInUp} className="  *:space-y-6">
      {preTitle && (
        <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground block">{preTitle}</span>
      )}
     <div className="flex">
       <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] tracking-tight text-balance">
        {title}
      </h2>
      <img src="/graphic1.png" alt="" />
     </div>
    </motion.div>
  )
}

export function GridBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-border/50">
      <div className="lg:col-span-3">
        <h3 className="text-lg font-extrabold uppercase tracking-widest text-primary/80">{label}</h3>
      </div>
      <div className="lg:col-span-9">{children}</div>
    </div>
  )
}

export function AgencySection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`py-24 container mx-auto space-y-32 ${className}`}>{children}</section>
  )
}
